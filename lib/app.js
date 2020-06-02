buildGround();

let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
let texture1 = new THREE.TextureLoader().load('./skybox/px.png'); //kiri
let texture2 = new THREE.TextureLoader().load('./skybox/nx.png'); //kanan
let texture3 = new THREE.TextureLoader().load('./skybox/py.png'); //atas
let texture4 = new THREE.TextureLoader().load('./skybox/ny.png'); //bawah
let texture5 = new THREE.TextureLoader().load('./skybox/pz.png'); //belakang
let texture6 = new THREE.TextureLoader().load('./skybox/nz.png'); //depan
let textures = [];
textures.push(new THREE.MeshLambertMaterial({map: texture1}));
textures.push(new THREE.MeshLambertMaterial({map: texture2}));
textures.push(new THREE.MeshLambertMaterial({map: texture3}));
textures.push(new THREE.MeshLambertMaterial({map: texture4}));
textures.push(new THREE.MeshLambertMaterial({map: texture5}));
textures.push(new THREE.MeshLambertMaterial({map: texture6}));
for(let i = 0; i < 6; i++) {
    textures[i].side = THREE.BackSide;
}
skybox = new THREE.Mesh(skyboxGeo, textures);
scene.add(skybox);
let mat = new THREE.MeshBasicMaterial(
    { 
        color: "white", 
        map: textures,
    });

let pLight = new THREE.PointLight("white", 1);
pLight.position.set(1, 20, 7);
scene.add(pLight);

let listUnPocketIn = [1,2,3,4,5,6,7,8,9];
let listPocketIn = [];

let pLight2 = new THREE.PointLight("white", 1);
pLight2.position.set(20, 10, 20);
scene.add(pLight2);

let pLight3 = new THREE.PointLight("white", 1);
pLight3.position.set(-20, 10, -20);
scene.add(pLight3);

let controls = new THREE.OrbitControls(cam, renderer.domElement);

