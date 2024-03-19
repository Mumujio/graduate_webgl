import Experience from "./Experience.js";
import gsap from "gsap";

export default class Controller {
  constructor() {
    // Setup
    this.experience = new Experience();
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.sounds = this.experience.sounds;
    this.numRightPhoto = 1;
    // this.setProjectControls()
    this.setMenuControls();
    this.setAboutMeControls();
    // this.setArcadeScreenControls()
    this.setCamControls();
    // this.setVideoControls()
    // this.setSocialControls()

    this.resources.on("ready", () => {
      this.materials = this.experience.material;
    });
  }

  // Project selection

  setProjectControls() {
    this.projectControls = {};
    this.projectControls.project1 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects1";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project1Texture,
          0.2
        );
      }
    };
    this.projectControls.project2 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects2";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project2Texture,
          0.2
        );
      }
    };
    this.projectControls.project3 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects3";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project3Texture,
          0.2
        );
      }
    };
    this.projectControls.project4 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects4";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project4Texture,
          0.2
        );
      }
    };
    this.projectControls.project5 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects5";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project5Texture,
          0.2
        );
      }
    };
    this.projectControls.project6 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects6";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project6Texture,
          0.2
        );
      }
    };
    this.projectControls.project7 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects7";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project7Texture,
          0.2
        );
      }
    };
    this.projectControls.project8 = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects8";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.project8Texture,
          0.2
        );
      }
    };

    // Go back
    this.projectControls.projectBack = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "projects0"
      ) {
        this.sounds.playBloop();
        this.logic.lockButtons(1500);
        this.logic.mode = "menu";
        this.camControls.toDefault();
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.vendingMachineDefaultTexture,
          0.4,
          true
        );
      }

      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "projects1" ||
          this.logic.mode === "projects2" ||
          this.logic.mode === "projects3" ||
          this.logic.mode === "projects4" ||
          this.logic.mode === "projects5" ||
          this.logic.mode === "projects6" ||
          this.logic.mode === "projects7" ||
          this.logic.mode === "projects8")
      ) {
        this.sounds.playBloop();
        this.logic.mode = "projects0";
        this.bigScreenTransition(
          this.materials.vendingMachineScreenMaterial,
          this.resources.items.vendingMachineMenuTexture,
          0.2
        );
      }
      console.log("projectBack");
    };

    // Enter
    this.projectControls.projectEnter = async () => {
      console.log("projectEnter");
    };
  }

  // Main menu controls

  setMenuControls() {
    this.menuControls = {};

    this.menuControls.aboutMe = async (obj, color) => {
      this.sounds.playClick();

      this.menuControls.buttonIndicator(obj, color);
      this.camControls.toAboutMe();
      this.materials.aboutMeTitleMaterial.color.setHex(0x87cefa);
      this.materials.skillsTitleMaterial.color.setHex(0xffffff);
      this.materials.experienceTitleMaterial.color.setHex(0xffffff);
      //   if (this.config.vertical === true) {
      //     this.bigScreenTransition(
      //       this.materials.bigScreenMaterial,
      //       this.resources.items.bigScreenAboutMeMobileTexture,
      //       0.2
      //     );
      //   } else {
      //     this.bigScreenTransition(
      //       this.materials.bigScreenMaterial,
      //       this.resources.items.bigScreenAboutMeTexture,
      //       0.2
      //     );
      //   }
    };
    this.menuControls.projects = async (obj, color) => {
      this.sounds.playClick();

      this.menuControls.buttonIndicator(obj, color);
      this.camControls.toProjects();
    };
    this.menuControls.articles = async (obj, color) => {
      this.sounds.playClick();

      this.menuControls.buttonIndicator(obj, color);
      this.camControls.toArticles();
    };
    this.menuControls.switchRightPhoto = () => {
      this.sounds.playBloop();
      this.numRightPhoto++;
      this.numRightPhoto === 3 ? (this.numRightPhoto = 1) : null;
      this.materials.priveMaterial.map =
        this.resources.items[`prive_${this.numRightPhoto}Texture`];
    };
    this.menuControls.buttonIndicator = async (obj, color) => {
      if (color === "black") {
        obj.material = this.materials.textProjectsMaterial;
        await this.sleep(200);
        obj.material = this.materials.textAboutMeMaterial;
      }
      if (color === "white") {
        obj.material = this.materials.textAboutMeMaterial;
        await this.sleep(200);
        obj.material = this.materials.textProjectsMaterial;
      }
    };
  }

  // About me big screen controls

  setAboutMeControls() {
    this.aboutMeControls = {};
    this.aboutMeControls.aboutMeBack = async () => {
      this.sounds.playBloop();
      this.materials.aboutMeScreenMaterial.map =
        this.resources.items.aboutMeScreenTexture;
      this.materials.aboutMeTitleMaterial.color.setHex(0x87cefa);
      this.materials.skillsTitleMaterial.color.setHex(0xffffff);
      this.materials.experienceTitleMaterial.color.setHex(0xffffff);
      this.camControls.toDefault();
    };
    this.aboutMeControls.aboutMeScreens = async () => {
      this.sounds.playBloop();
      this.materials.aboutMeScreenMaterial.map =
        this.resources.items.aboutMeScreenTexture;
      this.materials.aboutMeTitleMaterial.color.setHex(0x87cefa);
      this.materials.skillsTitleMaterial.color.setHex(0xffffff);
      this.materials.experienceTitleMaterial.color.setHex(0xffffff);
    };

    this.aboutMeControls.aboutMeSkills = async () => {
      this.sounds.playBloop();
      this.materials.aboutMeScreenMaterial.map =
        this.resources.items.skillsScreenTexture;
      this.materials.aboutMeTitleMaterial.color.setHex(0xffffff);
      this.materials.skillsTitleMaterial.color.setHex(0x87cefa);
      this.materials.experienceTitleMaterial.color.setHex(0xffffff);
    };

    this.aboutMeControls.aboutMeExperience = async () => {
      this.sounds.playBloop();
      this.materials.aboutMeScreenMaterial.map =
        this.resources.items.experienceScreenTexture;
      this.materials.aboutMeTitleMaterial.color.setHex(0xffffff);
      this.materials.skillsTitleMaterial.color.setHex(0xffffff);
      this.materials.experienceTitleMaterial.color.setHex(0x87cefa);
    };
  }

  //arcade screen credit controls

  setArcadeScreenControls() {
    this.screenControls = {};
    this.screenControls.arcadeScreen = async () => {
      if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "creditsStart"
      ) {
        this.sounds.playArcade();
        this.logic.mode = "credits";
        this.screenTransition(
          this.materials.arcadeScreenMaterial,
          this.resources.items.arcadeScreenCreditsTexture,
          0.2
        );
      } else if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "credits"
      ) {
        this.sounds.playArcade();
        this.logic.mode = "thanks";
        this.screenTransition(
          this.materials.arcadeScreenMaterial,
          this.resources.items.arcadeScreenThanksTexture,
          0.2
        );
      } else if (
        this.logic.buttonsLocked === false &&
        this.logic.mode === "thanks"
      ) {
        this.sounds.playArcade();
        this.logic.mode = "menu";
        this.camControls.toDefault();
        this.screenTransition(
          this.materials.arcadeScreenMaterial,
          this.resources.items.arcadeScreenDefaultTexture,
          0.2
        );
      }
    };
  }

  // camera transitions and angles

  setCamControls() {
    this.camControls = {};
    // start默认控制
    this.camControls.toDefault = async () => {
      this.sounds.playWhoosh();

      //   this.logic.lockButtons(1500);
      this.camera.camAngle.unlocked();
      this.camera.transitions.default(1.5);
      await this.sleep(1500);
      this.camera.camAngle.default();
    };
    // about me控制
    this.camControls.toAboutMe = async () => {
      this.sounds.playWhoosh();

      //   this.logic.lockButtons(1500);
      this.camera.camAngle.unlocked();
      this.camera.transitions.aboutMe(1.5);
      await this.sleep(1500);
      this.camera.camAngle.aboutMe();
    };
    // projects 控制
    this.camControls.toProjects = async () => {
      await this.sleep(500);
      window.open("https://github.com/Mumujio");
    };
    // articles 控制
    this.camControls.toArticles = async () => {
      this.sounds.playWhoosh();
      this.camera.camAngle.unlocked();
      this.camera.transitions.articles(1.5);
      await this.sleep(1500);
      this.camera.camAngle.articles();
    };
  }

  // video controls

  setVideoControls() {
    this.videoControls = {};

    this.videoControls.bigScreen = async () => {
      console.log("bigScreen");
    };

    this.videoControls.littleTVScreen = async () => {
      this.videoControls.togglePlayback(
        this.resources.video["littleTVScreenVideoTexture"]
      );
    };

    this.videoControls.tallScreen = async () => {
      this.videoControls.togglePlayback(
        this.resources.video["tallScreenVideoTexture"]
      );
    };

    this.videoControls.tvScreen = async () => {
      if (this.resources.video["tvScreenVideoTexture"].paused) {
        this.resources.video["tvScreenVideoTexture"].play();
      } else {
        window.open("https://www.youtube.com/watch?v=fYcphQibLek", "_blank");
        this.resources.video["tvScreenVideoTexture"].pause();
      }
    };

    this.videoControls.sideScreen = async () => {};

    this.smallScreen1Counter = 1;

    this.videoControls.smallScreen1 = async () => {
      if (this.smallScreen1Counter < this.resources.carousel1.length) {
        this.smallScreen1Counter++;
      } else {
        this.smallScreen1Counter = 1;
      }

      this.screenTransition(
        this.materials.smallScreen1Material,
        this.resources.carousel1[this.smallScreen1Counter - 1],
        0.8
      );

      this.animations.photoCounter = 0;
    };

    this.smallScreen2Counter = 1;

    this.videoControls.smallScreen2 = async () => {
      if (this.smallScreen2Counter < this.resources.carousel2.length) {
        this.smallScreen2Counter++;
      } else {
        this.smallScreen2Counter = 1;
      }

      this.screenTransition(
        this.materials.smallScreen2Material,
        this.resources.carousel2[this.smallScreen2Counter - 1],
        0.8
      );

      this.animations.photoCounter = 0;
    };

    this.videoControls.smallScreen3 = async () => {
      this.videoControls.togglePlayback(
        this.resources.video["smallScreen3VideoTexture"]
      );
    };

    this.videoControls.smallScreen4 = async () => {
      this.videoControls.togglePlayback(
        this.resources.video["smallScreen4VideoTexture"]
      );
    };

    this.videoControls.smallScreen5 = async () => {
      this.videoControls.togglePlayback(
        this.resources.video["smallScreen5VideoTexture"]
      );
    };

    this.videoControls.togglePlayback = async (video) => {
      this.sounds.playBloop();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };
  }

  setSocialControls() {
    this.socialControls = {};
    this.socialControls.twitter = async () => {
      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "aboutMe" ||
          this.logic.mode === "skills" ||
          this.logic.mode === "experience")
      ) {
        window.open("https://twitter.com/Jessezhouu", "_blank");
      }
    };

    this.socialControls.linkedIn = async () => {
      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "aboutMe" ||
          this.logic.mode === "skills" ||
          this.logic.mode === "experience")
      ) {
        window.open("https://www.linkedin.com/in/jessezhou1998", "_blank");
      }
    };

    this.socialControls.gitHub = async () => {
      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "aboutMe" ||
          this.logic.mode === "skills" ||
          this.logic.mode === "experience")
      ) {
        window.open("https://github.com/enderh3art", "_blank");
      }
    };

    this.socialControls.medium = async () => {
      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "aboutMe" ||
          this.logic.mode === "skills" ||
          this.logic.mode === "experience")
      ) {
        window.open("https://medium.com/@jesse-zhou", "_blank");
      }
    };

    this.socialControls.mail = async () => {
      if (
        this.logic.buttonsLocked === false &&
        (this.logic.mode === "aboutMe" ||
          this.logic.mode === "skills" ||
          this.logic.mode === "experience")
      ) {
        window.location.href = "mailto:jessezhouu@gmail.com";
      }
    };
  }

  screenTransition(material, newTexture, duration) {
    material.uniforms.texture2.value = newTexture;
    gsap.to(material.uniforms.progress, {
      value: 1,
      duration: duration,
      ease: "power1.inOut",
      onComplete: () => {
        material.uniforms.texture1.value = newTexture;
        material.uniforms.progress.value = 0;
      },
    });
  }

  bigScreenTransition(material, newTexture, duration, toDefault) {
    material.uniforms.uTexture2IsDefault.value = toDefault ? 1 : 0;

    material.uniforms.uTexture2.value = newTexture;
    gsap.to(material.uniforms.uProgress, {
      value: 1,
      duration: duration,
      ease: "power1.inOut",
      onComplete: () => {
        material.uniforms.uTexture1IsDefault.value = toDefault ? 1 : 0;
        material.uniforms.uTexture1.value = newTexture;
        material.uniforms.uProgress.value = 0;
      },
    });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
