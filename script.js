// =========================================
// VOICE OF DAUDKANDI - BANGLA ONLY SCRIPT
// =========================================

// Personality data for modal
const personalities = [
  {
    name: 'খন্দকার মোশতাক আহমদ',
    role: 'সাবেক রাষ্ট্রপতি',
    bio: 'বিতর্কিত রাজনৈতিক ভূমিকা থাকলেও তিনি বাংলাদেশের রাজনীতির ইতিহাসে এক গুরুত্বপূর্ণ নাম এবং দাউদকান্দির দশপাড়া গ্রামে তার জন্ম।'
  },
  {
    name: 'ড. খন্দকার মোশাররফ হোসেন',
    role: 'বরেণ্য রাজনীতিবিদ',
    bio: 'বরেণ্য রাজনীতিবিদ এবং আন্তর্জাতিক খ্যাতিসম্পন্ন ভূতত্ত্ববিদ। তিনি একাধিকবার গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের মন্ত্রী হিসেবে দায়িত্ব পালন করেছেন।'
  },
  {
    name: 'মেজর (অব.) মোহাম্মদ সুবিদ আলী ভূঁইয়া',
    role: 'বরেণ্য রাজনীতিবিদ',
    bio: 'তিনি সশস্ত্র বাহিনীর একজন বিশিষ্ট সদস্য ছিলেন এবং পরবর্তীতে রাজনীতিতে এসে সংসদ সদস্য হিসেবে দাউদকান্দির উন্নয়নে ভূমিকা রেখেছেন।'
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
