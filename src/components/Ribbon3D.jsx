import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Ribbon3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let scene, camera, renderer, ribbonGroup, animationFrameId;
    let isVisible = false;
    let isInitialized = false;

    const initThree = () => {
      if (isInitialized) return;
      isInitialized = true;

      scene = new THREE.Scene();
      const width = currentMount.clientWidth || 1440;
      const height = currentMount.clientHeight || 810;

      camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
      camera.position.set(0, 0.2, 3.2);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);

      // Studio Gloss Lighting for Ribbon
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
      scene.add(ambientLight);

      const mainOrangeLight = new THREE.DirectionalLight(0xff5500, 6.0);
      mainOrangeLight.position.set(4, 5, 4);
      scene.add(mainOrangeLight);

      const whiteHighlight = new THREE.DirectionalLight(0xffffff, 4.5);
      whiteHighlight.position.set(-3, 3, 3);
      scene.add(whiteHighlight);

      const bottomRimLight = new THREE.DirectionalLight(0xff2200, 3.5);
      bottomRimLight.position.set(0, -4, -2);
      scene.add(bottomRimLight);

      ribbonGroup = new THREE.Group();
      scene.add(ribbonGroup);

      const loader = new GLTFLoader();
      loader.load(
        '/assets/3d/curve.glb',
        (gltf) => {
          const ribbon = gltf.scene;
          ribbon.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.metalness = 0.88;
              child.material.roughness = 0.15;
              if (child.material.color) {
                child.material.color.setHex(0xC84200);
              }
            }
          });

          ribbon.updateMatrixWorld(true);
          const box = new THREE.Box3().setFromObject(ribbon);
          const center = box.getCenter(new THREE.Vector3());
          ribbon.position.sub(center);

          ribbonGroup.add(ribbon);
          ribbonGroup.rotation.set(Math.PI / 2, 0, 0);
          const scale = 2.65;
          ribbonGroup.scale.set(scale, scale, scale);
          ribbonGroup.position.set(0, -0.05, 0);
        },
        undefined,
        (err) => console.warn('Ribbon GLB notice:', err)
      );

      const renderLoop = () => {
        if (isVisible && renderer && scene && camera) {
          renderer.render(scene, camera);
        }
        animationFrameId = requestAnimationFrame(renderLoop);
      };
      renderLoop();
    };

    const handleResize = () => {
      if (!renderer || !camera || !currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Only load & run Three.js when section enters or is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (entry.isIntersecting && !isInitialized) {
          initThree();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(currentMount);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) {
        if (currentMount && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-95 z-0 overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    />
  );
};
