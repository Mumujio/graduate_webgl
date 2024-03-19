import * as THREE from "three";
import Experience from "../Experience.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader.js'
// import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'

import EventEmitter from "./EventEmitter.js";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    this.experience = new Experience();
    this.sources = sources;
    this.renderer = this.experience.renderer.instance;

    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;

    this.video = {};
    this.videoTexture = {};
    this.mychromavideotexturematerial = {};

    this.carousel1 = [];
    this.carousel2 = [];

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/static/draco/");
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    this.loaders.textureLoader = new THREE.TextureLoader();
    // this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();

    // this.loaders.basisTextureLoader = new BasisTextureLoader();
    // this.loaders.basisTextureLoader.setTranscoderPath("/basis/");
    // this.loaders.basisTextureLoader.detectSupport(this.renderer);

    // this.loaders.KTX2TextureLoader = new KTX2Loader();
    // this.loaders.KTX2TextureLoader.setTranscoderPath("/basis/");
    // this.loaders.KTX2TextureLoader.detectSupport(this.renderer);
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "videoTexture") {
        this.video[source.name] = document.createElement("video");
        this.video[source.name].src = source.path;

        this.video[source.name].muted = true;
        this.video[source.name].playsInline = true;
        this.video[source.name].autoplay = true;
        this.video[source.name].loop = true;
        // this.video[source.name].play();

        this.videoTexture[source.name] = new THREE.VideoTexture(
          this.video[source.name]
        );
        this.videoTexture[source.name].flipY = false;
        this.videoTexture[source.name].minFilter = THREE.NearestFilter;
        this.videoTexture[source.name].magFilter = THREE.NearestFilter;
        this.videoTexture[source.name].generateMipmaps = false;
        this.videoTexture[source.name].colorSpace = THREE.SRGBColorSpace;
        this.videoTexture[source.name].wrapS = this.videoTexture[
          source.name
        ].wrapT = THREE.ClampToEdgeWrapping;
        this.videoTexture[source.name].minFilter = THREE.LinearFilter;

        // this.videoTexture[source.name].wrapS = THREE.RepeatWrapping;
        // this.videoTexture[source.name].wrapT = THREE.RepeatWrapping;
        // this.videoTexture[source.name].center.set(0.5, 0.5);

        // this.videoTexture[source.name].rotation = -Math.PI / 2;
        // this.videoTexture[source.name].repeat.set(10, 10);

        this.sourceLoaded(source, this.videoTexture[source.name]);
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          file.flipY = false;
          file.colorSpace = THREE.SRGBColorSpace;
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "hdr") {
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(source, file) {
    this.loaded++;
    this.trigger("itemLoaded");

    this.items[source.name] = file;

    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}
