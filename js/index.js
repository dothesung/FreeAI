// Tạo nền bầu trời đầy sao
        function createStars() {
            const starsContainer = document.getElementById('stars-container');
            const starCount = window.innerWidth < 768 ? 100 : 200;

            // Tạo các ngôi sao
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');

                // Vị trí ngẫu nhiên
                const x = Math.random() * 100;
                const y = Math.random() * 100;

                // Kích thước và độ sáng ngẫu nhiên
                const size = Math.random() * 2 + 1;
                const opacity = Math.random() * 0.7 + 0.3;

                // Thời gian hoạt ảnh ngẫu nhiên
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;

                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.setProperty('--opacity', opacity);
                star.style.setProperty('--duration', `${duration}s`);
                star.style.setProperty('--delay', `${delay}s`);

                starsContainer.appendChild(star);
            }

            // Tạo sao băng
            for (let i = 0; i < 5; i++) {
                const shootingStar = document.createElement('div');
                shootingStar.classList.add('shooting-star');

                // Vị trí và góc ngẫu nhiên
                const y = Math.random() * 70;
                const rotate = Math.random() * 20 - 10;

                // Thời gian hoạt ảnh ngẫu nhiên
                const duration = Math.random() * 10 + 15;
                const delay = Math.random() * 15;

                shootingStar.style.top = `${y}%`;
                shootingStar.style.right = `0`;
                shootingStar.style.transform = `rotate(${rotate}deg)`;
                shootingStar.style.setProperty('--duration', `${duration}s`);
                shootingStar.style.setProperty('--delay', `${delay}s`);

                starsContainer.appendChild(shootingStar);
            }
        }

        // Tạo hiệu ứng bụi sao cho thẻ
        function createStarDust(containerId, color) {
            const container = document.getElementById(containerId);
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('dust-particle');

                // Vị trí ngẫu nhiên
                const x = Math.random() * 100;
                const delay = Math.random() * 3;
                const size = Math.random() * 2 + 1;
                const opacity = Math.random() * 0.7 + 0.3;

                particle.style.left = `${x}%`;
                particle.style.bottom = `-5px`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.opacity = opacity;
                particle.style.animationDelay = `${delay}s`;

                if (color) {
                    particle.style.background = color;
                    particle.style.boxShadow = `0 0 3px ${color}`;
                }

                container.appendChild(particle);
            }
        }

        // Cập nhật đồng hồ kỹ thuật số
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Thêm hiệu ứng mạch động
        function addCircuitEffects() {
            const lines = document.querySelectorAll('.circuit-line');
            lines.forEach(line => {
                const delay = Math.random() * 10;
                const duration = 3 + Math.random() * 7;
                line.style.animationDelay = `${delay}s`;
                line.style.animationDuration = `${duration}s`;
            });
        }

        // Thêm hiệu ứng theo dõi chuột
        function addMouseEffect() {
            document.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                const cards = document.querySelectorAll('.card');

                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const cardCenterX = rect.left + rect.width / 2;
                    const cardCenterY = rect.top + rect.height / 2;
                    const distanceX = (e.clientX - cardCenterX) / 30;
                    const distanceY = (e.clientY - cardCenterY) / 30;

                    // Giới hạn góc nghiêng
                    const tiltX = Math.max(Math.min(distanceY, 5), -5);
                    const tiltY = Math.max(Math.min(-distanceX, 5), -5);

                    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
                        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
                    } else {
                        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                    }
                });

                // Hành tinh di chuyển nhẹ theo con trỏ
                const planets = document.querySelectorAll('.planet');
                planets.forEach(planet => {
                    const moveX = (mouseX - 0.5) * 10;
                    const moveY = (mouseY - 0.5) * 10;
                    planet.style.marginLeft = `${moveX}px`;
                    planet.style.marginTop = `${moveY}px`;
                });

                // Hiệu ứng ánh sáng nền theo dõi
                document.body.style.backgroundImage = `
                    radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(1, 200, 238, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at ${85 - mouseX * 30}% ${30 + mouseY * 40}%, rgba(174, 95, 248, 0.1) 0%, transparent 40%),
                    radial-gradient(circle at ${15 + mouseX * 30}% ${70 - mouseY * 40}%, rgba(255, 42, 109, 0.1) 0%, transparent 40%)`;
            });
        }

        // Tạo hiệu ứng nhiễu ngẫu nhiên
        function randomGlitch() {
            const glitchElements = document.querySelectorAll('.glitch span');
            const randomIndex = Math.floor(Math.random() * glitchElements.length);
            const randomElement = glitchElements[randomIndex];
            randomElement.style.opacity = '0.5';
            randomElement.style.transform = 'translateX(0)';
            setTimeout(() => {
                randomElement.style.opacity = '0';
                randomElement.style.transform = 'translateX(100%)';
            }, 100);
            setTimeout(randomGlitch, 3000 + Math.random() * 5000);
        }

        // Khởi tạo
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            createStarDust('dust-1', '#01c8ee');
            createStarDust('dust-2', '#ff2a6d');
            createStarDust('dust-3', '#ae5ff8');
            createStarDust('dust-4', '#05ffa1'); /* For new STT card */
            createStarDust('dust-5', '#01c8ee'); /* For new DALL-E card */
            createStarDust('dust-6', '#ae5ff8'); /* For new Imagen card */
            createStarDust('dust-7', '#00FFFF'); /* For new Image Arta card */
            createStarDust('dust-8', '#FD7B68'); /* For new Donate card */


            addCircuitEffects();
            addMouseEffect();

            setInterval(updateClock, 1000);
            updateClock();

            setTimeout(randomGlitch, 2000);
        });
