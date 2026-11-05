import * as THREE from 'three';

// Pass akhir: god-rays (radial light scattering), chromatic aberration,
// flash/exposure, vignette dan film grain. Bekerja di ruang linear (sebelum tone mapping).
export const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uLight: { value: new THREE.Vector2(0.5, 0.5) },
    uRays: { value: 0 },
    uRayDecay: { value: 0.955 },
    uRayDensity: { value: 0.85 },
    uRayThreshold: { value: 0.6 },
    uCA: { value: 0 },
    uExposure: { value: 1 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(1, 0.94, 0.85) },
    uVignette: { value: 0.75 },
    uGrain: { value: 0.035 },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    #define SAMPLES 40
    uniform sampler2D tDiffuse;
    uniform vec2 uLight, uRes;
    uniform float uRays, uRayDecay, uRayDensity, uRayThreshold, uCA, uExposure, uFlash, uVignette, uGrain, uTime;
    uniform vec3 uFlashColor;
    varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      vec2 dir = uv - 0.5;
      vec3 col;
      if (uCA > 0.0001) {
        col.r = texture2D(tDiffuse, uv + dir * uCA).r;
        col.g = texture2D(tDiffuse, uv).g;
        col.b = texture2D(tDiffuse, uv - dir * uCA).b;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }
      if (uRays > 0.0001) {
        vec2 delta = (uv - uLight) * uRayDensity / float(SAMPLES);
        float jit = fract(sin(dot(uv * uRes, vec2(12.9898, 78.233)) + uTime) * 43758.5453);
        vec2 c = uv - delta * jit; float w = 1.0; vec3 acc = vec3(0.0);
        for (int i = 0; i < SAMPLES; i++) {
          c -= delta;
          vec3 s = texture2D(tDiffuse, clamp(c, 0.0, 1.0)).rgb;
          s = max(s - uRayThreshold, 0.0);
          acc += s * w; w *= uRayDecay;
        }
        col += acc / float(SAMPLES) * uRays;
      }
      col *= uExposure;
      col += uFlashColor * uFlash;
      float v = 1.0 - smoothstep(0.3, 1.0, length(dir * vec2(1.05, 1.25)));
      col *= mix(1.0, v, uVignette);
      float g = fract(sin(dot(uv * uRes + fract(uTime) * 91.7, vec2(12.9898, 78.233))) * 43758.5453);
      col += (g - 0.5) * uGrain * (0.35 + col * 0.65);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};
