// Dati dei profili
        const profiles = [
            {
                id: 1,
                name: 'Moretton Alessandro',
                image: '/immagini/1.png'
            },
            {
                id: 2,
                name: 'Lorenzo Del Puppo',
                image: '/immagini/2.png'
            },
            {
                id: 3,
                name: 'Alejandro Diaz Jacobucci',
                image: '/immagini/3.png'
            },
            {
                id: 4,
                name: 'Tonin Daniel',
                image: '/immagini/4.png'
            },
            {
                id: 5,
                name: 'Martinello Alessio',
                image: '/immagini/5.png'
            }
        ];

        // Funzione per creare i card
        function createCards() {
            const galleryGrid = document.getElementById('galleryGrid');
            
            profiles.forEach((profile) => {
                // Creare il card
                const card = document.createElement('div');
                card.className = 'card';
                
                // Creare l'immagine
                const image = document.createElement('img');
                image.className = 'card-image';
                image.src = profile.image;
                image.alt = profile.name;
                
                // Creare l'overlay
                const overlay = document.createElement('div');
                overlay.className = 'card-overlay';
                
                // Creare il nome
                const name = document.createElement('div');
                name.className = 'card-name';
                name.textContent = profile.name;
                
                // Assemblare il card
                overlay.appendChild(name);
                card.appendChild(image);
                card.appendChild(overlay);
                
                // Aggiungere al grid
                galleryGrid.appendChild(card);
            });
        }

        // ===== EFFETTI GLOBALI DI APPARIZIONE =====
        
        // Effetto reveal al caricamento della pagina
        function initPageLoadAnimation() {
            const title = document.querySelector('.title');
            if (title) {
                title.style.opacity = '0';
                title.style.transform = 'translateY(-40px) scale(0.9)';
                title.style.letterSpacing = '10px';
                
                // Trigger animation after a small delay
                setTimeout(() => {
                    title.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0) scale(1)';
                    title.style.letterSpacing = '0';
                }, 100);
            }
        }
        
        // Funzione universale per reveal animation
        function initRevealAnimations() {
            const revealElements = document.querySelectorAll(
                '.hero-hybrid, .hero-footer, .bento-section, .bento-item, .title, .card, .team-minimal-bold, .member-row, #contact, .massive-btn, .footer-meta'
            );
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const delay = index * 0.1;
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(40px)';
                        
                        setTimeout(() => {
                            entry.target.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, delay * 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            revealElements.forEach(el => observer.observe(el));
        }
        
        // Effetto scroll-trigger per bento items
        function initBentoTilt() {
            const bentoItems = document.querySelectorAll('.bento-item');
            
            bentoItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = 'none';
                });
            });
        }
        
        // Effetto hover su team members
        function initTeamMembersEffect() {
            const members = document.querySelectorAll('.member-row');
            
            members.forEach(member => {
                member.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = 'rgba(131, 156, 196, 0.1)';
                    this.style.paddingLeft = '40px';
                    this.style.transform = 'translateX(10px)';
                });
                
                member.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                    this.style.paddingLeft = '0';
                    this.style.transform = 'translateX(0)';
                });
            });
        }
        
        // ===== EFFETTI FOOTER =====
        
        // Effetto reveal al scroll
        function initFooterRevealEffect() {
            const footer = document.getElementById('contact');
            if (!footer) return;
            
            const footerElements = footer.querySelectorAll('h2, .massive-btn, .footer-meta');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(30px)';
                        
                        setTimeout(() => {
                            entry.target.style.transition = 'all 0.8s ease-out';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, 50);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            footerElements.forEach(el => observer.observe(el));
        }
        
        // Effetto interattivo sul pulsante
        function initFooterButtonEffects() {
            const btn = document.querySelector('.massive-btn');
            if (!btn) return;
            
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) translateY(-5px)';
                this.style.textShadow = '0 10px 20px rgba(38, 89, 166, 0.3)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0)';
                this.style.textShadow = 'none';
            });
            
            btn.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.background = 'rgba(38, 89, 166, 0.6)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.pointerEvents = 'none';
                ripple.style.animation = 'footerRipple 0.6s ease-out';
                
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        }
        
        // Effetto parallax testo footer
        function initFooterParallax() {
            const footer = document.getElementById('contact');
            if (!footer) return;
            
            const h2 = footer.querySelector('h2');
            if (!h2) return;
            
            window.addEventListener('scroll', () => {
                const rect = footer.getBoundingClientRect();
                const scrollPos = window.scrollY;
                const offset = (scrollPos - (footer.offsetTop - window.innerHeight)) * 0.1;
                
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    h2.style.transform = `translateY(${offset}px)`;
                }
            });
        }
        
        // Effetto hover metadata
        function initFooterMetaEffect() {
            const metaItems = document.querySelectorAll('.footer-meta p');
            
            metaItems.forEach(item => {
                item.style.transition = 'all 0.3s ease-out';
                
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(10px)';
                    this.style.color = 'var(--sapphire)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                    this.style.color = 'inherit';
                });
            });
        }

        // Chiamare la funzione quando il DOM è pronto
        document.addEventListener('DOMContentLoaded', () => {
            createCards();
            initPageLoadAnimation();
            initRevealAnimations();
            initBentoTilt();
            initTeamMembersEffect();
            initFooterRevealEffect();
            initFooterButtonEffects();
            initFooterParallax();
            initFooterMetaEffect();
            
            // Aggiungere animazione ripple al CSS dinamicamente
            const style = document.createElement('style');
            style.textContent = `
                @keyframes footerRipple {
                    from {
                        width: 20px;
                        height: 20px;
                        opacity: 1;
                    }
                    to {
                        width: 200px;
                        height: 200px;
                        opacity: 0;
                    }
                }
                
                * {
                    transition: all 0.3s ease-out;
                }
            `;
            document.head.appendChild(style);
        });