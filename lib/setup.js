let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});

cam.position.z += 22;
cam.position.y += 7;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.type = THREE.BasicShadowMap;