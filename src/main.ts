import { Scene, Engine, FreeCamera, HemisphericLight, SceneLoader, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

const createScene = function () {
  const scene = new Scene(engine);
  const camera = new FreeCamera("camera", new Vector3(0, 5, -10));
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  const lights = new HemisphericLight("light", new Vector3(0, 1, 0));
  lights.intensity = 0.7
  SceneLoader.Append("/", "m1911.glb", scene);
  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function () {
  engine.resize();
});