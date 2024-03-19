import Experience from "../Experience";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.setEnvironment();
  }
  setEnvironment() {
    // this.scene.background = new THREE.Color(0x000000);
    this.setAmbientLight();
    // this.setRectAreaLight();
    // this.setDirectionalLight();
    // this.setPointLight();
  }
  // 环境光
  setAmbientLight() {
    const light = new THREE.AmbientLight(0x404040, 4.5);
    this.scene.add(light);
  }
  // 面光
  setRectAreaLight() {
    RectAreaLightUniformsLib.init();
    const width = 10;
    const height = 30;
    const intensity = 6;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    // rectLight.rotateY(Math.PI / 3);
    rectLight.position.set(0, 20, 0);
    rectLight.lookAt(0, 0, 0);
    this.scene.add(rectLight);

    const rectLightHelper = new RectAreaLightHelper(rectLight);
    this.scene.add(rectLightHelper);
  }
  // 平行光
  setDirectionalLight() {
    // 从上方照射的白色平行光，强度为 0.5。
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    this.scene.add(directionalLight);
  }
  // 点光源
  setPointLight() {
    const sphere = new THREE.SphereGeometry(0.5, 16, 8);

    //lights

    // const light1 = new THREE.PointLight(0x404040, 10);
    light1.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x404040 }))
    );
    light1.position.set(0, 10, 0);
    this.scene.add(light1);
  }
}
