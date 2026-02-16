// =========================================
// VOICE OF DAUDKANDI - BANGLA ONLY SCRIPT
// =========================================

// Personality data for modal
const personalities = [
  {
    name: 'কাজী নজরুল ইসলাম',
    role: 'জাতীয় কবি',
    bio: 'দাউদকান্দিতে সময় কাটিয়েছেন এবং এখানে তাঁর অনেক রচনা সৃষ্টি করেছেন। বিদ্রোহী কবি হিসেবে পরিচিত নজরুল বাংলা সাহিত্যে এক অনন্য স্থান দখল করে আছেন।'
  },
  {
    name: 'অ্যাডভোকেট রফিক',
    role: 'মুক্তিযোদ্ধা ও আইনজীবী',
    bio: 'প্রখ্যাত মুক্তিযোদ্ধা যিনি দাউদকান্দির স্বাধীনতা সংগ্রামে অগ্রণী ভূমিকা পালন করেন। মুক্তিযুদ্ধের পর একজন সুবিচারক আইনজীবী হিসেবে খ্যাতি অর্জন করেন।'
  },
  {
    name: 'ডা. সালেহা বেগম',
    role: 'শিক্ষাবিদ',
    bio: 'গ্রামীণ শিক্ষা বিস্তারে অগ্রদূত এবং নারী শিক্ষার পথপ্রদর্শক। তাঁর প্রচেষ্টায় দাউদকান্দিতে নারী শিক্ষার হার উল্লেখযোগ্যভাবে বৃদ্ধি পায়।'
  }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
  
  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Gallery Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLightbox = document.getElementById('closeLightbox');
  
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });
  
  if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
  
  // Personality Modal
  const modalOverlay = document.getElementById('modalOverlay');
  const personModal = document.getElementById('personModal');
  const closeModal = document.getElementById('closeModal');
  const modalContent = document.getElementById('modalContent');
  
  document.querySelectorAll('.view-bio-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const person = personalities[index];
      if (person && modalContent) {
        modalContent.innerHTML = `
          <div class="modal-header">
            <h3>${person.name}</h3>
            <p class="role">${person.role}</p>
          </div>
          <div class="modal-text">
            <p>${person.bio}</p>
          </div>
        `;
        personModal.classList.add('active');
        modalOverlay.classList.add('active');
      }
    });
  });
  
  function closePersonModal() {
    personModal.classList.remove('active');
    modalOverlay.classList.remove('active');
  }
  
  if (closeModal) {
    closeModal.addEventListener('click', closePersonModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closePersonModal);
  }
  
  // Animated Counters
  const counters = document.querySelectorAll('.counter');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
  
  // Reveal on Scroll Animation
  const revealElements = document.querySelectorAll('.stat-card, .media-cat-card, .personality-card, .contribute-card, .timeline-event');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
