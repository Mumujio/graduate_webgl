import Experience from "../Experience.js";
import GreenHouse from "./Greenhouse.js";
import * as THREE from "three";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.greenHouse = new GreenHouse();

      const geometry = new THREE.SphereGeometry(100, 32, 32); // 半径为1000，32个宽度段和32个高度段

      // 将HDR贴图应用到天空球材质
      const material = new THREE.MeshPhysicalMaterial({
        map: this.resources.items["skyHDR"],
        side: THREE.BackSide,
      });

      // 创建一个天空球
      const skybox = new THREE.Mesh(geometry, material);

      // 将天空球添加到场景中
      this.scene.add(skybox);

      // const axesHelper = new THREE.AxesHelper(5);
      // this.scene.add(axesHelper);
    });
  }
}
