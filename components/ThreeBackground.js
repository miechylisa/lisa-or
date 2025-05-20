import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    // Create pixel grid geometry - covers entire screen
    const gridWidth = 120;
    const gridHeight = 80;
    const pixelCount = gridWidth * gridHeight;
    
    const geometry = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(0.8, 0.8),
      new THREE.MeshBasicMaterial({ 
        transparent: true,
        opacity: 0
      }),
      pixelCount
    );

    // Pixel wave shader for random appearing/disappearing waves
    const pixelShader = {
      uniforms: {
        time: { value: 0 },
        waveTime: { value: 0 },
        pixelOpacity: { value: 0.7 },
        waveDirection: { value: new THREE.Vector2(1, 0) },
        waveOrigin: { value: new THREE.Vector2(0, 0) },
        waveActive: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        uniform float time;
        uniform float waveTime;
        uniform float pixelOpacity;
        uniform vec2 waveDirection;
        uniform vec2 waveOrigin;
        uniform float waveActive;
        
        // Clean random function
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        
        // Smooth wave function
        float wavePattern(vec2 pos, vec2 origin, vec2 direction, float waveTime) {
          vec2 toPixel = pos - origin;
          float distance = dot(toPixel, direction);
          float wavePos = distance + waveTime * 30.0;
          
          // Create wave with smooth falloff
          float wave = sin(wavePos * 0.3) * exp(-abs(distance) * 0.02);
          return smoothstep(-0.5, 0.5, wave);
        }
        
        void main() {
          vec2 pixelPos = vWorldPosition.xy;
          
          // Base pixel visibility (very low)
          float baseAlpha = random(pixelPos * 0.1) * 0.05;
          
          // Wave effect when active
          float waveAlpha = 0.0;
          if (waveActive > 0.5) {
            waveAlpha = wavePattern(pixelPos, waveOrigin, waveDirection, waveTime) * 0.8;
          }
          
          float finalAlpha = max(baseAlpha, waveAlpha);
          
          // White pixels with blue tint
          vec3 color = mix(vec3(0.8, 0.9, 1.0), vec3(1.0), finalAlpha);
          
          gl_FragColor = vec4(color, finalAlpha * pixelOpacity);
        }
      `
    };

    // Create pixel material
    const pixelMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      uniforms: pixelShader.uniforms,
      vertexShader: pixelShader.vertexShader,
      fragmentShader: pixelShader.fragmentShader
    });

    // Position pixels across screen
    const pixelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(gridWidth, gridHeight, gridWidth - 1, gridHeight - 1),
      pixelMaterial
    );
    
    pixelMesh.position.z = -10;
    scene.add(pixelMesh);

    camera.position.z = 5;

    // Wave timing system
    let lastWaveTime = 0;
    let waveInterval = 8000; // 8 seconds base interval
    let currentWaveStart = 0;
    let waveDuration = 3000; // 3 seconds wave duration
    
    const clock = new THREE.Clock();
    let animationId;
    
    function triggerRandomWave() {
      // Random direction
      const angle = Math.random() * Math.PI * 2;
      pixelMaterial.uniforms.waveDirection.value.set(
        Math.cos(angle),
        Math.sin(angle)
      );
      
      // Random origin point across screen
      pixelMaterial.uniforms.waveOrigin.value.set(
        (Math.random() - 0.5) * gridWidth,
        (Math.random() - 0.5) * gridHeight
      );
      
      // Activate wave
      pixelMaterial.uniforms.waveActive.value = 1.0;
      pixelMaterial.uniforms.waveTime.value = 0.0;
      currentWaveStart = Date.now();
      
      // Random next interval (6-12 seconds)
      waveInterval = 6000 + Math.random() * 6000;
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      
      const elapsed = clock.getElapsedTime();
      const now = Date.now();
      
      pixelMaterial.uniforms.time.value = elapsed;
      
      // Wave timing logic
      if (now - lastWaveTime > waveInterval) {
        triggerRandomWave();
        lastWaveTime = now;
      }
      
      // Update wave progress
      if (pixelMaterial.uniforms.waveActive.value > 0.5) {
        const waveProgress = (now - currentWaveStart) / waveDuration;
        pixelMaterial.uniforms.waveTime.value = waveProgress;
        
        if (waveProgress >= 1.0) {
          pixelMaterial.uniforms.waveActive.value = 0.0;
        }
      }
      
      renderer.render(scene, camera);
    }

    // Start first wave after 2 seconds
    setTimeout(() => {
      triggerRandomWave();
      lastWaveTime = Date.now();
    }, 2000);

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountNode && renderer.domElement && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pixelMaterial.dispose();
      geometry.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}