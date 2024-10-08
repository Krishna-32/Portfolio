import React, { useEffect, useRef } from "react";
import * as THREE from "three";

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
    camera.position.z = 5;

    const geometry = new THREE.SphereGeometry(1, 100, 100);
    const material = new THREE.MeshBasicMaterial({color : 'beige'});
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    renderer.render(scene, camera)

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Earth;
