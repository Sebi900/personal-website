import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

const ThreeScene = () => {
  const sceneRef = useRef();

  useEffect(() => {

          // Cursor
  const cursor = {
    x: 0,
    y: 0
  }
    // Create a scene
    THREE.ColorManagement.enabled = false
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1f1e20 );

    // Textures
    const textureLoader = new THREE.TextureLoader()

    const baseTextureGrey = textureLoader.load("/owntexture/GreyBase.jpg")
    const middleTextureGrey = textureLoader.load("/owntexture/GreyMiddle.jpg")
    const topTextureGrey = textureLoader.load("/owntexture/GreyTop.jpg")

    const alphaBaseGrey = textureLoader.load("/owntexture/AlphaBaseGrey.jpg")

    const alphaBaseTexture = textureLoader.load("/owntexture/AlphaBase.jpg")
    const alphaMiddleTexture = textureLoader.load("/owntexture/AlphaMiddle.jpg")
    const alphaTopTexture = textureLoader.load("/owntexture/AlphaTop.jpg")

    const gradientTexture = textureLoader.load("textures/gradients/3.jpg")

    gradientTexture.minFilter = THREE.NearestFilter
    gradientTexture.magFilter = THREE.NearestFilter
    gradientTexture.generateMipmaps = false

    // Material 
    // Materiale Base
    const materialBase = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} )
    materialBase.map = baseTextureGrey
    materialBase.aoMapIntensity = 1
    materialBase.displacementScale = 0.2
    materialBase.normalScale.set(0.5, 0.5)
    materialBase.shininess = 100
    materialBase.alphaMap = alphaBaseGrey
    materialBase.transparent = true
    materialBase.doubleSided = true;

    // MaterialMiddle
    const materialMiddle = new THREE.MeshStandardMaterial( {side: THREE.DoubleSide} )
    materialMiddle.map = middleTextureGrey
    materialMiddle.aoMapIntensity = 1
    materialMiddle.roughness = 0.4
    materialMiddle.alphaMap = alphaMiddleTexture
    materialMiddle.normalScale.set(0.5, 0.5)
    materialMiddle.transparent = true

    // MaterialeTop
    const materialTop = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
    materialTop.map = topTextureGrey
    materialTop.aoMapIntensity = 1
    materialTop.alphaMap = alphaTopTexture
    // materialTop.normalScale.set(0.5, 0.5)
    materialTop.transparent = true

    // Create a camera
    const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 1.5
    scene.add(camera)

    // Particle

    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount; i++)
    {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    const parameters = {
        materialColor: 'gray'
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Material Particle
    const particlesMaterial = new THREE.PointsMaterial({
        color: parameters.materialColor,
        sizeAttenuation: textureLoader,
        size: 2
    })

    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    console.log(particles)
    scene.add(particles) //

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

      // Objects

      const planeBase = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1.2, 100, 100),
        materialBase
    )

    const planeMiddle = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1.2, 100, 100),
        materialMiddle
    )

    planeMiddle.position.y = 0.03

    const planeTop = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1.2, 100, 100),
        materialTop
    )

    planeBase.position.z = 0
    planeMiddle.position.z = 0.10
    planeTop.position.z = 0.20

    scene.add(planeBase, planeMiddle, planeTop)

    // Ambient light 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    // Pointer light 
    const pointLight = new THREE.PointLight(0x797dd4, 0.7)
    pointLight.position.x = 1
    pointLight.position.y = 1
    pointLight.position.z = 5
    scene.add(pointLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0.2;
    controls.maxDistance = 2;
    
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const clock = new THREE.Clock()
    const elapsedTime = clock.getElapsedTime();

    // Animation logic
    const animate = () => {
      requestAnimationFrame(animate);

      // Update camera

      camera.position.x += (cursor.x - camera.position.x) 
      camera.position.y += (cursor.y - camera.position.y) 
      camera.lookAt(planeTop.position)
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / window.innerWidth - 0.5
        cursor.y = - (event.clientY / window.innerHeight - 0.5)
      })

       // Handle resize
       const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
  
        // Update camera
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
  
        // Update renderer
        renderer.setSize(newWidth, newHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
  
      window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {};
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;