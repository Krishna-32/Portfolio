import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Earth() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    camera.position.z = 2;

    const textureLoader = new THREE.TextureLoader();
    const earthText = textureLoader.load("./earth.jpeg");
    const cloudsText = textureLoader.load("./clouds.jpg");
    earthText.colorSpace = THREE.SRGBColorSpace;
    cloudsText.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.SphereGeometry(1, 100, 100);
    const material = new THREE.MeshBasicMaterial({ map: earthText });
    const mesh = new THREE.Mesh(geometry, material);
    

    const geometry2 = new THREE.SphereGeometry(1.001, 100, 100);
    const material2 = new THREE.MeshPhysicalMaterial({ alphaMap: cloudsText, transparent: true, opacity: 0.5 });
    const mesh2 = new THREE.Mesh(geometry2, material2);

    scene.add(mesh);
    scene.add(mesh2);

    const hdri = new RGBELoader();
    hdri.load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rosendal_plains_1_1k.hdr",
      function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.01 / 10;
      mesh.rotation.x += 0.01 / 100;

      mesh2.rotation.y += 0.01 / 5;
      mesh2.rotation.x += 0.01 / 50;

      controls.update();

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Earth;
