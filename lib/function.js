function buildGround() {
    let loaderTable = new THREE.TextureLoader().load('textures/table.jpg');
    let groundGeo = new THREE.PlaneGeometry(200, 200, 200, 200);
    let groundMat = new THREE.MeshPhongMaterial(
        {
            side : THREE.DoubleSide,
            map:loaderTable,
        });
    let groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, -1, 0);
    groundMesh.rotation.x = -Math.PI / 2;
    scene.add(groundMesh);
}