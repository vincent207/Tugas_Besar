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

function draw(){
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();
