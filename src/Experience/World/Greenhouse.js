import Experience from "../Experience.js";
import EventEmitter from "../Utils/EventEmitter.js";
import Animations from "./Animations.js";
export default class RamenShop extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.material = this.experience.material;
    this.animations = null;
    // Resource
    this.greenHouse = this.resources.items.greenHouseModel;
    this.setModelMaterials();
    this.setAnimations();
  }
  setModelMaterials() {
    this.scene.add(this.greenHouse.scene);
    console.log(this.greenHouse);
    // this.resources.on("texturesMapped", () => {
    //   // 替换烘焙材质
    //   this.greenHouse.scene.traverse((mesh) => {
    //     mesh.material = this.material.allBakedMaterial;
    //   });

    //   this.scene.add(this.greenHouse.scene);
    // });
  }
  setAnimations() {
    this.animations = new Animations(this.greenHouse);
  }
}
