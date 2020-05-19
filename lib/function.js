function buildGround() {
    let loaderTable = new THREE.TextureLoader().load('textures/table.jpg');
    let groundGeo = new THREE.PlaneGeometry(14, 20, 10, 10);
    let groundMat = new THREE.MeshPhongMaterial(
        {
            side : THREE.DoubleSide,
            map:loaderTable,
        });
    let groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, -1, 0);
    groundMesh.rotation.x = -Math.PI / 2;

    let pagermat = new THREE.MeshLambertMaterial({color: "yellow"});
    
    let pager1Geo = new THREE.BoxGeometry(0.5, 0.5, 20);
    let pager2Geo = new THREE.BoxGeometry(0.5, 0.5, 20);
    let pager3Geo = new THREE.BoxGeometry(13.5, 0.5, 0.5);
    let pager4Geo = new THREE.BoxGeometry(13.5, 0.5, 0.5);

    let pager1 = new THREE.Mesh(pager1Geo, pagermat);
    pager1.position.y -= 0.75;
    pager1.position.x -= 7;
    let pager2 = new THREE.Mesh(pager2Geo, pagermat);
    pager2.position.y -= 0.75;
    pager2.position.x += 7;
    let pager3 = new THREE.Mesh(pager3Geo, pagermat);
    pager3.position.y -= 0.75;
    pager3.position.z -= 9.75;
    let pager4 = new THREE.Mesh(pager4Geo, pagermat);
    pager4.position.y -= 0.75;
    pager4.position.z += 9.75;

    theTable =  new THREE.Group();
    theTable.add(groundMesh);
    theTable.add(pager1);
    theTable.add(pager2);
    theTable.add(pager3);
    theTable.add(pager4);

    scene.add(theTable);
}

function moveCueBall() {
    if(keyboard['a']) {
        bodies[0].position.x -= 0.1;
    }
    else if(keyboard['d']) {
        bodies[0].position.x += 0.1;
    }
    if(keyboard['w']) {
        bodies[0].position.z -= 0.1;
    }
    else if(keyboard['s']) {
        bodies[0].position.z += 0.1;
    }
}
