const profiles = [
    {
        id: 1,
        name: 'Moretton Alessandro',
        role: 'Lead Developer',
        bio: 'Architetto del codice, appassionato di sistemi scalabili e performance al limite.',
        image: '/immagini/Moretton.png'
    },
    {
        id: 2,
        name: 'Lorenzo Del Puppo',
        role: 'UX Strategist',
        bio: 'Trasforma la complessità in interfacce intuitive che le persone adorano usare.',
        image: '/immagini/DelPuppo.png'
    },
    {
        id: 3,
        name: 'Alejandro Diaz Iacobucci',
        role: 'Full Stack Engineer',
        bio: 'Dal database al pixel: padroneggia ogni livello dello stack con eleganza.',
        image: '/immagini/Diaz.png'
    },
    {
        id: 4,
        name: 'Tonin Daniel',
        role: 'Cyber Security Specialist',
        bio: 'Trova le vulnerabilità prima che lo facciano gli altri. Pensa come un attaccante.',
        image: '/immagini/Tonin.png'
    },
    {
        id: 5,
        name: 'Martinello Alessio',
        role: 'SEO & Growth Hacker',
        bio: 'Porta i progetti in cima ai risultati. Dati, keyword e strategia pura.',
        image: '/immagini/Martinello.png'
    }
];

const container = document.getElementById("peoplecontainer");

    profiles.forEach(person => {
    const card = document.createElement("div");
    card.className = "card";

    // --- TOP (sempre visibile) ---
    const cardTop = document.createElement("div");
    cardTop.className = "card-top";

    const number = document.createElement("span");
    number.className = "card-number";
    number.textContent = `0${person.id}`;

    const label = document.createElement("span");
    label.className = "card-label";
    label.textContent = person.name;

    const plus = document.createElement("span");
    plus.className = "card-plus";
    plus.textContent = "+";

    cardTop.appendChild(number);
    cardTop.appendChild(label);
    cardTop.appendChild(plus);

    // --- PANEL (espandibile) ---
    const panel = document.createElement("div");
    panel.className = "card-panel";

    const img = document.createElement("img");
    img.src = person.image;
    img.alt = person.name;
    img.className = "card-img";

    const info = document.createElement("div");
    info.className = "card-info";

    const role = document.createElement("span");
    role.className = "card-role";
    role.textContent = person.role;

    const bio = document.createElement("p");
    bio.className = "card-bio";
    bio.textContent = person.bio;

    info.appendChild(role);
    info.appendChild(bio);
    panel.appendChild(img);
    panel.appendChild(info);

    card.appendChild(cardTop);
    card.appendChild(panel);
    container.appendChild(card);

    // Toggle: clic sull'intera riga top
    cardTop.addEventListener("click", () => {
        const isOpen = card.classList.toggle("card--open");
        plus.textContent = isOpen ? "−" : "+";
    });
});
        
        // Funzione per animazione typing del titolo lettere per lettere
        function initTitleTypingEffect() {
            const h1 = document.querySelector('.hero-hybrid h1');
            if (!h1) return;
            
            const originalHTML = h1.innerHTML;
            const text = h1.textContent;
            
            // Ricostruiamo con ogni carattere wrappato in uno span
            let newHTML = '';
            let charIndex = 0;
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalHTML;
            
            // Funzione ricorsiva per processare i nodi
            function processNode(node) {
                if (node.nodeType === 3) { // Text node
                    let html = '';
                    for (let i = 0; i < node.textContent.length; i++) {
                        const char = node.textContent[i];
                        html += `<span class="char" style="animation-delay: ${charIndex * 0.08}s">${char}</span>`;
                        charIndex++;
                    }
                    return html;
                } else if (node.nodeType === 1) { // Element node
                    if (node.tagName === 'BR') {
                        return '<br>';
                    }
                    let html = `<${node.tagName} class="${node.className}">`;
                    for (let child of node.childNodes) {
                        html += processNode(child);
                    }
                    html += `</${node.tagName}>`;
                    return html;
                }
                return '';
            }
            
            newHTML = processNode(tempDiv) || originalHTML;
            h1.innerHTML = newHTML;
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
            setTimeout(() => {
                initTitleTypingEffect();
            }, 300);
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

        // Funzione per animazione typing del titolo progetti
        function initProjectsTitleTypingEffect() {
            const h1 = document.querySelector('.projects-hero h1');
            if (!h1) return;
            
            const originalHTML = h1.innerHTML;
            const text = h1.textContent;
            
            // Ricostruiamo con ogni carattere wrappato in uno span
            let newHTML = '';
            let charIndex = 0;
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalHTML;
            
            // Funzione ricorsiva per processare i nodi
            function processNode(node) {
                if (node.nodeType === 3) { // Text node
                    let html = '';
                    for (let i = 0; i < node.textContent.length; i++) {
                        const char = node.textContent[i];
                        html += `<span class="char" style="animation-delay: ${charIndex * 0.08}s">${char}</span>`;
                        charIndex++;
                    }
                    return html;
                } else if (node.nodeType === 1) { // Element node
                    if (node.tagName === 'BR') {
                        return '<br>';
                    }
                    let html = `<${node.tagName} class="${node.className}">`;
                    for (let child of node.childNodes) {
                        html += processNode(child);
                    }
                    html += `</${node.tagName}>`;
                    return html;
                }
                return '';
            }
            
            newHTML = processNode(tempDiv) || originalHTML;
            h1.innerHTML = newHTML;
        }
        
        // Chiamare la funzione quando il DOM è pronto
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                initProjectsTitleTypingEffect();
            }, 300);
        });