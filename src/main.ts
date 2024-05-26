import * as BABYLON from "babylonjs"
import "./style.css"

const canvas = document.getElementById('game') as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

const createScene = function () {
  const scene = new BABYLON.Scene(engine);
  const utilLayer = new BABYLON.UtilityLayerRenderer(scene);
  const gizmo = new BABYLON.CameraGizmo(utilLayer);
  const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
  gizmo.camera = camera;
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, false);
  new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
  const sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
  sphere.position.y = 1;
  BABYLON.MeshBuilder.CreateGround("ground1", { width: 6, height: 6, subdivisions: 1, updatable: false }, scene);
  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function () {
  engine.resize();
});