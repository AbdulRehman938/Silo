const vertex = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    float dist = distance(uv, uMouse * 0.5 + 0.5);
    float ripple = sin(dist * 10.0 - uTime * 3.0) * 0.1 * exp(-dist * 3.0);
    
    float n = noise(uv * 3.0 + uTime * 0.5);
    pos.z += ((n * 0.15) + ripple) * uHover;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    float dist = distance(uv, uMouse * 0.5 + 0.5);
    float distortion = sin(dist * 15.0 - uTime * 2.0) * 0.02 * exp(-dist * 5.0);
    
    uv += distortion * uHover;
    
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

export default { vertex, fragment };
