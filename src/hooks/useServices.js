import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { fallbackServices } from '../data/fallbackContent';

export const useServices = () => {
  const [services, setServices] = useState(fallbackServices);
  const [loading, setLoading] = useState(true);
  const [isLiveFromDb, setIsLiveFromDb] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setServices(fallbackServices);
        setLoading(false);
        setIsLiveFromDb(false);
        return;
      }

      try {
        const { data, error: dbError } = await supabase
          .from('services')
          .select('*')
          .order('display_order', { ascending: true });

        if (dbError) throw dbError;

        if (data && data.length > 0) {
          setServices(data);
          setIsLiveFromDb(true);
        } else {
          setServices(fallbackServices);
          setIsLiveFromDb(false);
        }
      } catch (err) {
        console.warn('Supabase fetch notice: using fallback content data layer', err.message);
        setError(err.message);
        setServices(fallbackServices);
        setIsLiveFromDb(false);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, isLiveFromDb, error };
};
