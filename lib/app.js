renderer.shadowMapEnabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap; 

let control = new THREE.OrbitControls(cam, renderer.domElement);

let loader = new  THREE.CubeTextureLoader();
let skybox = loader.load([
    './skybox/px.png',
    './skybox/nx.png',
    './skybox/py.png',
    './skybox/ny.png',
    './skybox/pz.png',
    './skybox/nz.png',
]);
scene.background = skybox;

let indominus;
let mIndominus = new THREE.GLTFLoader().load('./object/indominus.gltf', function(result){
    indominus = result.scene.children[0];
    scene.add(indominus);
});

let pLight = new THREE.PointLight(0x708090,1);
pLight.position.set(1,5,5);
scene.add(pLight);

let boxGeo = new THREE.BoxGeometry(1,1,1);
let boxMat = new THREE.MeshLambertMaterial({color: new THREE.Color("green")});
let box = new THREE.Mesh(boxGeo, boxMat);
box.position.z -= 10;
scene.add(box);

let keyboard = [];
document.body.onkeydown = function(e) {
    keyboard[e.key] = true;
};
document.body.onkeyup = function(e) {
    keyboard[e.key] = false;
};

function moveCamera(keyboard) {
    if(keyboard['w']) {
        box.position.z -= 0.01;
    }
    else if(keyboard['s']) {
        box.position.z += 0.01;
    }
    if(keyboard['a']) {
        box.position.x -= 0.01;
    }
    else if(keyboard['d']) {
        box.position.x += 0.01;
    }
}

function draw(){
    moveCamera(keyboard);
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();
