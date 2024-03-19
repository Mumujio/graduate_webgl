import * as THREE from "three";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import sources from "./sources";
import Resources from "./Utils/Resources";
import World from "./World/World";
import Environment from "./World/Environment";
import RayCaster from "./Raycaster";

import Material from "./World/Material";
import Controller from "./Controller";

let instance = null;

export default class Experience {
  constructor(_canvas) {
    if (instance) return instance;

    instance = this;

    // 画布
    this.canvas = _canvas;

    // 场景
    this.scene = new THREE.Scene();
    // 页面尺寸
    this.sizes = new Sizes();
    // 计时,循环渲染
    this.time = new Time();

    // 相机
    this.camera = new Camera();
    // 渲染器
    this.renderer = new Renderer();
    // 管理音乐
    // this.sounds = new Sounds();
    // 资源解析
    this.resources = new Resources(sources);
    // 初始化dom场景
    // this.preLoader = new PreLoader();
    // 世界场景
    this.world = new World();
    // 加载材质
    // this.material = new Material();

    // 世界环境
    this.environment = new Environment();
    // 控制器
    // this.controller = new Controller();
    // 光线投射
    this.raycaster = new RayCaster();

    // Resize event
    this.sizes.on("resize", () => {
      this.resize();
    });
    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }
  // Resize event
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();

    this.world.greenHouse?.animations.update();
    this.renderer.update();
  }
  destroy() {
    instance = null;
    this.sizes.off("resize");
    this.time.off("tick");

    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });
  }
}
