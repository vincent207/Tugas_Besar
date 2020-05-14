let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("yellow");
renderer.setSize(window.innerWidth, window.innerHeight);
document.appendChild(renderer.domElement);