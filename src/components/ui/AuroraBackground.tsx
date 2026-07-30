"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Aurora() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const clock = useMemo(() => new THREE.Clock(), []);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(12, 8, 64, 64);
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color("#3B82F6") },
          uColor2: { value: new THREE.Color("#8B5CF6") },
          uColor3: { value: new THREE.Color("#06B6D4") },
        },
        vertexShader: `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 2.0 + uTime * 0.5) * 0.3;
            pos.z += cos(pos.y * 2.0 + uTime * 0.4) * 0.3;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            float mix1 = sin(vUv.x * 3.0 + uTime * 0.2) * 0.5 + 0.5;
            float mix2 = cos(vUv.y * 3.0 + uTime * 0.3) * 0.5 + 0.5;
            float mix3 = sin((vUv.x + vUv.y) * 2.0 + uTime * 0.15) * 0.5 + 0.5;
            vec3 color = mix(uColor1, uColor2, mix1);
            color = mix(color, uColor3, mix2);
            float alpha = 0.15 + mix3 * 0.1;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  useFrame(() => {
    if (meshRef.current) {
      const elapsed = clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsed;
      meshRef.current.rotation.z = Math.sin(elapsed * 0.05) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} position={[0, 0, -2]} />
  );
}

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Aurora />
      </Canvas>
    </div>
  );
}
