    (function() {
      const banner = document.getElementById('cookie-consent-banner');
      const acceptBtn = document.getElementById('accept-cookies-btn');
      const consentKey = 'cookieConsentGiven';

      // Check if consent already given
      function hasConsent() {
        // Using localStorage for simplicity
        return localStorage.getItem(consentKey) === 'true';
      }

      // Show banner only if no consent found
      function showBanner() {
        banner.style.display = 'flex';
      }

      // Accept cookies handler
      function acceptCookies() {
        localStorage.setItem(consentKey, 'true');
        banner.style.display = 'none';
      }

      // Initialize on DOM ready
      document.addEventListener('DOMContentLoaded', function() {
        if (!hasConsent()) {
          showBanner();
        }
      });

      acceptBtn.addEventListener('click', acceptCookies);
    })();