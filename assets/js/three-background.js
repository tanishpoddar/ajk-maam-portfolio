document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        try {
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            renderer.domElement.style.position = 'fixed';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.zIndex = '-1';
            document.body.appendChild(renderer.domElement);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 200;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 5;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const material = new THREE.PointsMaterial({
                size: 0.02, // Adjusted size for better visibility
                color: 0x90CAF9,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, material);
            scene.add(particlesMesh);

            camera.position.z = 3;

            const animate = () => {
                requestAnimationFrame(animate);
                particlesMesh.rotation.x += 0.001; // Adjust rotation speed
                particlesMesh.rotation.y += 0.001;
                renderer.render(scene, camera);
            };
            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (error) {
            console.warn('WebGL not supported or error initializing THREE.js:', error);
        }
    } else {
        console.warn('Three.js library not loaded.');
    }
});
