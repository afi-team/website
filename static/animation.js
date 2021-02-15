var animateLetters =  ['A', 'F', 'I'];

function plot(id, wordList) {
  var target = document.getElementById(id);
  if (!target) {
    return;
  }
  THREE.ImageUtils.crossOrigin = '*';
  var { width: targetWidth, height: targetHeight } = target.getBoundingClientRect();
  targetHeight = Math.max(window.innerHeight, targetHeight);
  targetWidth = Math.min(targetWidth, window.innerWidth);

  var demo;
  (function(demo) {
    var BasicView = (function() {
      function BasicView() {
        var _this = this;
        this.containerElement = document.createElement('div');
        target.appendChild(this.containerElement);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, targetWidth / targetHeight, 1, 200000);
        this.camera.position.z = -1000;
        var needAntialias = window.devicePixelRatio == 1.0;
        this.renderer = new THREE.WebGLRenderer({
          antialias: needAntialias
        });
        this.renderer.setClearColor(0x0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(targetWidth, targetHeight);
        this.containerElement.appendChild(this.renderer.domElement);
        var resizeHandler = (e) => _this.handleResize(e);
        window.addEventListener('resize', resizeHandler, false);

        this.cleanup = function () {
          window.removeEventListener('resize', resizeHandler, false);

          if (this.camera && this.camera.dispose) {
            this.camera.dispose();
          }

          if (this.renderer && this.renderer.dispose) {
            this.renderer.dispose();
          }

          if (typeof this.cancelRaf === 'function') {
            this.cancelRaf();
          }

          setTimeout(() => {
            this.scene.traverse(object => {
              if (!object.isMesh) return
              object.geometry.dispose()

              if (object.material.isMaterial) {
                cleanMaterial(object.material)
              } else {
                for (const material of object.material) cleanMaterial(material)
              }
            });
          });

          function cleanMaterial(material) {
            material.dispose()

            // dispose textures
            for (const key of Object.keys(material)) {
              const value = material[key]
              if (value && typeof value === 'object' && 'minFilter' in value) {
                value.dispose()
              }
            }
          };

          if (this.scene && this.scene.dispose) {
            this.scene.dispose();
          }
        }
      }

      BasicView.prototype.handleResize = function(event) {
        var { width: targetWidth, height: targetHeight } = target.getBoundingClientRect();
        this.camera.aspect = targetWidth / targetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(targetWidth, targetHeight);
      };
      BasicView.prototype.startRendering = function() {
        this.cancelRaf = this.update();
      };
      BasicView.prototype.update = function() {
        var rafTimer = requestAnimationFrame(this.update.bind(this));
        this.onTick();
        this.render();

        return () => cancelAnimationFrame(rafTimer);
      };
      BasicView.prototype.render = function() {
        this.renderer.render(this.scene, this.camera);
      };
      BasicView.prototype.onTick = function() {};

      return BasicView;
    })();

    demo.BasicView = BasicView;
  })(demo || (demo = {}));

  var __extends = this.__extends || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
      this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
  };

  var demo;
  (function(demo) {
    var FONT_NAME = "sans-serif";
    var DemoIconsPreload = (function() {
      function DemoIconsPreload() {
        new DemoIconsWorld();
      }
      return DemoIconsPreload;
    })();
    demo.DemoIconsPreload = DemoIconsPreload;
    var DemoIconsWorld = (function(_super) {
      __extends(DemoIconsWorld, _super);

      function DemoIconsWorld() {
        _super.call(this);
        this.CANVAS_W = 160;
        this.CANVAS_H = 40;
        this.WORD_LIST = wordList || [];
        this._matrixLength = 8;
        this._particleList = [];
        this._wordIndex = 0;
        this._hue = 0;
        this.HELPER_ZERO = new THREE.Vector3(0, 0, 0);
        this.setup();
        this.createLogo();
        this.startRendering();
      }

      DemoIconsWorld.prototype.setup = function() {
        this.camera.far = 100000;
        this.camera.near = 1;
        this.camera.position.z = 5000;
        this.camera.lookAt(this.HELPER_ZERO);

        var plane = new THREE.PlaneBufferGeometry(50000, 50000, 1, 1);
        var mat = new THREE.MeshBasicMaterial({
          map: THREE.ImageUtils.loadTexture('https://gw.alipayobjects.com/mdn/rms_f3f48a/afts/img/A*W9msSZjkw9oAAAAAAAAAAAAAARQnAQ'),
        });
        var bg = new THREE.Mesh(plane, mat);
        bg.position.z = -10000;
        this.scene.add(bg);
        this._bg = bg;

        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 1, +1).normalize();
        this.scene.add(light);
        // particle motion
        this._wrap = new THREE.Object3D();
        this.scene.add(this._wrap);

        var container = new createjs.Container();
        var SIZE = 256;
        for (var i = 0, len = this._matrixLength * this._matrixLength; i < len; i++) {
          var charCode =(61730 + i) % 3;
          var char = animateLetters[charCode];
          var text2 = new createjs.Text(char, "900 200px \"Lexend Mega\"", "#FFF");
          text2.textBaseline = "middle";
          text2.textAlign = "center";
          text2.x = SIZE * (i % this._matrixLength) + SIZE / 2;
          text2.y = SIZE * Math.floor(i / this._matrixLength) + SIZE / 2;
          container.addChild(text2);
        }
        container.cache(0, 0, SIZE * this._matrixLength, SIZE * this._matrixLength);
        var cacheUrl = container.getCacheDataURL();
        var image = new Image();
        image.src = cacheUrl;
        var texture = new THREE.Texture(image);
        texture.needsUpdate = true;

        var ux = 1 / this._matrixLength;
        var uy = 1 / this._matrixLength;
        this._particleList = [];
        for (var i = 0; i < this.CANVAS_W; i++) {
          for (var j = 0; j < this.CANVAS_H; j++) {
            var ox = (this._matrixLength * Math.random()) >> 0;
            var oy = (this._matrixLength * Math.random()) >> 0;
            var geometry = new THREE.PlaneGeometry(40, 40, 1, 1);
            this.change_uvs(geometry, ux, uy, ox, oy);
            var material = new THREE.MeshLambertMaterial({
              color: 0xffffff,
              map: texture,
              transparent: true,
              side: THREE.DoubleSide
            });
            material.blending = THREE.AdditiveBlending;
            var word = new THREE.Mesh(geometry, material);
            this._wrap.add(word);
            this._particleList.push(word);
          }
        }
        this.createParticleCloud();
      };
      DemoIconsWorld.prototype.createParticleCloud = function() {
        var geometry = new THREE.Geometry();
        var numParticles = 50000;
        var SIZE = 10000;
        for (var i = 0; i < numParticles; i++) {
          geometry.vertices.push(new THREE.Vector3(SIZE * (Math.random() - 0.5), SIZE * (Math.random() - 0.5), SIZE * (Math.random() - 0.5)));
        }
        var texture = THREE.ImageUtils.loadTexture('/fire_particle.png');
        var material = new THREE.PointCloudMaterial({
          size: 30,
          color: 0x444444,
          blending: THREE.AdditiveBlending,
          transparent: true,
          depthTest: false,
          map: texture
        });
        var mesh = new THREE.PointCloud(geometry, material);
        mesh.position = new THREE.Vector3(0, 0, 0);
        this.scene.add(mesh);
      };
      DemoIconsWorld.prototype.createLogo = function() {
        var _this = this;
        var canvas = document.createElement("canvas");
        canvas.setAttribute("width", this.CANVAS_W + "px");
        canvas.setAttribute("height", this.CANVAS_H + "px");
        var stage = new createjs.Stage(canvas);
        var text1 = new createjs.Text(this.WORD_LIST[this._wordIndex], "30px " + FONT_NAME, "#FFF");
        this._wordIndex++;
        if (this._wordIndex >= this.WORD_LIST.length) {
          this._wordIndex = 0;
        }
        text1.textAlign = "center";
        text1.x = this.CANVAS_W / 2;
        stage.addChild(text1);
        stage.update();
        var timeline = new TimelineMax({
          onComplete: function() {
            var tm = new TimelineMax();
            tm.call(function() {
              _this.createLogo();
            });
          }
        });
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < this._particleList.length; i++) {
          this._particleList[i].visible = false;
        }
        var pixcelColors = ctx.getImageData(0, 0, this.CANVAS_W, this.CANVAS_H).data;
        var existDotList = [];
        var existDotCount = 0;
        for (var i = 0; i < this.CANVAS_W; i++) {
          existDotList[i] = [];
          for (var j = 0; j < this.CANVAS_H; j++) {
            var flag = (pixcelColors[(i + j * this.CANVAS_W) * 4 + 3] == 0);
            existDotList[i][j] = flag;
            if (flag == true)
              existDotCount++;
          }
        }
        var cnt = 0;
        var max = this.CANVAS_W * this.CANVAS_H;
        for (var i = 0; i < this.CANVAS_W; i++) {
          for (var j = 0; j < this.CANVAS_H; j++) {
            if (existDotList[i][j] == true)
              continue;
            var word = this._particleList[cnt];
            word.material.color.setHSL(this._hue + ((i * canvas.height / max) - 0.5) * 0.2, 0.5, 0.6 + 0.4 * Math.random());
            word.material.blending = THREE.AdditiveBlending;
            this._wrap.add(word);
            var toObj = {
              x: (i - canvas.width / 2) * 30,
              y: (canvas.height / 2 - j) * 30,
              z: 0
            };
            var fromObj = {
              x: 2000 * (Math.random() - 0.5) - 500,
              y: 1000 * (Math.random() - 0.5),
              z: +10000
            };
            word.position.x = fromObj.x;
            word.position.y = fromObj.y;
            word.position.z = fromObj.z;
            var toRotationObj = {
              z: 0
            };
            var fromRotationObj = {
              z: 10 * Math.PI * (Math.random() - 0.5)
            };
            word.rotation.z = fromRotationObj.z;
            var delay = (Cubic.easeInOut).getRatio(cnt / 1600) * 3.0 + 1.5 * Math.random();
            timeline.to(word.rotation, 6.0, {
              z: toRotationObj.z,
              ease: Cubic.easeInOut
            }, delay);
            //
            word.visible = false;
            timeline.set(word, {
              visible: true
            }, delay);
            timeline.to(word.position, 3.0, {
              bezier: [
                fromObj, {
                  x: (0 + toObj.x) / 2 + 300,
                  y: (fromObj.y + toObj.y) / 2 + 500 * Math.random(),
                  z: (fromObj.z + toObj.z) / 2
                },
                toObj
              ],
              delay: delay / 1.0,
              ease: Expo.easeInOut
            }, 0);
            cnt++;
          }
        }
        this._wrap.position.z = -5000;
        timeline.to(this._wrap.position, 12.0, {
          z: 6000,
          ease: Quart.easeIn
        }, 0);
        if (Math.random() < 0.3) {
          timeline.set(this.camera.position, {
            x: 200,
            y: -200,
            z: 1000
          }, 0);
          timeline.to(this.camera.position, 14.0, {
            x: 0,
            y: 0,
            z: 5000,
            ease: Quart.easeInOut
          }, 0);
          timeline.set(this.camera, {
            fov: 90
          }, 0);
          timeline.to(this.camera, 14.0, {
            fov: 45,
            ease: Quart.easeInOut
          }, 0);
        } else if (Math.random() < 0.5) {
          timeline.set(this.camera.position, {
            x: 100,
            y: +1000,
            z: 1000
          }, 0);
          timeline.to(this.camera.position, 14.0, {
            x: 0,
            y: 0,
            z: 5000,
            ease: Quart.easeInOut
          }, 0);
        } else {
          timeline.set(this.camera.position, {
            x: -3000,
            y: 3000,
            z: 0
          }, 0);
          timeline.to(this.camera.position, 15.0, {
            x: 0,
            y: 0,
            z: 5000,
            ease: Quart.easeInOut
          }, 0);
        }
        timeline.to("#coverBlack", 1.0, {
          css: {
            opacity: 0.0
          }
        }, 0.0);

        timeline.timeScale(3.0);
        timeline.addCallback(function() {
          TweenMax.to(timeline, 1.0, {
            timeScale: 0.5,
            ease: Cubic.easeInOut
          });
          TweenMax.to(timeline, 0.5, {
            timeScale: 3.0,
            delay: 1,
            ease: Cubic.easeInOut
          });
          TweenMax.to(timeline, 0.5, {
            timeScale: 0.5,
            delay: 1,
            ease: Cubic.easeInOut
          });
          TweenMax.to(timeline, 2.0, {
            timeScale: 2.0,
            delay: 2,
            ease: Cubic.easeIn
          });
        }, 3.5);

        this._bg.material.color.setHSL(0, 0, 0);
        this._hue += 0.2;
        if (this._hue >= 1.0) {
          this._hue = 0.0;
        }
      };
      DemoIconsWorld.prototype.onTick = function() {
        _super.prototype.onTick.call(this);
        this.camera.lookAt(this.HELPER_ZERO);
        // 背景をカメラの反対側に配置
        var vec = this.camera.position.clone();
        vec.negate();
        vec.normalize();
        vec.multiplyScalar(10000);
        this._bg.position.copy(vec);
        this._bg.lookAt(this.camera.position);
      };
      DemoIconsWorld.prototype.change_uvs = function(geometry, unitx, unity, offsetx, offsety) {
        var faceVertexUvs = geometry.faceVertexUvs[0];
        for (var i = 0; i < faceVertexUvs.length; i++) {
          var uvs = faceVertexUvs[i];
          for (var j = 0; j < uvs.length; j++) {
            var uv = uvs[j];
            uv.x = (uv.x + offsetx) * unitx;
            uv.y = (uv.y + offsety) * unity;
          }
        }
      };

      demo.DemoIconsPreload = DemoIconsWorld;
      return DemoIconsWorld;
    })(demo.BasicView);
  })(demo || (demo = {}));

  var el = new demo.DemoIconsPreload();

  return function() {
    el.cleanup();
  }
}
