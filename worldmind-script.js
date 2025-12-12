// WorldMind Website Interactive Features
(function() {
    'use strict';

    // ===================================
    // Navigation Toggle
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(`
            .mission-card,
            .value-item,
            .tech-features li,
            .stat-card,
            .highlight-card,
            .arch-component,
            .capability-card,
            .metric-card,
            .app-card,
            .contribution-item
        `);

        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    };

    // ===================================
    // Particle Animation for Hero
    // ===================================
    const createParticleAnimation = () => {
        const particleField = document.querySelector('.particle-field');
        if (!particleField) return;

        let animationFrame;
        let time = 0;

        const animate = () => {
            time += 0.5;
            particleField.style.backgroundPosition = `
                ${time}px ${time}px,
                ${time * 1.2}px ${time * 0.8}px,
                ${time * 0.9}px ${time * 1.3}px,
                ${time * 1.1}px ${time * 0.7}px
            `;
            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            cancelAnimationFrame(animationFrame);
        });
    };

    // ===================================
    // Neural Network Animation
    // ===================================
    const createNeuralNetworkAnimation = () => {
        const neuralNetwork = document.querySelector('.neural-network');
        if (!neuralNetwork) return;

        let opacity = 0.3;
        let direction = 1;

        setInterval(() => {
            opacity += direction * 0.02;
            if (opacity >= 0.6 || opacity <= 0.3) {
                direction *= -1;
            }
            neuralNetwork.style.opacity = opacity;
        }, 50);
    };

    // ===================================
    // Counter Animation for Stats
    // ===================================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number, .metric-value');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isMultiplier = target.includes('x');
            const isTime = target.includes('ms');
            
            let numValue = parseFloat(target.replace(/[^\d.]/g, ''));
            if (isNaN(numValue)) return;

            counter.textContent = '0';
            let current = 0;
            const increment = numValue / 50;

            const updateCounter = () => {
                current += increment;
                if (current < numValue) {
                    if (isPercentage) {
                        counter.textContent = current.toFixed(1) + '%';
                    } else if (isMultiplier) {
                        counter.textContent = current.toFixed(1) + 'x';
                    } else if (isTime) {
                        counter.textContent = Math.floor(current) + 'ms';
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            // Start animation when element is visible
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            counterObserver.observe(counter);
        });
    };

    // ===================================
    // Diagram Node Animation
    // ===================================
    const animateDiagramNodes = () => {
        const nodes = document.querySelectorAll('.diagram-node');
        if (!nodes.length) return;

        nodes.forEach((node, index) => {
            node.style.opacity = '0';
            node.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                node.style.transition = 'all 0.5s ease';
                node.style.opacity = '1';
                node.style.transform = 'scale(1)';
            }, index * 300);
        });
    };

    // ===================================
    // Scroll Progress Indicator
    // ===================================
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    // ===================================
    // Parallax Effect for Hero
    // ===================================
    const createParallaxEffect = () => {
        const heroContent = document.querySelector('.hero-content');
        const heroBackground = document.querySelector('.hero-background');
        
        if (!heroContent || !heroBackground) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            heroContent.style.transform = `translateY(${rate}px)`;
            heroBackground.style.transform = `translateY(${rate * 0.3}px)`;
        });
    };

    // ===================================
    // Cursor Glow Effect
    // ===================================
    const createCursorGlow = () => {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(glow);

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            glow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });

        // Smooth follow animation
        const animateGlow = () => {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;
            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';
            requestAnimationFrame(animateGlow);
        };

        animateGlow();
    };

    // ===================================
    // Active Section Highlighting
    // ===================================
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop && 
                    window.pageYOffset < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    };

    // ===================================
    // Performance Optimization
    // ===================================
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Lazy load images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    };

    // ===================================
    // Load Demo Videos
    // ===================================
    const loadDemoVideos = () => {
        const grid = document.getElementById('demo-grid');
        if (!grid) return;

        // Helper functions for robust filename handling
        function isMp4Href(h) {
            if (!h) return false;
            try {
                const dec = decodeURIComponent(h);
                return dec.toLowerCase().endsWith('.mp4');
            } catch (e) {
                return h.toLowerCase().includes('.mp4');
            }
        }

        function normalizeHref(h) {
            try {
                return decodeURIComponent(h);
            } catch (e) {
                return h;
            }
        }

        function buildSrcFromName(name) {
            return 'assets/demo_new/' + encodeURIComponent(name).replace(/%2F/g, '/');
        }

        fetch('assets/demo_new/')
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const anchors = Array.from(doc.querySelectorAll('a'))
                    .map(a => a.getAttribute('href'))
                    .filter(href => href);

                const links = anchors
                    .filter(isMp4Href)
                    .map(normalizeHref)
                    .sort();

                if (links.length === 0) {
                    grid.innerHTML = '<p class="loading-text">No demonstration videos found.</p>';
                    return;
                }

                // Custom video order - modify this array to change the display order
                // 自定义视频顺序 - 修改这个数组来改变显示顺序
                const customOrder = [
                    'Open the drawer, then put the cup and the plate in.mp4',  
                    'get chips.mp4', 
                    'Grasp the moldy bread, pass it to the right hand, .mp4',                                         
                    'clean table.mp4',                                         
                    'cup.mp4',                                                 
                    'washing.mp4',                                             
                    'Pick up the book .mp4',                                   
                    'Crouch down, pick up the rag, wipe the table clean.mp4', 
                    'Use the spoon to stir the vegetables in the pot, p.mp4'  
                ];

                // Reorder videos based on customOrder
                const orderedLinks = [];
                customOrder.forEach(videoName => {
                    if (links.includes(videoName)) {
                        orderedLinks.push(videoName);
                    }
                });
                // Add any videos not in customOrder at the end
                links.forEach(link => {
                    if (!orderedLinks.includes(link)) {
                        orderedLinks.push(link);
                    }
                });
                const finalLinks = orderedLinks.length > 0 ? orderedLinks : links;

                grid.innerHTML = '';
                finalLinks.forEach((fn, idx) => {
                    const item = document.createElement('div');
                    item.className = 'demo-item';

                    const video = document.createElement('video');
                    video.src = buildSrcFromName(fn);
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    video.playsInline = true;
                    video.setAttribute('preload', 'metadata');
                    video.setAttribute('aria-label', fn.replace(/\.mp4$/i, ''));

                    // Error handler
                    video.addEventListener('error', () => {
                        console.warn('Video loading error:', fn);
                        const fallback = 'assets/demo_new/' + fn;
                        if (video.src !== fallback) {
                            video.src = fallback;
                        }
                    });

                    item.appendChild(video);
                    grid.appendChild(item);
                });

                // Apply special layout for exactly 9 videos
                if (finalLinks.length === 9) {
                    grid.classList.add('layout-9');
                } else {
                    grid.classList.remove('layout-9');
                }
            })
            .catch(err => {
                console.warn('Failed to load demo videos:', err);
                grid.innerHTML = '<p class="loading-text">Failed to load demonstrations. Please check server configuration.</p>';
            });
    };

    // ===================================
    // Initialize All Features
    // ===================================
    const init = () => {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize features
        loadDemoVideos();
        animateOnScroll();
        createParticleAnimation();
        createNeuralNetworkAnimation();
        animateCounters();
        animateDiagramNodes();
        createScrollProgress();
        createParallaxEffect();
        createCursorGlow();
        highlightActiveSection();
        lazyLoadImages();

        // Add loaded class for CSS transitions
        document.body.classList.add('loaded');
        
        console.log('🌍 WorldMind website initialized successfully!');
    };

    // Start initialization
    init();

    // ===================================
    // Export for testing
    // ===================================
    window.WorldMind = {
        init,
        animateOnScroll,
        createParticleAnimation,
        createNeuralNetworkAnimation,
        animateCounters
    };

})();

// ===================================
// BibTeX Copy Function (Global)
// ===================================
function copyBibTeX() {
    const bibtex = `@article{dualworld2024,
  title={DualWorld: A Tale of Two Worlds - Dual-System World Models for Embodied AI},
  author={Your Team},
  journal={arXiv preprint arXiv:XXXX.XXXXX},
  year={2024}
}`;

    navigator.clipboard.writeText(bibtex).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Copied!
        `;
        btn.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy BibTeX:', err);
        alert('Failed to copy to clipboard. Please copy manually.');
    });
}
