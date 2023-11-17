import * as THREE from 'three'
import { TrackballControls} from 'three/examples/jsm/controls/TrackballControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GUI from "lil-gui"
import { gsap } from 'gsap'

THREE.ColorManagement.enabled = false

// Debug
const gui = new GUI()

// Textures
const textureLoader = new THREE.TextureLoader()

const baseTexture = textureLoader.load("/owntexture/BaseTexture.jpg")
const middleTexture = textureLoader.load("/owntexture/MiddleTexture.jpg")
const topTexture = textureLoader.load("/owntexture/TopTexture.jpg")

const baseTextureGrey = textureLoader.load("/owntexture/GreyBase.jpg")
const middleTextureGrey = textureLoader.load("/owntexture/GreyMiddle.jpg")
const topTextureGrey = textureLoader.load("/owntexture/GreyTop.jpg")

const alphaBaseGrey = textureLoader.load("/owntexture/AlphaBaseGrey.jpg")

const alphaBaseTexture = textureLoader.load("/owntexture/AlphaBase.jpg")
const alphaMiddleTexture = textureLoader.load("/owntexture/AlphaMiddle.jpg")
const alphaTopTexture = textureLoader.load("/owntexture/AlphaTop.jpg")

const gradientTexture = textureLoader.load("/textures/gradients/3.jpg")

gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false

/**
 * Base
 *
 */

// Mobile

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x1f1e20 );

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
const materialTop = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide })
materialTop.map = topTextureGrey
materialTop.aoMapIntensity = 1
materialTop.alphaMap = alphaTopTexture
materialTop.normalScale.set(0.5, 0.5)
materialTop.transparent = true

// Gui 
// gui.add(material, "displacementScale").min(0).max(5).step(0.01)

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
gui.add( particles, 'visible' )
scene.add(particles) // Here you can add particles for the background

// Ambient light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// Pointer light 
const pointLight = new THREE.PointLight(0x280b6a, 0.5)
pointLight.position.x = 1
pointLight.position.y = 1
pointLight.position.z = 5
scene.add(pointLight)

console.log(pointLight)
gui.addColor( pointLight, 'color' )

scene.add(planeBase, planeMiddle, planeTop)

/**
 * Cursor 
 */
const cursor = {
    x: 0,
    y: 0
}

// window.addEventListener('mousemove', (event) =>
// {
//     cursor.x = event.clientX / sizes.width - 0.5
//     cursor.y = - (event.clientY / sizes.height - 0.5)

//     // console.log(cursor.x, cursor.y)
// })

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera

// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1,)

const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 1.5
// camera.lookAt(planeTop.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.minDistance = 0.2
controls.maxDistance = 2
// controls.enableDamping = false;
// controls.enableZoom = false;

// function handleOrientation(event) {
//     // const absolute = event.absolute;
//     const alpha = event.alpha;
//     const beta = event.beta;
//     const gamma = event.gamma;
    
//     // Do stuff with the new orientation data
//   }

//   window.addEventListener("deviceorientation", handleOrientation);

//   console.log(handleOrientation())
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

// gsap.to(planeBase.rotation, {duration: 1, delay: 1, y:3.14, x: 0.2})
// gsap.to(planeMiddle.rotation, {duration: 1, delay: 1, y:3.14, x: 0.2})
// gsap.to(planeTop.rotation, {duration: 1, delay: 1, y:3.14, x: 0.2})

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // plane.rotation.y = 0.15 * elapsedTime

    // Update camera
    // camera.position.x = cursor.x
    // camera.position.y = cursor.y 

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()