let world = new CANNON.World();
world.gravity.set(0, -10, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.defaultContactMaterial.contactEquationStiffness = 1e8;
world.defaultContactMaterial.contactEquationRegularizationTime = 3;

let timeStamp = 1.0 / 60.0;

let plane = new CANNON.Plane();
let planeBody = new CANNON.Body({ shape: plane, mass: 0 });
planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
planeBody.position.set(0, -3, 0);
world.addBody(planeBody);

let pagerX  = new CANNON.Box(new CANNON.Vec3(0.2,0.45,9.95));
let pagerY  = new CANNON.Box(new CANNON.Vec3(6.7,0.45,0.2));
let pagerX1Body = new CANNON.Body({shape: pagerX, mass: 0});
pagerX1Body.position.set(-7,-0.75,0);
let pagerX2Body = new CANNON.Body({shape: pagerX, mass: 0});
pagerX2Body.position.set(7,-0.75,0);
let pagerY1Body = new CANNON.Body({shape: pagerY, mass: 0});
pagerY1Body.position.set(0,-0.75,-9.75);
let pagerY2Body = new CANNON.Body({shape: pagerY, mass: 0});
pagerY2Body.position.set(0,-0.75,9.75);
world.addBody(pagerX1Body);
world.addBody(pagerX2Body);
world.addBody(pagerY1Body);
world.addBody(pagerY2Body);


let boxPlane = new CANNON.Box(new CANNON.Vec3(5.5,1,9.5));
let boxPlaneBody = new CANNON.Body({shape: boxPlane, mass: 0});
boxPlaneBody.position.set(0,-2.05,0);
world.addBody(boxPlaneBody);

let boxPlane2 = new CANNON.Box(new CANNON.Vec3(0.75,1,3.75));
let boxPlaneBody2 = new CANNON.Body({shape: boxPlane2, mass: 0});
boxPlaneBody2.position.set(-6.25,-2.05,-4.5);
world.addBody(boxPlaneBody2);

let boxPlane3 = new CANNON.Box(new CANNON.Vec3(0.75,1,3.75));
let boxPlaneBody3 = new CANNON.Body({shape: boxPlane2, mass: 0});
boxPlaneBody3.position.set(-6.25,-2.05,4.5);
world.addBody(boxPlaneBody3);

let boxPlane4 = new CANNON.Box(new CANNON.Vec3(0.75,1,3.75));
let boxPlaneBody4 = new CANNON.Body({shape: boxPlane2, mass: 0});
boxPlaneBody4.position.set(6.25,-2.05,-4.5);
world.addBody(boxPlaneBody4);

let boxPlane5 = new CANNON.Box(new CANNON.Vec3(0.75,1,3.75));
let boxPlaneBody5 = new CANNON.Body({shape: boxPlane2, mass: 0});
boxPlaneBody5.position.set(6.25,-2.05,4.5);
world.addBody(boxPlaneBody5);

let sphere = new CANNON.Sphere(0.485);
let sphereGeo = new THREE.SphereGeometry(0.501);
let bodies = [];
let meshes = [];

function generateMesh(posX, posZ, textureName) {
    let spherebody = new CANNON.Body({ shape: sphere, mass: 50 });
    spherebody.linearDamping = 0.7;
    spherebody.angularDamping = 0.5;
    spherebody.position.set(posX, - 0.5, posZ);
    world.addBody(spherebody);
    bodies.push(spherebody);

    let sphereMat = new THREE.MeshPhongMaterial(
        { color: "white",shininess: 10, }
    );
    if (textureName != '') {
        let loaderSphere = new THREE.TextureLoader().load(textureName);
        sphereMat = new THREE.MeshPhongMaterial(
            {
                side: THREE.DoubleSide,
                map: loaderSphere,
                shininess: 10,
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

let textureList = [
    '',
    'textures/1.jpg',
    'textures/2.jpg',
    'textures/3.jpg',
    'textures/4.jpg',
    'textures/5.jpg',
    'textures/6.jpg',
    'textures/7.jpg',
    'textures/8.jpg',
    'textures/9.jpg',
];

generateMesh(0, 6, ''); //bolaputih - indeks 0
let Position = {
    posX: 0,
    posY: -0.5,
    posZ: 6,
}
initialPos.push(Position);
generateMesh(0, -2, 'textures/1.jpg'); //bola 1 - indeks 1 (bodies/meshes)
Position = {
    posX: 0,
    posY: -0.5,
    posZ: -2,
}
initialPos.push(Position);
generateMesh(0, -5.6, 'textures/2.jpg'); //bola 2 - indeks 2 (bodies/meshes)
Position = {
    posX: 0,
    posY: -0.5,
    posZ: -5.6,
}
initialPos.push(Position);
generateMesh(-0.5, -4.7, 'textures/3.jpg'); //bola 3 - indeks 3 (bodies/meshes)
Position = {
    posX: -0.5,
    posY: -0.5,
    posZ: -4.7,
}
initialPos.push(Position);
generateMesh(1, -3.8, 'textures/4.jpg'); //bola 4 - indeks 4 (bodies/meshes)
Position = {
    posX: 1,
    posY: -0.5,
    posZ: -3.8,
}
initialPos.push(Position);
generateMesh(0.5, -4.7, 'textures/5.jpg'); //bola 5 - indeks 5 (bodies/meshes)
Position = {
    posX: 0.5,
    posY: -0.5,
    posZ: -4.7,
}
initialPos.push(Position);
generateMesh(0.5, -2.9, 'textures/6.jpg'); //bola 6 - indeks 6 (bodies/meshes)
Position = {
    posX: 0.5,
    posY: -0.5,
    posZ: -2.9,
}
initialPos.push(Position);
generateMesh(-1, -3.8, 'textures/7.jpg'); //bola 7 - indeks 7 (bodies/meshes)
Position = {
    posX: -1,
    posY: -0.5,
    posZ: -3.8,
}
initialPos.push(Position);
generateMesh(-0.5, -2.9, 'textures/8.jpg'); //bola 8 - indeks 8 (bodies/meshes)
Position = {
    posX: -0.5,
    posY: -0.5,
    posZ: -2.9,
}
initialPos.push(Position);
generateMesh(0, -3.8, 'textures/9.jpg'); //bola 9 - indeks 9 (bodies/meshes)
Position = {
    posX: 0,
    posY: -0.5,
    posZ: -3.8,
}
initialPos.push(Position);
console.log(initialPos[0].posZ);


let keyboard = [];

document.body.onkeydown = function (e) {
    keyboard[e.key] = true;
};

document.body.onkeyup = function (e) {
    keyboard[e.key] = false;
};

let debugRenderer = new THREE.CannonDebugRenderer(scene, world);

function animate() {
    reset();
    moveCueBall();
    world.step(timeStamp);
    updateMesh();
    debugRenderer.update();
    renderer.render(scene, cam);
    requestAnimationFrame(animate);
}

animate();