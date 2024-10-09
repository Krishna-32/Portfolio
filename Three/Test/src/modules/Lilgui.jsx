import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GUI from 'lil-gui';

function Lilgui() {
  const canvasRef = useRef();
  const guiRef = useRef(); // Ref for the GUI instance

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#fff' });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create lil-gui instance and add it to the guiRef
    const gui = new GUI();
    guiRef.current = gui; // store gui reference to clean it up later

    const params = {
      width: 1,
      height: 1,
      depth: 1,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      color: '#fff',
    };

    const updateGeometry = () => {
      mesh.geometry.dispose();
      mesh.geometry = new THREE.BoxGeometry(
        params.width,
        params.height,
        params.depth,
      );
    };

    gui.add(params, 'width', 1, 10).onChange(updateGeometry);
    gui.add(params, 'height', 1, 10).onChange(updateGeometry);
    gui.add(params, 'depth', 1, 10).onChange(updateGeometry);
    gui.add(params, 'rotationX', -Math.PI, Math.PI).onChange((value) => {
      mesh.rotation.x = value;
    })
    gui.add(params, 'rotationY', -Math.PI, Math.PI).onChange((value) => {
      mesh.rotation.y = value;
    })
    gui.add(params, 'rotationZ', -Math.PI, Math.PI).onChange((value) => {
      mesh.rotation.z = value;
    })
    gui.addColor(params, 'color').onChange((value) => {
      material.color.set(value);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      // Clean-up resources
      gui.destroy(); // Clean up lil-gui
      renderer.dispose();
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Lilgui;
