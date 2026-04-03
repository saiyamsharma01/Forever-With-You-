// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.premium-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Force styling for this setup
            if (window.scrollY < 5) {
                // optional transparency logic
            }
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px"
    };

    const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animateOnScrollObserver.observe(el);
    });

    // Fetch and render Dynamic Notes
    const notesContainer = document.getElementById('notesContainer');
    if (notesContainer) {
        fetch('/api/notes')
            .then(res => res.json())
            .then(notes => {
                notesContainer.innerHTML = '';
                notes.forEach((note, index) => {
                    const box = document.createElement('div');
                    box.className = `note-box animate-on-scroll delay-${(index % 3) + 1}`;
                    box.innerHTML = `
                        <span class="quote-mark">"</span>
                        <p>${note.text}</p>
                    `;
                    notesContainer.appendChild(box);
                    animateOnScrollObserver.observe(box);
                });
            })
            .catch(err => console.error("Could not fetch notes:", err));
    }

    // Fetch and render Masonry Gallery
    const masonryGallery = document.getElementById('masonryGallery');
    if (masonryGallery) {
        fetch('/api/gallery')
            .then(res => res.json())
            .then(photos => {
                masonryGallery.innerHTML = '';
                photos.forEach((photo, idx) => {
                    const item = document.createElement('div');
                    item.className = `gallery-item animate-on-scroll delay-${(idx % 3) + 1}`;
                    item.innerHTML = `
                        <img src="${photo.url}" alt="${photo.caption}" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x1000?text=Please+Place+Images+In+Static/Images';">
                        <div class="img-caption">${photo.caption}</div>
                    `;
                    masonryGallery.appendChild(item);
                    animateOnScrollObserver.observe(item);
                });
            })
            .catch(err => console.error("Could not fetch gallery:", err));
    }
    
    // WhatsApp contact form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            
            const cravingSelectElement = form.querySelector('#cravingType');
            const cravingSelect = cravingSelectElement ? cravingSelectElement.value : 'A Surprise';
            const nameInput = form.querySelector('#senderName') ? form.querySelector('#senderName').value : form.querySelector('input[type="text"]').value;
            const messageInput = form.querySelector('#funnyDemands') ? form.querySelector('#funnyDemands').value : form.querySelector('textarea').value;
            const originalText = btn.innerHTML;
            
            // Exact phone number requested by user
            const phoneNumber = "916239709216";
            const textMessage = encodeURIComponent(`🚨 *GIRLFRIEND EMERGENCY ALERT* 🚨\n\n*Mood:* ${nameInput}\n*Craving/Demand:* ${cravingSelect}\n*Details:* ${messageInput}\n\n_Please fulfill this request immediately to avoid consequences!_`);
            
            window.open(`https://wa.me/${phoneNumber}?text=${textMessage}`, '_blank');
            
            btn.innerHTML = `<i class="fas fa-check"></i> Request Sent! 🏃‍♂️💨`;
            btn.style.background = '#10b981'; // Green
            btn.style.borderColor = '#10b981';
            btn.style.color = '#fff';
            form.reset();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style = '';
            }, 3000);
        });
    }

    // FUNNY RUNAWAY BUTTON LOGIC
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    if (btnYes) {
        btnYes.addEventListener('mouseover', function(e) {
            // Random movement logic to run away
            const containerMaxX = 250;
            const containerMaxY = 100;
            
            const randomX = Math.floor(Math.random() * containerMaxX * 2) - containerMaxX;
            const randomY = Math.floor(Math.random() * containerMaxY * 2) - containerMaxY;
            
            btnYes.style.transform = `translate(calc(-50% + ${randomX}px), ${randomY}px)`;
            
            const funnyTexts = ["Can't click me!", "Nope!", "Haha too slow!", "Not an option!", "Try again!"];
            btnYes.innerText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
        });
        
        btnYes.addEventListener('click', function(e) {
            e.preventDefault();
            alert("No! You are definitely not mad! 😂");
        });
    }

    if (btnNo) {
        btnNo.addEventListener('click', function(e) {
            btnNo.innerText = "YAY! I love you! 🎉";
            btnNo.style.transform = "translateX(-50%) scale(1.1)";
            
            if (btnYes) {
                btnYes.style.display = "none";
            }
            
            if (typeof confetti !== "undefined") {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ec4899', '#fbcfe8', '#be185d']
                });
            }
            createHearts(30);
        });
    }

    function createHearts(num) {
        const container = document.getElementById('hearts-container');
        if (!container) return;
        
        for (let i = 0; i < num; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                const emojis = ['❤️', '💖', '💕', '🥰', '😍'];
                heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
                container.appendChild(heart);
                
                setTimeout(() => { heart.remove(); }, 5000);
            }, i * 150);
        }
    }
});
