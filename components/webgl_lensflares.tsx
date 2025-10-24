'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FlyControls } from 'three-stdlib';

// source: https://github.com/mrdoob/three.js/blob/master/examples/webgl_lensflares.html
export default function WebglLensflares() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const controlsRef = useRef<FlyControls | null>(null);
    const clockRef = useRef<THREE.Clock>(new THREE.Clock());
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let controls: FlyControls;

        // Initialize Three.js scene
			function init() {
                // Camera
                camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 15000);
                camera.position.z = 250;
                cameraRef.current = camera;

                // Scene
                scene = new THREE.Scene();
                scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01, THREE.SRGBColorSpace);
                scene.fog = new THREE.Fog(scene.background, 3500, 15000);
                sceneRef.current = scene;

                // World - create floating cubes
                const s = 250;
                const geometry = new THREE.BoxGeometry(s, s, s);
                const material = new THREE.MeshPhongMaterial({ 
                    color: 0xffffff, 
                    specular: 0xffffff, 
                    shininess: 50 
                });

                for (let i = 0; i < 3000; i++) {
                    const mesh = new THREE.Mesh(geometry, material);

                    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
                    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
                    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

                    mesh.rotation.x = Math.random() * Math.PI;
                    mesh.rotation.y = Math.random() * Math.PI;
                    mesh.rotation.z = Math.random() * Math.PI;

                    mesh.matrixAutoUpdate = false;
                    mesh.updateMatrix();

                    scene.add(mesh);
                }

                // Lights
                const dirLight = new THREE.DirectionalLight(0xffffff, 0.15);
                dirLight.position.set(0, -1, 0).normalize();
                dirLight.color.setHSL(0.1, 0.7, 0.5);
                scene.add(dirLight);

                // Lensflares
                const textureLoader = new THREE.TextureLoader();

                // Create simple colored textures for lensflares since we don't have the original textures
                const createLensflareTexture = (color: number) => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 256;
                    canvas.height = 256;
                    const ctx = canvas.getContext('2d')!;
                    
                    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
                    gradient.addColorStop(0, `rgba(${(color >> 16) & 255}, ${(color >> 8) & 255}, ${color & 255}, 1)`);
                    gradient.addColorStop(1, `rgba(${(color >> 16) & 255}, ${(color >> 8) & 255}, ${color & 255}, 0)`);
                    
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, 256, 256);
                    
                    const texture = new THREE.CanvasTexture(canvas);
                    return texture;
                };

                const textureFlare0 = createLensflareTexture(0xffffff);
                const textureFlare3 = createLensflareTexture(0xffaa00);

                function addLight(h: number, s: number, l: number, x: number, y: number, z: number) {
                    const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
                    light.color.setHSL(h, s, l);
                    light.position.set(x, y, z);
                    scene.add(light);

                    // Create a simple lensflare effect using sprites
                    const lensflareMaterial = new THREE.SpriteMaterial({
                        map: textureFlare0,
                        transparent: true,
                        opacity: 0.8
                    });
                    
                    const lensflare = new THREE.Sprite(lensflareMaterial);
                    lensflare.scale.set(700, 700, 1);
                    lensflare.position.copy(light.position);
                    scene.add(lensflare);
                }

                addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
                addLight(0.08, 0.8, 0.5, 700, 0, -1000);
                addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

                // Renderer
                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);
                rendererRef.current = renderer;

            // Fly controls with hover + drag (like original)
            controls = new FlyControls(camera, renderer.domElement);
            controls.movementSpeed = 2500;
            controls.domElement = container;
            controls.rollSpeed = Math.PI / 6;
            controls.autoForward = false;
            controls.dragToLook = false;
            controlsRef.current = controls;

            // Animation loop
            function animate() {
                animationIdRef.current = requestAnimationFrame(animate);
                
                const delta = clockRef.current.getDelta();
                controls.update(delta);
                renderer.render(scene, camera);
            }

                animate();

                // Window resize handler
                function onWindowResize() {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }

                window.addEventListener('resize', onWindowResize);

                // Cleanup function
                return () => {
                    window.removeEventListener('resize', onWindowResize);
                    if (animationIdRef.current) {
                        cancelAnimationFrame(animationIdRef.current);
                    }
                    if (renderer) {
                        renderer.dispose();
                    }
                    if (container && renderer.domElement) {
                        container.removeChild(renderer.domElement);
                    }
                };
        }

        const cleanup = init();

        return cleanup;
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 w-full h-full"
            style={{ 
                zIndex: -1 
            }}
        />
    );
}