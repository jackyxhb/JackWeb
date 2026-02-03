/**
 * JackWeb Theme Toggle
 * Dark/Light mode switcher with localStorage persistence
 * and prefers-color-scheme support
 */

(function () {
  const STORAGE_KEY = 'jackweb-theme';
  const THEME_ATTRIBUTE = 'data-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  /**
   * Get the user's current theme preference
   * 1. Check localStorage for saved preference
   * 2. Check system preference with prefers-color-scheme
   * 3. Default to dark theme
   */
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return LIGHT_THEME;
    }
    return DARK_THEME;
  }

  function getInitialTheme() {
    const stored = getStoredTheme();
    if (stored) {
      return stored;
    }
    return getSystemTheme();
  }

  /**
   * Set the theme on the HTML element and localStorage
   */
  function setTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeToggleIcon();
    dispatchThemeChangeEvent(theme);
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute(THEME_ATTRIBUTE);
    const newTheme = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
  }

  /**
   * Update the theme toggle button icon
   */
  function updateThemeToggleIcon() {
    const toggleButton = document.getElementById('theme-toggle-btn');
    if (!toggleButton) return;

    const sunIcon = toggleButton.querySelector('.icon-sun');
    const moonIcon = toggleButton.querySelector('.icon-moon');

    if (!sunIcon || !moonIcon) return;

    const current = document.documentElement.getAttribute(THEME_ATTRIBUTE);

    if (current === DARK_THEME) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-flex';
      toggleButton.setAttribute('aria-label', 'Switch to light mode');
    } else {
      sunIcon.style.display = 'inline-flex';
      moonIcon.style.display = 'none';
      toggleButton.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  /**
   * Dispatch custom event when theme changes
   */
  function dispatchThemeChangeEvent(theme) {
    const event = new CustomEvent('themechange', {
      detail: { theme: theme },
      bubbles: true,
      cancelable: false,
    });
    document.dispatchEvent(event);
  }

  /**
   * Listen for system theme preference changes
   */
  function setupSystemThemeListener() {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = (e) => {
      // Only auto-switch if user hasn't set a preference
      if (!getStoredTheme()) {
        setTheme(e.matches ? LIGHT_THEME : DARK_THEME);
      }
    };

    // Modern browsers support addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }
  }

  /**
   * Setup event listeners for theme toggle button
   */
  function setupThemeToggleButton() {
    const toggleButton = document.getElementById('theme-toggle-btn');
    if (!toggleButton) return;

    toggleButton.addEventListener('click', toggleTheme);

    // Keyboard accessibility
    toggleButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  /**
   * Initialize theme system
   */
  function init() {
    // Set initial theme
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute(THEME_ATTRIBUTE, initialTheme);

    // Setup UI
    updateThemeToggleIcon();
    setupThemeToggleButton();

    // Listen for system preference changes
    setupSystemThemeListener();

    // Emit initialization event
    dispatchThemeChangeEvent(initialTheme);
  }

  /**
   * Expose API for external use
   */
  window.JackWebTheme = {
    toggle: toggleTheme,
    set: setTheme,
    get: () => document.documentElement.getAttribute(THEME_ATTRIBUTE),
    isDark: () => document.documentElement.getAttribute(THEME_ATTRIBUTE) === DARK_THEME,
    isLight: () => document.documentElement.getAttribute(THEME_ATTRIBUTE) === LIGHT_THEME,
  };

  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
