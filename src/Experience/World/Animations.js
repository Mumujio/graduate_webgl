import Experience from "../Experience";
import * as THREE from "three";
export default class Animations {
  constructor(model) {
    this.experience = new Experience();
    this.time = this.experience.time;
    this.mixer = null;
    this.clock = new THREE.Clock();
    this.model = model;
    this.actions = [];
    this.setAnimations();
  }
  setAnimations() {
    const animations = this.model.animations;
    this.mixer = new THREE.AnimationMixer(this.model.scene);

    this.actions = animations.map((animation) =>
      this.mixer.clipAction(animation)
    );
  }
  update() {
    const elapsed = this.clock.getDelta();
    this.mixer?.update(elapsed);
  }
}
