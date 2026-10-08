import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Statue3D = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = currentMount.clientWidth || 360;
    const height = currentMount.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    currentMount.appendChild(renderer.domElement);

    // Studio Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff4600, 3.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4466ff, 2.0);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffaa55, 2.5);
    rimLight.position.set(0, 4, -3);
    scene.add(rimLight);

    // 3D Model Group & Interaction tracking
    let model = null;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const loader = new GLTFLoader();
    loader.load(
      '/assets/3d/statue.glb',
      (gltf) => {
        model = gltf.scene;

        // Auto-center and fit model into view
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.8 / maxDim;
        model.scale.set(scale, scale, scale);
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale - 0.2;
        model.position.z = -center.z * scale;

        // Enhance metallic shader materials
        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.metalness = Math.min(1.0, (child.material.metalness || 0.6) + 0.2);
            child.material.roughness = Math.max(0.15, (child.material.roughness || 0.4) - 0.1);
          }
        });

        scene.add(model);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.warn('Statue GLB load notice:', error);
        setLoadError(true);
        setLoading(false);
      }
    );

    // Mouse movement parallax handler
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (model) {
        // Smooth floating sway + mouse tracking
        targetRotationY = mouseX * 0.4 + Math.sin(elapsedTime * 0.8) * 0.15;
        targetRotationX = mouseY * 0.2 + Math.cos(elapsedTime * 0.8) * 0.05;

        model.rotation.y += (targetRotationY - model.rotation.y) * 0.05;
        model.rotation.x += (targetRotationX - model.rotation.x) * 0.05;
        model.position.y = -0.2 + Math.sin(elapsedTime * 1.5) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Loading Shimmer */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Fallback in case WebGL is disabled */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="w-40 h-40 bg-gradient-to-tr from-brand-orange/30 to-black rounded-full filter blur-xl" />
          <span className="text-xs font-mono text-gray-400 mt-2">3D Holographic Model Active</span>
        </div>
      )}
    </div>
  );
};
