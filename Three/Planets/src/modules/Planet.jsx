import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from  'gsap'

function Planet() {

 const canvasRef = useRef()

 useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
   25,
   window.innerWidth / window.innerHeight,
   .1,
   100
  )
  camera.position.z = 9;
  
  const canvas = canvasRef.current
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true})
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  window.addEventListener('resize', ()=>{
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('./earth/earth.jpeg')
  texture.colorSpace = THREE.SRGBColorSpace

  const planets = []; //for rotation purpose
  const radius = 1.3;
  const segments = 100;
  const orbitRadius = 4.5;
  const group = new THREE.Group(); //for grouping

  for (let i=0; i<5; i++){
   const geometry = new THREE.SphereGeometry(radius,segments,segments);
   const material = new THREE.MeshPhysicalMaterial({map: texture});
   const sphere = new THREE.Mesh(geometry, material)

   const angle = (i/4) * (Math.PI * 2)
   sphere.position.x = orbitRadius * Math.cos(angle)
   sphere.position.z = orbitRadius * Math.sin(angle)

   planets.push(sphere) //for rotation
   group.add(sphere) //for group
  }

  group.rotation.x = 0.1;
  group.position.y = -0.8;
  scene.add(group) //added group

  const hdri = new RGBELoader();
    hdri.load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/moonlit_golf_1k.hdr",
      function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );

  
  setInterval(()=>{
   gsap.to(group.rotation, {
    y: `+=${Math.PI/2}`,
    duration: 2,
    ease: 'easeInOut'
   })
  }, 2500)

  const controls = new OrbitControls(camera, renderer.domElement);

  const clock = new THREE.Clock();
  const animate = () => {
   requestAnimationFrame(animate)
   planets.forEach(sphere => {
    sphere.rotation.y = clock.getElapsedTime() / 5
   }); //rotate animation
   controls.update();
   renderer.render(scene, camera)
  }

  animate()

  return () => {
   renderer.dispose();
  }
 },[])

  return (
    <div>
     <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Planet