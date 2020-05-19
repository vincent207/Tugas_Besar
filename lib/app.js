buildGround();

let pLight = new THREE.PointLight("white", 1);
pLight.position.set(1, 20, 7);
scene.add(pLight);

let controls = new THREE.OrbitControls(cam, renderer.domElement);

let world = new CANNON.World();
world.gravity.set(0, -10, 0);
world.broadphase = new CANNON.NaiveBroadphase();

let timeStamp = 1.0 / 60.0;

let plane = new CANNON.Plane();
let planeBody = new CANNON.Body({ shape: plane, mass: 0 });
planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
planeBody.position.set(0, -1, 0);
world.addBody(planeBody);

let sphere = new CANNON.Sphere(0.5);
let sphereGeo = new THREE.SphereGeometry(0.5);
let bodies = [];
let meshes = [];

function generateMesh(posX, posZ, textureName) {
    let spherebody = new CANNON.Body({ shape: sphere, mass: 3 });
    spherebody.position.set(posX, - 0.5, posZ);
    world.addBody(spherebody);
    bodies.push(spherebody);

    let sphereMat = new THREE.MeshPhongMaterial(
        {color: "white"}
    );
    if (textureName != '') {
        let loaderSphere = new THREE.TextureLoader().load(textureName);
        sphereMat = new THREE.MeshPhongMaterial(
            {
                side: THREE.DoubleSide,
                map: loaderSphere,
            });
        }
    let sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    meshes.push(sphereMesh);
    scene.add(sphereMesh);
}

function updateMesh() {
    for (let i = 0; i < meshes.length; i++) {
        meshes[i].position.copy(bodies[i].position);
        meshes[i].quaternion.copy(bodies[i].quaternion);
    }
}

let initialPos = [];

generateMesh(0, 4, ''); //bolaputih - indeks 0
let Position = {
    posX : 0,
    posY : -0.5,
    posZ : 4,
}
initialPos.push(Position);
generateMesh(0, -2, 'textures/1.jpg'); //bola 1 - indeks 1 (bodies/meshes)
Position = {
    posX : 0,
    posY : -0.5,
    posZ : -2,
}
initialPos.push(Position);
generateMesh(0, -5.6, 'textures/2.jpg'); //bola 2 - indeks 2 (bodies/meshes)
Position = {
    posX : 0,
    posY : -0.5,
    posZ : -5.6,
}
initialPos.push(Position);
generateMesh(-0.5, -4.7, 'textures/3.jpg'); //bola 3 - indeks 3 (bodies/meshes)
Position = {
    posX : -0.5,
    posY : -0.5,
    posZ : -4.7,
}
initialPos.push(Position);
generateMesh(1, -3.8, 'textures/4.jpg'); //bola 4 - indeks 4 (bodies/meshes)
Position = {
    posX : 1,
    posY : -0.5,
    posZ : -3.8,
}
initialPos.push(Position);
generateMesh(0.5, -4.7, 'textures/5.jpg'); //bola 5 - indeks 5 (bodies/meshes)
Position = {
    posX : 0.5,
    posY : -0.5,
    posZ : -4.7,
}
initialPos.push(Position);
generateMesh(0.5, -2.9, 'textures/6.jpg'); //bola 6 - indeks 6 (bodies/meshes)
 Position = {
    posX : 0.5,
    posY : -0.5,
    posZ : -2.9,
}
initialPos.push(Position);
generateMesh(-1, -3.8, 'textures/7.jpg'); //bola 7 - indeks 7 (bodies/meshes)
 Position = {
    posX : -1,
    posY : -0.5,
    posZ : -3.8,
}
initialPos.push(Position);
generateMesh(-0.5, -2.9, 'textures/8.jpg'); //bola 8 - indeks 8 (bodies/meshes)
 Position = {
    posX : -0.5,
    posY : -0.5,
    posZ : -2.9,
}
initialPos.push(Position);
generateMesh(0, -3.8, 'textures/9.jpg'); //bola 9 - indeks 9 (bodies/meshes)
 Position = {
    posX : 0,
    posY : -0.5,
    posZ : -3.8,
}
initialPos.push(Position);


let debugRenderer = new THREE.CannonDebugRenderer(scene, world);

function animate() {
    world.step(timeStamp);
    updateMesh();
    debugRenderer.update();
    renderer.render(scene, cam);
    requestAnimationFrame(animate);
}

animate();