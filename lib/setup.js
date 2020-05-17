let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer();

cam.position.z += 7;

scene.background = new THREE.Color("yellow");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.type = THREE.BasicShadowMap;