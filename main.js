import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


class BasicWorldDemo {
    constructor() {
        this._Initialize();
    }

    _Initialize() {
        this._threejs = new THREE.WebGLRenderer({
            antialias: true,
        });
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threejs.setPixelRatio(window.devicePixelRatio);
        this._threejs.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this._threejs.domElement);

        window.addEventListener('resize', () => {
            this._OnWindowResize();
        }, false);

        const fov = 60;
        const aspect = 1920 / 1080;
        const near = 1.0;
        const far = 1000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(75, 20, 0);

        this._scene = new THREE.Scene();

        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(20, 20, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 100;
        light.shadow.camera.right = -100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        this._scene.add(light);

        light = new THREE.AmbientLight(0x101010);
        this._scene.add(light);

        const controls = new OrbitControls(
            this._camera, this._threejs.domElement);
        controls.target.set(0, 20, 0);
        controls.update();

        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            './skybox/BendikHårlandBG.jpg',
            './skybox/BendikSanderHårland.jpg',
            './skybox/Skjermbilde.jpg',
            './skybox/BendikHårlandBG.jpg',
            './skybox/BendikSanderHårland.jpg',
            './skybox/Skjermbilde.jpg',
        ]);
        this._scene.background = texture;


        //her kommer bakken
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 10, 10),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
            }));
        plane.castShadow = false;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        this._scene.add(plane);

        const box = new THREE.Mesh(
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
            }));
        box.position.set(0, 1, 0);
        box.castShadow = true;
        box.receiveShadow = true;
        this._scene.add(box);


       //boxesesesese
        let kake = 8;
        for (let x = -kake; x < kake; x++) {
            for (let y = -kake; y < kake; y++) {
                const box = new THREE.Mesh(
                    new THREE.BoxGeometry(1, 5, 1),
                    new THREE.MeshStandardMaterial({
                        color: 0xffd700,
                    }));
                box.position.set(x * 5, 3, y * 5);
                box.castShadow = true;
                box.receiveShadow = true;
                this._scene.add(box);
            }
        }
        let kakeee = 1;
        while (kakeee < 2){
            console.log("yeet")
            kakeee++
        }

        // Spherererer
        /*
         const box = new THREE.Mesh(
           new THREE.SphereGeometry(4, 32, 32),
           new THREE.MeshStandardMaterial({
               color: 0xFFFFFF,
               wireframe: true,
               wireframeLineWidth: 4,
           }));
         box.position.set(0, 10, 0);
         box.castShadow = true;
         box.receiveShadow = true;
         this._scene.add(box);
*/
        this._RAF();
    }

    _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
    }

    _RAF() {
        requestAnimationFrame(() => {
            this._threejs.render(this._scene, this._camera);
            this._RAF();
        });
    }
}


let _APP = null;

document.getElementById('3DShait').addEventListener('click', () => {
    document.getElementById('canvas1').style.display = "none"
    _APP = new BasicWorldDemo();
});

