'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

type PlanetConfig = {
    name: string;
    radius: number;
    distance: number;
    color: number;
    orbitSpeed: number;
    rotationSpeed: number;
    tilt?: number;
    hasRing?: boolean;
    textureType?: 'rocky' | 'gas' | 'ice';
    accentColor?: number;
    bandColors?: number[];
};

export default function WebglLensflares() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const clockRef = useRef<THREE.Clock>(new THREE.Clock());
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let controls: OrbitControls;

        const planetSystem: Array<{
            pivot: THREE.Object3D;
            mesh: THREE.Mesh;
            config: PlanetConfig;
        }> = [];

        function init() {
            const containerWidth = container.clientWidth || window.innerWidth;
            const containerHeight = container.clientHeight || window.innerHeight;

            camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 1, 20000);
            camera.position.set(0, 800, 1800);
            cameraRef.current = camera;

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000011);
            sceneRef.current = scene;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(containerWidth, containerHeight);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            (renderer as unknown as { physicallyCorrectLights?: boolean }).physicallyCorrectLights = true;
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            controls = new OrbitControls(camera, renderer.domElement);
            controls.target.set(0, 0, 0);
            controls.enableDamping = true;
            controls.rotateSpeed = 0.5;
            controls.zoomSpeed = 0.5;
            controls.maxDistance = 5000;
            controlsRef.current = controls;

            const ambientLight = new THREE.AmbientLight(0x222244, 0.02);
            scene.add(ambientLight);

            const sunLight = new THREE.PointLight(0xffddaa, 10, 0, 2);
            sunLight.position.set(0, 0, 0);
            sunLight.castShadow = true;
            sunLight.shadow.mapSize.set(2048, 2048);
            sunLight.shadow.bias = -0.0003;
            sunLight.shadow.camera.near = 10;
            sunLight.shadow.camera.far = 4000;
            sunLight.shadow.radius = 6;
            sunLight.decay = 2;
            scene.add(sunLight);

            createStarfield(scene);
            createSolarSystem(scene, sunLight, renderer);

            function createStarfield(targetScene: THREE.Scene) {
                const starGeometry = new THREE.BufferGeometry();
                const starCount = 2000;
                const positions = new Float32Array(starCount * 3);

                for (let i = 0; i < starCount; i++) {
                    const radius = 8000 * Math.random() + 2000;
                    const theta = Math.acos(2 * Math.random() - 1);
                    const phi = 2 * Math.PI * Math.random();

                    const x = radius * Math.sin(theta) * Math.cos(phi);
                    const y = radius * Math.sin(theta) * Math.sin(phi);
                    const z = radius * Math.cos(theta);

                    positions[i * 3] = x;
                    positions[i * 3 + 1] = y;
                    positions[i * 3 + 2] = z;
                }

                starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 6, sizeAttenuation: true });
                const stars = new THREE.Points(starGeometry, starMaterial);
                targetScene.add(stars);
            }

            function createSolarSystem(targetScene: THREE.Scene, sunEmitter: THREE.PointLight, rendererInstance: THREE.WebGLRenderer) {
                const maxAnisotropy = rendererInstance.capabilities.getMaxAnisotropy();

                const sunGeometry = new THREE.SphereGeometry(140, 64, 64);
                const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc55 });
                const sun = new THREE.Mesh(sunGeometry, sunMaterial);
                sun.castShadow = false;
                sun.receiveShadow = false;
                targetScene.add(sun);
                sunEmitter.position.set(0, 0, 0);

                const sunGlow = createSunGlow();
                sun.add(sunGlow);

                const planetConfigs: PlanetConfig[] = [
                    { name: 'Mercury', radius: 6, distance: 180, color: 0xb29b7d, orbitSpeed: 0.020, rotationSpeed: 0.04, textureType: 'rocky', accentColor: 0x8c7b62 },
                    { name: 'Venus', radius: 15, distance: 260, color: 0xf7d8a5, orbitSpeed: 0.015, rotationSpeed: 0.02, tilt: Math.PI / 12, textureType: 'rocky', accentColor: 0xe0b489 },
                    { name: 'Earth', radius: 16, distance: 340, color: 0x3366ff, orbitSpeed: 0.012, rotationSpeed: 0.06, tilt: Math.PI / 9, textureType: 'rocky', accentColor: 0x123c8c },
                    { name: 'Mars', radius: 12, distance: 420, color: 0xff6f45, orbitSpeed: 0.010, rotationSpeed: 0.05, textureType: 'rocky', accentColor: 0xb35a3c },
                    { name: 'Jupiter', radius: 60, distance: 620, color: 0xd2b48c, orbitSpeed: 0.008, rotationSpeed: 0.12, textureType: 'gas', bandColors: [0xc9b39a, 0xe0c6a8, 0xa57a5a, 0xd7b089] },
                    { name: 'Saturn', radius: 50, distance: 820, color: 0xe6c27a, orbitSpeed: 0.006, rotationSpeed: 0.10, hasRing: true, textureType: 'gas', bandColors: [0xf2d0a2, 0xd9b485, 0xb39068, 0xe8c48f] },
                    { name: 'Uranus', radius: 35, distance: 1040, color: 0x7bd0ff, orbitSpeed: 0.004, rotationSpeed: 0.08, textureType: 'ice', bandColors: [0x7fd3f2, 0x6abedc, 0x8ae3ff] },
                    { name: 'Neptune', radius: 34, distance: 1220, color: 0x4050ff, orbitSpeed: 0.003, rotationSpeed: 0.07, textureType: 'ice', bandColors: [0x4466ff, 0x2747c8, 0x5c7bff] }
                ];

                for (const config of planetConfigs) {
                    const pivot = new THREE.Object3D();
                    targetScene.add(pivot);

                    const planetGeometry = new THREE.SphereGeometry(config.radius, 64, 64);
                    const planetMaterial = buildPlanetMaterial(config);
                    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
                    planet.castShadow = true;
                    planet.receiveShadow = true;
                    planet.position.set(config.distance, 0, 0);
                    if (config.tilt) {
                        planet.rotation.z = config.tilt;
                    }
                    pivot.add(planet);

                    if (config.hasRing) {
                        const ringGeometry = new THREE.RingGeometry(config.radius * 1.35, config.radius * 2.15, 96, 1, 0, Math.PI * 2);
                        const ringTexture = createRingTexture(maxAnisotropy);
                        const ringMaterial = new THREE.MeshBasicMaterial({
                            map: ringTexture,
                            transparent: true,
                            opacity: 0.9,
                            side: THREE.DoubleSide,
                            depthWrite: false
                        });
                        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
                        ring.rotation.x = Math.PI / 2.3;
                        ring.castShadow = false;
                        ring.receiveShadow = false;
                        planet.add(ring);
                    }

                    addOrbitRing(targetScene, config.distance);

                    planetSystem.push({ pivot, mesh: planet, config });
                }

                const earth = planetSystem.find((entry) => entry.config.name === 'Earth');
                if (earth) {
                    const moonPivot = new THREE.Object3D();
                    earth.mesh.add(moonPivot);
                    const moonGeometry = new THREE.SphereGeometry(5, 32, 32);
                    const moonConfig: PlanetConfig = {
                        name: 'Moon',
                        radius: 5,
                        distance: 30,
                        color: 0xb0b0b0,
                        orbitSpeed: 0.08,
                        rotationSpeed: 0.08,
                        textureType: 'rocky',
                        accentColor: 0x8c8c8c
                    };
                    const moonMaterial = buildPlanetMaterial(moonConfig);
                    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
                    moon.castShadow = true;
                    moon.receiveShadow = true;
                    moon.position.set(30, 0, 0);
                    moonPivot.add(moon);

                    planetSystem.push({ pivot: moonPivot, mesh: moon, config: moonConfig });
                }

                function buildPlanetMaterial(config: PlanetConfig) {
                    const baseColor = new THREE.Color(config.color);
                    const isGas = config.textureType === 'gas';
                    const isIce = config.textureType === 'ice';
                    const material = new THREE.MeshStandardMaterial({
                        color: baseColor,
                        emissive: baseColor.clone().multiplyScalar(isGas ? 0.02 : 0.035),
                        emissiveIntensity: isGas ? 0.08 : isIce ? 0.08 : 0.12,
                        roughness: isGas ? 0.52 : isIce ? 0.6 : 0.76,
                        metalness: isGas ? 0.05 : isIce ? 0.08 : 0.16
                    });
                    const texture = generatePlanetTexture(config, maxAnisotropy);
                    if (texture) {
                        material.map = texture;
                        material.roughnessMap = texture;
                        material.bumpMap = texture;
                        material.bumpScale = isGas ? 0.02 : isIce ? 0.05 : 0.1;
                    }
                    material.envMapIntensity = 0;
                    material.needsUpdate = true;
                    return material;
                }

                function generatePlanetTexture(config: PlanetConfig, anisotropy: number) {
                    if (config.textureType === 'gas' && config.bandColors?.length) {
                        return applyTextureSettings(createGasTexture(config.bandColors), anisotropy);
                    }

                    if (config.textureType === 'ice') {
                        const palette = config.bandColors && config.bandColors.length > 0
                            ? config.bandColors
                            : (() => {
                                const shifted = new THREE.Color(config.color);
                                shifted.offsetHSL(0, -0.1, 0.1);
                                return [config.color, shifted.getHex()];
                            })();
                        return applyTextureSettings(createGasTexture(palette, 0.35, 0.12), anisotropy);
                    }

                    return applyTextureSettings(createRockyTexture(config.color, config.accentColor), anisotropy);
                }

                function applyTextureSettings(texture: THREE.CanvasTexture, anisotropy: number) {
                    texture.colorSpace = THREE.SRGBColorSpace;
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.anisotropy = anisotropy;
                    texture.generateMipmaps = true;
                    texture.needsUpdate = true;
                    return texture;
                }

                function createRockyTexture(baseHex: number, accentHex?: number) {
                    const width = 1024;
                    const height = 512;
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return new THREE.CanvasTexture(canvas);
                    }

                    const baseColor = new THREE.Color(baseHex);
                    const accentColor = new THREE.Color(accentHex ?? baseHex);
                    if (!accentHex) {
                        accentColor.offsetHSL(0, -0.02, 0.15);
                    }

                    const baseR = baseColor.r;
                    const baseG = baseColor.g;
                    const baseB = baseColor.b;
                    const accentR = accentColor.r;
                    const accentG = accentColor.g;
                    const accentB = accentColor.b;

                    const imageData = ctx.createImageData(width, height);
                    const data = imageData.data;

                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const nx = x / width;
                            const ny = y / height;

                            const structural = Math.sin((nx * 6.0 + ny * 2.4) * Math.PI);
                            const detail = Math.sin((nx * 18.0 + ny * 8.5) * Math.PI);
                            const fine = Math.sin((nx * 32.0 + ny * 24.0) * Math.PI);

                            const pseudoRandom = Math.sin((x * 12.9898 + y * 78.233) * 2.0) * 43758.5453;
                            const rand = pseudoRandom - Math.floor(pseudoRandom);

                            let value = structural * 0.5 + detail * 0.35 + fine * 0.15;
                            value = value * 0.5 + 0.5;
                            value = THREE.MathUtils.clamp(value * 0.7 + rand * 0.3, 0, 1);

                            const mix = value;
                            const r = THREE.MathUtils.clamp(baseR + (accentR - baseR) * mix, 0, 1);
                            const g = THREE.MathUtils.clamp(baseG + (accentG - baseG) * mix, 0, 1);
                            const b = THREE.MathUtils.clamp(baseB + (accentB - baseB) * mix, 0, 1);

                            const idx = (y * width + x) * 4;
                            data[idx] = r * 255;
                            data[idx + 1] = g * 255;
                            data[idx + 2] = b * 255;
                            data[idx + 3] = 255;
                        }
                    }

                    ctx.putImageData(imageData, 0, 0);
                    return new THREE.CanvasTexture(canvas);
                }

                function createGasTexture(bands: number[], turbulence = 0.45, shear = 0.18) {
                    const width = 1024;
                    const height = 512;
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return new THREE.CanvasTexture(canvas);
                    }

                    const colors = bands.map((hex) => new THREE.Color(hex));

                    const imageData = ctx.createImageData(width, height);
                    const data = imageData.data;

                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const nx = x / width;
                            const ny = y / height;

                            const wave = Math.sin((ny * (bands.length * Math.PI)) + Math.sin(nx * Math.PI * 4) * shear);
                            const swirl = Math.sin(nx * Math.PI * 6 + ny * Math.PI * 2) * turbulence * 0.5;
                            const offset = (ny + swirl) * bands.length + wave * 0.1;

                            const baseIndex = ((Math.floor(offset) % bands.length) + bands.length) % bands.length;
                            const nextIndex = (baseIndex + 1) % bands.length;
                            const localMix = offset - Math.floor(offset);

                            const smoothMix = localMix * localMix * (3 - 2 * localMix);

                            const c0 = colors[baseIndex];
                            const c1 = colors[nextIndex];

                            const r = THREE.MathUtils.lerp(c0.r, c1.r, smoothMix);
                            const g = THREE.MathUtils.lerp(c0.g, c1.g, smoothMix);
                            const b = THREE.MathUtils.lerp(c0.b, c1.b, smoothMix);

                            const idx = (y * width + x) * 4;
                            data[idx] = r * 255;
                            data[idx + 1] = g * 255;
                            data[idx + 2] = b * 255;
                            data[idx + 3] = 255;
                        }
                    }

                    ctx.putImageData(imageData, 0, 0);
                    return new THREE.CanvasTexture(canvas);
                }

                function createRingTexture(anisotropy: number) {
                    const size = 1024;
                    const canvas = document.createElement('canvas');
                    canvas.width = size;
                    canvas.height = size;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return new THREE.CanvasTexture(canvas);
                    }

                    const center = size / 2;
                    const gradient = ctx.createRadialGradient(center, center, size * 0.2, center, center, center);
                    gradient.addColorStop(0.0, 'rgba(255, 240, 200, 0.0)');
                    gradient.addColorStop(0.35, 'rgba(240, 215, 160, 0.35)');
                    gradient.addColorStop(0.6, 'rgba(200, 170, 120, 0.55)');
                    gradient.addColorStop(0.9, 'rgba(255, 245, 210, 0.0)');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, size, size);

                    const texture = new THREE.CanvasTexture(canvas);
                    texture.colorSpace = THREE.SRGBColorSpace;
                    texture.wrapS = THREE.ClampToEdgeWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.anisotropy = anisotropy;
                    texture.generateMipmaps = true;
                    texture.needsUpdate = true;
                    return texture;
                }

                function createSunGlow() {
                    const size = 512;
                    const canvas = document.createElement('canvas');
                    canvas.width = size;
                    canvas.height = size;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return new THREE.Sprite(new THREE.SpriteMaterial());
                    }
                    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
                    gradient.addColorStop(0, 'rgba(255, 221, 170, 0.85)');
                    gradient.addColorStop(0.4, 'rgba(255, 184, 80, 0.35)');
                    gradient.addColorStop(1, 'rgba(255, 128, 32, 0)');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, size, size);

                    const texture = new THREE.CanvasTexture(canvas);
                    texture.colorSpace = THREE.SRGBColorSpace;
                    texture.minFilter = THREE.LinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.needsUpdate = true;

                    const material = new THREE.SpriteMaterial({
                        map: texture,
                        blending: THREE.AdditiveBlending,
                        transparent: true,
                        depthWrite: false,
                        depthTest: false
                    });

                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(700, 700, 1);
                    sprite.position.set(0, 0, 0);
                    sprite.renderOrder = -1;
                    return sprite;
                }
            }

            function addOrbitRing(targetScene: THREE.Scene, radius: number) {
                const segments = 128;
                const orbitGeometry = new THREE.BufferGeometry();
                const orbitPositions = new Float32Array(segments * 3);
                for (let i = 0; i < segments; i++) {
                    const angle = (i / segments) * Math.PI * 2;
                    orbitPositions[i * 3] = Math.cos(angle) * radius;
                    orbitPositions[i * 3 + 1] = 0;
                    orbitPositions[i * 3 + 2] = Math.sin(angle) * radius;
                }
                orbitGeometry.setAttribute('position', new THREE.BufferAttribute(orbitPositions, 3));
                const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x333344, transparent: true, opacity: 0.6 });
                const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
                targetScene.add(orbit);
            }

            function animate() {
                animationIdRef.current = requestAnimationFrame(animate);

                const delta = clockRef.current.getDelta();
                for (const planet of planetSystem) {
                    planet.pivot.rotation.y += planet.config.orbitSpeed * delta * 60;
                    planet.mesh.rotation.y += planet.config.rotationSpeed * delta * 60;
                }

                controls.update();
                renderer.render(scene, camera);
            }

            animate();

            function onWindowResize() {
                const width = container.clientWidth || window.innerWidth;
                const height = container.clientHeight || window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }

            window.addEventListener('resize', onWindowResize);

            return () => {
                window.removeEventListener('resize', onWindowResize);
                if (animationIdRef.current) {
                    cancelAnimationFrame(animationIdRef.current);
                }
                planetSystem.splice(0, planetSystem.length);
                controls.dispose();
                renderer.dispose();
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
