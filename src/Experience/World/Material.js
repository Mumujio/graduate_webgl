import Experience from "../Experience";
import EventEmitter from "../Utils/EventEmitter";
import * as THREE from "three";
export default class Material extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.resources.on("ready", () => {
      this.mapTextures();
      this.colorTextures();
    });
  }
  mapTextures() {
    // 装载烘焙材质

    this.allBakedMaterial = new THREE.MeshBasicMaterial({
      map: this.resources.items["allBakedTexture"],
    });
    this.resumeMaterial = new THREE.MeshBasicMaterial({
      map: this.resources.items["resumeTexture"],
    });
    this.aboutMeScreenMaterial = new THREE.MeshBasicMaterial({
      map: this.resources.items["aboutMeScreenTexture"],
    });
    // 默认照片
    this.priveMaterial = new THREE.MeshBasicMaterial({
      map: this.resources.items["prive_1Texture"],
    });

    // 装载视频材质
    this.bigVideoMaterial = new THREE.MeshBasicMaterial({
      map: this.resources.items["smallScreen4VideoTexture"],
    });
  }
  colorTextures() {
    // 装载颜色材质
    this.textAboutMeMaterial = new THREE.MeshBasicMaterial({
      color: 0x171414,
    });
    this.textArticlesMaterial = new THREE.MeshBasicMaterial({
      color: 0x171414,
    });
    this.textProjectsMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    this.textClickMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    this.textLaMianMaterialMaterial = new THREE.MeshBasicMaterial({
      color: 0x6aeab9,
    });
    this.textLLQMaterial = new THREE.MeshBasicMaterial({
      color: 0x857777,
    });
    this.textMainMaterial = new THREE.MeshBasicMaterial({
      color: 0xff1094,
    });
    this.textRamenMaterial = new THREE.MeshBasicMaterial({
      color: 0x2eded2,
    });
    this.curtainMaterial = new THREE.MeshBasicMaterial({
      color: 0x0d31c9,
    });
    this.textBackMaterial = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
    });
    this.aboutMeTitleMaterial = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
    });
    this.skillsTitleMaterial = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
    });
    this.experienceTitleMaterial = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
    });

    this.resources.trigger("texturesMapped");
  }
  getTransitionShaderMaterial(texture) {
    return new THREE.ShaderMaterial({
      side: THREE.FrontSide,
      uniforms: {
        texture1: { value: texture },
        progress: { value: 0 },
        texture2: { value: null },
      },
      // wireframe: true,
      vertexShader: TransitionVertexShader,
      fragmentShader: TransitionFragmentShader,
    });
  }
}
