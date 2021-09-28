import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const boxGeometry = new THREE.BoxGeometry();
const sphereGeometry = new THREE.SphereGeometry();
const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
const planeGeometry = new THREE.PlaneGeometry();
const torusKnotGeometry = new THREE.TorusKnotGeometry();

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true
});
//const material= new THREE.MeshNormalMaterial()

const cube = new THREE.Mesh(boxGeometry, material);
cube.position.x = 5;
scene.add(cube);

const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 3;
scene.add(sphere);

const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
icosahedron.position.x = 0;
scene.add(icosahedron);

const plane = new THREE.Mesh(planeGeometry, material);
plane.position.x = -2;
scene.add(plane);

const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
torusKnot.position.x = -5;
scene.add(torusKnot);

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

const stats = Stats();
document.body.appendChild(stats.dom);

// const options = {
//     side: {
//         "FrontSide": THREE.FrontSide,
//         "BackSide": THREE.BackSide,
//         "DoubleSide": THREE.DoubleSide,
//     }
// }

const gui = new GUI();
const materialFolder = gui.addFolder('THREE.Material');
// materialFolder.add(material, 'transparent')
// materialFolder.add(material, 'opacity', 0, 1, 0.01)
// materialFolder.add(material, 'depthTest')
// materialFolder.add(material, 'depthWrite')
// materialFolder.add(material, 'alphaTest', 0, 1, 0.01).onChange(() => updateMaterial())
// materialFolder.add(material, 'visible')
// materialFolder.add(material, 'side', options.side).onChange(() => updateMaterial())
materialFolder.open();

// function updateMaterial() {
//     material.side = Number(material.side)
//     material.needsUpdate = true
// }

function animate() {
  requestAnimationFrame(animate);

  render();

  stats.update();
}

function render() {
  renderer.render(scene, camera);
}

animate();
