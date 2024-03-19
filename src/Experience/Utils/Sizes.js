import Experience from "../Experience.js";
import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.canvas = new Experience().canvas;
    // Setup
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event
    window.addEventListener("resize", () => {
      this.width = this.canvas.clientWidth;
      this.height = this.canvas.clientHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.trigger("resize");
    });

    //Orientation change event
    window.onorientationchange = async () => {
      await this.sleep(10);
      this.width = this.canvas.clientWidth;
      this.height = this.canvas.clientHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.trigger("resize");
    };

    //Screen wake event
    document.addEventListener("visibilitychange", async () => {
      if (document.hidden) {
      } else {
        await this.sleep(500);
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        this.trigger("resize");
      }
    });
  }

  //manual trigger
  resize() {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.trigger("resize");
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
