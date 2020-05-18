buildGround();

let pLight = new THREE.PointLight("white", 1);
pLight.position.set(1,10, 7);
scene.add(pLight);

let controls = new THREE.OrbitControls(cam, renderer.domElement);
var Grid = new THREE.GridHelper(100,100,"white","black");
Grid.position.set(0, -0.5, 0);
scene.add(Grid);

let world = new CANNON.World();
world.gravity.set(0, -10, 0);
world.broadphase = new CANNON.NaiveBroadphase();

let timeStamp = 1.0/60.0;

let plane = new CANNON.Plane();
let planeBody = new CANNON.Body({shape: plane, mass:0});
planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), -Math.PI/2);
planeBody.position.set(0, -0.5, 0);
world.addBody(planeBody);

let sphere = new CANNON.Sphere(0.5);
let sphereGeo = new THREE.SphereGeometry(0.5);
let sphereMat = new THREE.MeshLambertMaterial({color: "red"});

let bodies = [];
let meshes = [];

function generateMesh() {
    let spherebody = new CANNON.Body({shape: sphere, mass: 3});
    spherebody.position.set(Math.random() - 1,10, Math.random() - 1);
    world.addBody(spherebody);
    bodies.push(spherebody);
    let sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    meshes.push(sphereMesh);
    scene.add(sphereMesh);
}

function updateMesh() {
    for(let i = 0; i<meshes.length; i++) {
        meshes[i].position.copy(bodies[i].position);
        meshes[i].quaternion.copy(bodies[i].quaternion);
    }
}

setInterval(() => {
    generateMesh();
},1000);

let debugRenderer = new THREE.CannonDebugRenderer(scene, world);

function animate() {
    world.step(timeStamp);
    updateMesh();
    debugRenderer.update();
    renderer.render(scene, cam);
    requestAnimationFrame(animate);
}

animate();