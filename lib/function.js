function buildGround() {
    let groundGeo = new THREE.PlaneGeometry(1000, 1000, 500, 500);
    let groundMat = new THREE.MeshLambertMaterial({ color: "white" });
    let groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, -1, 0);
    groundMesh.rotation.x = -Math.PI / 2;
    scene.add(groundMesh);
}