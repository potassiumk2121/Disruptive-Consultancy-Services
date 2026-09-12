// global.js
function initializeGlobe() {
  const container = document.getElementById('globe-container');
  if (!container) return; // Ensure the container exists

  // Clean up previous instances if necessary
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(23.5, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight * 0.60);
  container.appendChild(renderer.domElement);

  const globeGeometry = new THREE.SphereGeometry(5, 128, 128);
  const globeTexture = new THREE.TextureLoader().load("/ico/Globe/earth_atmos.jpg");
  const globeMaterial = new THREE.MeshBasicMaterial({ map: globeTexture, transparent: true, opacity: 1 });
  const globe = new THREE.Mesh(globeGeometry, globeMaterial);

  // Position the globe lower
  const postition_globe_cloud = -3.5;

  globe.position.y = postition_globe_cloud;
  scene.add(globe);

  // Create the cloud layer
  const cloudTexture = new THREE.TextureLoader().load("/ico/Globe/earth_clouds.png");
  const cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true });
  const cloud = new THREE.Mesh(globeGeometry, cloudMaterial);
  cloud.scale.set(1.01, 1.01, 1.01);

  cloud.position.y = postition_globe_cloud;
  scene.add(cloud);

  // Position the camera
  camera.position.z = 12;

  // Add light sources
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1);
  scene.add(light);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.0025;
    cloud.rotation.y += 0.002;

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight * 0.6;
    renderer.setSize(newWidth, newHeight);
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
  });
}

// Initialize the globe on page load
document.addEventListener('DOMContentLoaded', initializeGlobe);
document.addEventListener('astro:after-swap', initializeGlobe);
document.addEventListener('astro:before-swap', initializeGlobe);
document.addEventListener('astro:after-render', initializeGlobe);
document.addEventListener('astro:before-render', initializeGlobe);
document.addEventListener('astro:page-load', initializeGlobe);
