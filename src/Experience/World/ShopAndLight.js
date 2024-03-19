import Experience from "../Experience.js";
import EventEmitter from "../Utils/EventEmitter.js";
import Animations from "./Animations.js";
import * as THREE from "three";
export default class RamenShop extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.material = this.experience.material;
    // Resource
    this.shopAndLightModel = this.resources.items.shopAndLightModel;
    this.setModelMaterials();
    // 动画
    this.animations = new Animations();
  }
  setModelMaterials() {
    this.resources.on("texturesMapped", () => {
      // 替换烘焙材质
      this.shopAndLightModel.scene.traverse((mesh) => {
        mesh.material = this.material.allBakedMaterial;

        switch (mesh.name) {
          case "text_aboutMe":
            mesh.material = this.material.textAboutMeMaterial;
            break;
          case "text_articles":
            mesh.material = this.material.textArticlesMaterial;
            break;
          case "text_click":
            mesh.material = this.material.textClickMaterial;
            break;
          case "text_projects":
            mesh.material = this.material.textProjectsMaterial;
            break;
          case "text_yi":
            mesh.material = this.material.textLaMianMaterialMaterial;
            break;
          case "text_le":
            mesh.material = this.material.textLaMianMaterialMaterial;
            break;
          case "text_la":
            mesh.material = this.material.textLaMianMaterialMaterial;
            break;
          case "text_mian":
            mesh.material = this.material.textLaMianMaterialMaterial;
            break;
          case "text_guan":
            mesh.material = this.material.textLaMianMaterialMaterial;
            break;
          case "text_llq":
            mesh.material = this.material.textLLQMaterial;
            break;
          case "text_main":
            mesh.material = this.material.textMainMaterial;
            break;
          case "text_RAMEN":
            mesh.material = this.material.textRamenMaterial;
            break;
          case "text_back":
            mesh.material = this.material.textBackMaterial;
            break;
          case "text_about":
            mesh.material = this.material.aboutMeTitleMaterial;
            break;
          case "text_skills":
            mesh.material = this.material.skillsTitleMaterial;
            break;
          case "text_experience":
            mesh.material = this.material.experienceTitleMaterial;
            break;
          case "窗帘1":
          case "窗帘2":
            mesh.material = this.material.curtainMaterial;
            break;
          case "侧面电视1":
          case "侧面电视2":
          case "侧面电视3":
          case "侧面电视4":
          case "侧面电视5":
          case "侧面电视6":

          case "侧面大电视":
          case "正面电视1":
          case "正面电视2":
            mesh.material = this.material.bigVideoMaterial;
            break;
          case "侧面电视7":
            mesh.material = this.material.aboutMeScreenMaterial;
            break;
          case "简历屏幕1":
            mesh.material = this.material.priveMaterial;
            break;
          case "简历屏幕2":
            mesh.material = this.material.resumeMaterial;
          default:
            break;
        }
      });

      this.scene.add(this.shopAndLightModel.scene);
    });

    // textAMesh.material = textMaterial;
  }
}
