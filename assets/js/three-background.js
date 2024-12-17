// three-background.js
document.addEventListener('DOMContentLoaded', () => {
    // Check if THREE is loaded
    if (typeof THREE !== 'undefined') {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        try {
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            
            // Add canvas to background
            renderer.domElement.style.position = 'fixed';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.zIndex = '-1';
            document.body.appendChild(renderer.domElement);

            // Create particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 200;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 5;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            // Create material
            const material = new THREE.PointsMaterial({
                size: 0.005,
                color: 0x90CAF9,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            // Create mesh
            const particlesMesh = new THREE.Points(particlesGeometry, material);
            scene.add(particlesMesh);

            // Position camera
            camera.position.z = 3;

            // Animation
            const animate = () => {
                requestAnimationFrame(animate);
                particlesMesh.rotation.x += 0.0001;
                particlesMesh.rotation.y += 0.0001;
                renderer.render(scene, camera);
            };
            animate();

            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (error) {
            console.warn('WebGL not supported or error initializing THREE.js:', error);
        }
    }
});