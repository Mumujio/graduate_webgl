import Experience from "./Experience";
import * as THREE from "three";
import EventEmitter from "./Utils/EventEmitter";

export default class RayCaster extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.camera = this.experience.camera.instance;
    this.pointer = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.greenHouse_Animations = null;
    // this.sounds = this.experience.sounds;;
    // this.controller = this.experience.controller;
    // 需要检测的物体
    this.raycasters = [];
    // 需要检测的物体名
    this.raycastersNames = ["button_1", "button_2", "button_3", "button_4"];
    this.resources.on("ready", () => {
      this.setRaycaster();
      this.setAnimations();
    });
  }
  setRaycaster() {
    // 筛选需要检测的物体
    this.experience.scene.traverse((object3D) => {
      object3D.name && this.raycastersNames.includes(object3D.name)
        ? this.raycasters.push(object3D)
        : null;
    });

    window.addEventListener("click", this.click.bind(this));
  }
  setAnimations() {
    this.greenHouse_Animations = this.experience.world.greenHouse.animations;
  }
  click(event) {
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1 + 0.12; // 这里0.1是canvas不全屏的偏移修正
    this.raycaster.setFromCamera(this.pointer, this.camera);

    this.intersect();
  }
  intersect() {
    const intersects = this.raycaster.intersectObjects(this.raycasters);
    // const intersects = this.raycaster.intersectObjects(
    //   this.experience.scene.children
    // );

    if (intersects.length) {
      const intersectName = intersects[0].object.name;

      if (intersectName.includes("2")) {
        // 打开卷帘
        console.log("打开卷帘");
        // 监听动画播放完成事件（正放）
        this.greenHouse_Animations.actions.forEach((action) => {
          action.paused = false;
          action.timeScale = 1;
          action.clampWhenFinished = true;
          action.setLoop(THREE.LoopOnce);
          action.play();
        });
      } else if (intersectName.includes("7")) {
        // 关闭卷帘
        console.log("关闭卷帘");
        // 监听动画播放完成事件（倒放）
        this.greenHouse_Animations.actions.forEach((action) => {
          action.paused = false;
          action.timeScale = -1;
          action.clampWhenFinished = true;
          action.setLoop(THREE.LoopOnce);
          action.play();
        });
      } else if (intersectName.includes("8")) {
        // 打开抽水泵
        console.log("打开抽水泵");
      } else if (intersectName.includes("9")) {
        // 关闭抽水泵
        console.log("关闭抽水泵");
      }
    }
  }
}
