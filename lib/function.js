function buildGround() {
    let loaderTable = new THREE.TextureLoader().load('textures/table.jpg');
    let loaderBody1 = new THREE.TextureLoader().load('textures/body.jpg');
    let loaderBody2 = new THREE.TextureLoader().load('textures/metal.jpg');
    let loaderleg = new THREE.TextureLoader().load('textures/leg.jpg');
    let groundGeo = new THREE.PlaneGeometry(14, 20, 10, 10);
    let groundMat = new THREE.MeshPhongMaterial(
        {
            side: THREE.DoubleSide,
            map: loaderTable,
        });
    let groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, -1, 0);
    groundMesh.rotation.x = -Math.PI / 2;

    let boxHoleGeo = new THREE.BoxGeometry(1.25, 1, 1.25);
    let boxHoleMat = new THREE.MeshPhongMaterial({ color: "black" });

    let boxHole1 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole1.position.set(-6.25, -1.45, 0);
    let boxHole2 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole2.position.set(-6.25, -1.45, 9);
    let boxHole3 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole3.position.set(-6.25, -1.45, -9);
    let boxHole4 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole4.position.set(6.25, -1.45, 0);
    let boxHole5 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole5.position.set(6.25, -1.45, 9);
    let boxHole6 = new THREE.Mesh(boxHoleGeo, boxHoleMat);
    boxHole6.position.set(6.25, -1.45, -9);

    scene.add(boxHole1, boxHole2, boxHole3, boxHole4, boxHole5, boxHole6);

    let pagermat = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: loaderBody1,
    });
    let bodymat1 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: loaderBody1,
    });
    let bodymat2 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: loaderBody2,
    });
    let legmat = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: loaderleg,
    });

    let pager1Geo = new THREE.BoxGeometry(0.5, 1, 20);
    let pager2Geo = new THREE.BoxGeometry(0.5, 1, 20);
    let pager3Geo = new THREE.BoxGeometry(13.5, 1, 0.5);
    let pager4Geo = new THREE.BoxGeometry(13.5, 1, 0.5);
    let bodyGeo1 = new THREE.BoxGeometry(14.5, 2, 20);
    let bodyGeo2 = new THREE.BoxGeometry(12.5, 2, 18);
    let legGeo = new THREE.TorusGeometry(0.1, 1, 16, 100);

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
    let body1 = new THREE.Mesh(bodyGeo1, bodymat1);
    body1.position.y -= 2.25;
    let body2 = new THREE.Mesh(bodyGeo2, bodymat2);
    body2.position.y -= 4;
    let leg1 = new THREE.Mesh(legGeo, legmat);
    leg1.rotation.x += 20;
    leg1.scale.z += 2;
    leg1.position.y -= 5;
    leg1.position.z += 7;
    leg1.position.x += 4;
    let leg2 = new THREE.Mesh(legGeo, legmat);
    leg2.rotation.x += 20;
    leg2.scale.z += 2;
    leg2.position.y -= 5;
    leg2.position.z += 7;
    leg2.position.x += -4;
    let leg3 = new THREE.Mesh(legGeo, legmat);
    leg3.rotation.x += 27;
    leg3.scale.z += 2;
    leg3.position.y -= 5;
    leg3.position.z += -7;
    leg3.position.x += 4;
    let leg4 = new THREE.Mesh(legGeo, legmat);
    leg4.rotation.x += 27;
    leg4.scale.z += 2;
    leg4.position.y -= 5;
    leg4.position.z += -7;
    leg4.position.x += -4;


    theTable = new THREE.Group();
    theTable.add(groundMesh);
    theTable.add(pager1);
    theTable.add(pager2);
    theTable.add(pager3);
    theTable.add(pager4);
    theTable.add(body1);
    theTable.add(body2);
    theTable.add(leg1);
    theTable.add(leg2);
    theTable.add(leg3);
    theTable.add(leg4);

    scene.add(theTable);
}

function moveCueBall() {
    if (keyboard['a']) {
        bodies[0].position.x -= 0.25;
    }
    else if (keyboard['d']) {
        bodies[0].position.x += 0.25;
    }
    if (keyboard['w']) {
        bodies[0].position.z -= 0.25;
    }
    else if (keyboard['s']) {
        bodies[0].position.z += 0.25;
    }
}

function reset() {
    if (keyboard[' ']) {
        for (let i = 0; i < meshes.length; i++) {
            bodies[i].position.set(initialPos[i].posX, initialPos[i].posY, initialPos[i].posZ);
        }
    }
}