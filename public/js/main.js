window.onload = function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 1000);
    camera.position.set(0, 0, 30);

    if (window.WebGLRenderingContext) {
        renderer = new THREE.WebGLRenderer();
    } else {
        renderer = new THREE.CanvasRenderer();
    }
    renderer.setSize(600, 400); // Canvasのサイズ設定
    document.body.appendChild(renderer.domElement);

    var directionalLight = new THREE.DirectionalLight('#ffffff', 1);
    directionalLight.position.set(0, 7, 10);
    scene.add(directionalLight); // シーンに追加

    var geometry = new THREE.SphereGeometry(10, 10, 10);
    var material = new THREE.MeshPhongMaterial({color: '#dd3b6f'});
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.01; // 追加
        cube.rotation.y += 0.01; // 追加
        renderer.render(scene, camera);
    }
    render();
}
