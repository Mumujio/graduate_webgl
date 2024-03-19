import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.setInstance();
    this.setControls();
    this.setCamAngles();
    this.setTransitions();
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.4,
      150
    );
    this.instance.position.set(-12, 15, -20);
    this.scene.add(this.instance);
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.dampingFactor = 0.03;
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.rotateSpeed = 1.2;
    this.controls.zoomSpeed = 0.8;
    // this.controls.target.x = 5.24;
    // this.controls.target.y = 4.26;
    this.controls.target.z = -1;
    // this.controls.enableRotate = false;
    // this.controls.enableZoom = false;
  }
  setCamAngles() {
    this.camAngle = {};
    this.camAngle.default = () => {
      this.controls.minDistance = 10;
      this.controls.maxDistance = 20;
      this.controls.minAzimuthAngle = 0;
      this.controls.maxAzimuthAngle = Math.PI * 1.9999;
      this.controls.minPolarAngle = Math.PI * 0.2;
      this.controls.maxPolarAngle = Math.PI * 0.55;
    };
    this.camAngle.unlocked = () => {
      this.controls.maxDistance = 30;
      this.controls.minDistance = 0;
      this.controls.minAzimuthAngle = 0;
      this.controls.maxAzimuthAngle = Math.PI * 1.999;
      this.controls.minPolarAngle = 0;
      this.controls.maxPolarAngle = Math.PI;
    };
    this.camAngle.aboutMe = () => {
      this.controls.minDistance = 1;
      this.controls.maxDistance = 2.2;
      // this.controls.minAzimuthAngle = -(Math.PI * 0.2); //left
      // this.controls.maxAzimuthAngle = Math.PI * 0.2; //right
      // this.controls.minPolarAngle = Math.PI * 0.3;
      // this.controls.maxPolarAngle = Math.PI * 0.65;
    };
    this.camAngle.articles = () => {
      this.controls.minDistance = 1;
      this.controls.maxDistance = 1.5;
      // this.controls.minAzimuthAngle = -(Math.PI * 0.2); //left
      // this.controls.maxAzimuthAngle = Math.PI * 0.2; //right
      // this.controls.minPolarAngle = Math.PI * 0.3;
      // this.controls.maxPolarAngle = Math.PI * 0.65;
    };
  }
  setTransitions() {
    this.transitions = {};
    this.transitions.default = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: "power1.inOut",
        x: -3.12,
        y: 2,
        z: 14,
      });

      gsap.to(this.controls.target, {
        duration: duration,
        ease: "power1.inOut",
        x: 5.24,
        y: 4.26,
        z: -2,
      });

      await this.sleep(1500);
      this.controls.enableRotate = true;
      this.controls.enableZoom = true;
    };

    this.transitions.aboutMe = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: "power1.inOut",
        x: 12,
        y: 11,
        z: -7.5,
      });
      gsap.to(this.controls.target, {
        duration: duration,
        ease: "power1.inOut",
        x: 11,
        y: 11,
        z: -7.5,
      });

      await this.sleep(1500);
      // this.controls.enableRotate = true;
      this.controls.enableZoom = true;
    };
    this.transitions.articles = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: "power1.inOut",
        x: 13.9,
        y: 2.6,
        z: -7.4,
      });
      gsap.to(this.controls.target, {
        duration: duration,
        ease: "power1.inOut",
        x: 12.9,
        y: 2.6,
        z: -7.4,
      });

      await this.sleep(1500);
      // this.controls.enableRotate = true;
      this.controls.enableZoom = true;
    };
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
