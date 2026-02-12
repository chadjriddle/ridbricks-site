/**
 * ridbricks Website - Main JavaScript
 * Handles form validation, mobile menu, and UX enhancements
 */

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      nav.classList.remove('active');
    }
  });

  // Close menu when clicking a nav link
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// Form Validation and Enhancement
const form = document.getElementById('legoContactForm');

if (form) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const descriptionInput = document.getElementById('description');
  const photosInput = document.getElementById('photos');
  const photoPreview = document.getElementById('photoPreview');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // File size limit (5MB in bytes)
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  // Maximum number of files
  const MAX_FILES = 5;

  /**
   * Show error message for a form field
   */
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage && message) {
      errorMessage.textContent = message;
    }
  }

  /**
   * Clear error message for a form field
   */
  function clearError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
  }

  /**
   * Validate name field
   */
  function validateName() {
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name');
      return false;
    }
    clearError(nameInput);
    return true;
  }

  /**
   * Validate email field
   */
  function validateEmail() {
    const email = emailInput.value.trim();
    if (!email) {
      showError(emailInput, 'Please enter your email address');
      return false;
    }
    if (!emailRegex.test(email)) {
      showError(emailInput, 'Please enter a valid email address');
      return false;
    }
    clearError(emailInput);
    return true;
  }

  /**
   * Validate description field
   */
  function validateDescription() {
    if (!descriptionInput.value.trim()) {
      showError(descriptionInput, 'Please describe what you\'d like to sell');
      return false;
    }
    clearError(descriptionInput);
    return true;
  }

  /**
   * Validate file uploads
   */
  function validateFiles() {
    if (!photosInput.files.length) {
      // Photos are optional, so this is valid
      clearError(photosInput);
      return true;
    }

    // Check number of files
    if (photosInput.files.length > MAX_FILES) {
      showError(photosInput, `Please select no more than ${MAX_FILES} images`);
      return false;
    }

    // Check file sizes
    for (let i = 0; i < photosInput.files.length; i++) {
      const file = photosInput.files[i];
      if (file.size > MAX_FILE_SIZE) {
        showError(photosInput, 'Each file must be under 5MB');
        return false;
      }
    }

    clearError(photosInput);
    return true;
  }

  /**
   * Create preview for uploaded images
   */
  function createPhotoPreview() {
    // Clear existing preview
    photoPreview.innerHTML = '';

    if (!photosInput.files.length) {
      return;
    }

    Array.from(photosInput.files).forEach((file, index) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'file-preview-item';

        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = file.name;

        const fileName = document.createElement('div');
        fileName.className = 'file-name';
        fileName.textContent = file.name;

        const fileSize = document.createElement('div');
        fileSize.className = 'file-name';
        fileSize.style.fontSize = 'var(--font-size-sm)';
        fileSize.style.color = 'var(--color-text-light)';
        fileSize.textContent = formatFileSize(file.size);

        previewItem.appendChild(img);
        previewItem.appendChild(fileName);
        previewItem.appendChild(fileSize);

        photoPreview.appendChild(previewItem);
      };

      reader.readAsDataURL(file);
    });
  }

  /**
   * Format file size for display
   */
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  // Real-time validation on blur
  if (nameInput) {
    nameInput.addEventListener('blur', validateName);
  }

  if (emailInput) {
    emailInput.addEventListener('blur', validateEmail);
  }

  if (descriptionInput) {
    descriptionInput.addEventListener('blur', validateDescription);
  }

  // Photo preview on file selection
  if (photosInput) {
    photosInput.addEventListener('change', () => {
      validateFiles();
      createPhotoPreview();
    });
  }

  // Form submission validation
  form.addEventListener('submit', (e) => {
    // Set timestamp for unique submission
    const timestampField = document.getElementById('submission-time');
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isDescriptionValid = validateDescription();
    const areFilesValid = validateFiles();

    // If any validation fails, prevent submission
    if (!isNameValid || !isEmailValid || !isDescriptionValid || !areFilesValid) {
      e.preventDefault();

      // Scroll to first error
      const firstError = form.querySelector('.form-group.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Only prevent default for actual hash links (not just "#")
    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add loading state to form submission
if (form) {
  form.addEventListener('submit', (e) => {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton && !form.querySelector('.form-group.error')) {
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;
    }
  });
}
