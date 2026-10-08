import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Ribbon3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const width = currentMount.clientWidth || 1440;
    const height = currentMount.clientHeight || 810;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 3.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    let ribbonGroup = new THREE.Group();
    scene.add(ribbonGroup);

    let ribbon = null;
    const loader = new GLTFLoader();

    loader.load(
      '/assets/3d/curve.glb',
      (gltf) => {
        ribbon = gltf.scene;

        // Apply rich metallic gloss material
        ribbon.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.metalness = 0.88;
            child.material.roughness = 0.15;
            if (child.material.color) {
              child.material.color.setHex(0xC84200);
            }
          }
        });

        // Center ribbon geometry at origin (0,0,0)
        ribbon.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(ribbon);
        const center = box.getCenter(new THREE.Vector3());
        ribbon.position.sub(center);

        ribbonGroup.add(ribbon);

        // Rotate 90 degrees on X to face loops directly forward
        // (Left loop down, middle loop up, right loop down)
        ribbonGroup.rotation.set(Math.PI / 2, 0, 0);

        // Scale to span across 1440px viewport
        const scale = 2.65;
        ribbonGroup.scale.set(scale, scale, scale);
        ribbonGroup.position.set(0, -0.05, 0);
      },
      undefined,
      (err) => {
        console.warn('Ribbon GLB notice:', err);
      }
    );

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // if (ribbon) {
      //   ribbon.position.y = 0.1 + Math.sin(time * 0.6) * 0.04;
      //   ribbon.rotation.z = Math.sin(time * 0.4) * 0.02;
      // }
      // if (ribbon) {
      //   ribbon.position.y = 0.1;
      // }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
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
