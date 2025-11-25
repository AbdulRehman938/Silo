import { describe, it, expect } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { WelcomeLetters } from '../WelcomeLetters';

/**
 * Device verification tests for reported problem devices
 * Requirements: 1.2, 1.3, 1.4, 3.1, 3.2
 */
describe('WelcomeLetters - Device Verification', () => {
  const simulateDevice = (width, dpr) => {
    // Clean up any previous renders
    cleanup();
    
    // Set device properties before rendering
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    Object.defineProperty(window, 'devicePixelRatio', {
      writable: true,
      configurable: true,
      value: dpr,
    });
  };

  const getLayoutParams = (container) => {
    // Find the actual component container (has the scale transform)
    const componentContainer = container.querySelector('[style*="scale"]');
    if (!componentContainer) return null;

    const style = componentContainer.style;
    const scaleMatch = style.transform.match(/scale\(([\d.]+)\)/);
    const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;

    // Get first letter position to determine offsets
    const firstLetter = componentContainer.querySelector('.welcome-letter');
    if (!firstLetter) return null;

    const transformMatch = firstLetter.style.transform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
    if (!transformMatch) return null;

    return {
      scale,
      firstLetterX: parseFloat(transformMatch[1]),
      firstLetterY: parseFloat(transformMatch[2]),
      container: componentContainer,
    };
  };

  describe('Android Pixel 8a (1080 x 2400, DPR ~2.6)', () => {
    it('should display all welcome letters visible and properly positioned', () => {
      // Requirement 1.2
      simulateDevice(1080, 2.6);

      const { container } = render(<WelcomeLetters />);
      const letters = container.querySelectorAll('.welcome-letter');

      // Verify all 7 letters are rendered
      expect(letters.length).toBe(7);

      // Get layout parameters
      const params = getLayoutParams(container);
      expect(params).not.toBeNull();

      // Logical width = 1080 / 2.6 ≈ 415px
      // Should use mobile breakpoint (w <= 425)
      // Expected: OFFSET_X: -40, OFFSET_Y: 170, SCALE: 0.8
      expect(params.scale).toBeCloseTo(0.8, 1);
      
      // First letter 'W' should be at x: -45 + (-40) = -85
      expect(params.firstLetterX).toBeCloseTo(-85, 0);
      
      // First letter 'W' should be at y: -160 + 170 = 10
      expect(params.firstLetterY).toBeCloseTo(10, 0);

      // Verify all letters have valid positions (not hidden off-screen)
      letters.forEach((letter) => {
        const transform = letter.style.transform;
        expect(transform).toBeTruthy();
        expect(transform).toContain('translate');
      });
    });
  });

  describe('Samsung S23 (2340 x 1080, DPR ~3.0)', () => {
    it('should display letter "C" attached and aligned with other letters', () => {
      // Requirement 1.3
      simulateDevice(2340, 3.0);

      const { container } = render(<WelcomeLetters />);
      const letters = container.querySelectorAll('.welcome-letter');

      // Verify all 7 letters are rendered
      expect(letters.length).toBe(7);

      // Get layout parameters
      const params = getLayoutParams(container);
      expect(params).not.toBeNull();

      // Logical width = 2340 / 3.0 = 780px
      // Should use tablet breakpoint (w <= 900)
      // Expected: OFFSET_X: -45, OFFSET_Y: -200, SCALE: 1.25
      expect(params.scale).toBeCloseTo(1.25, 1);
      
      // First letter 'W' should be at x: -45 + (-45) = -90
      expect(params.firstLetterX).toBeCloseTo(-90, 0);
      
      // First letter 'W' should be at y: -160 + (-200) = -360
      expect(params.firstLetterY).toBeCloseTo(-360, 0);

      // Find letter 'C' (index 3 in BASE_LAYOUT)
      const letterC = letters[3];
      expect(letterC.textContent).toBe('c');
      
      // Letter 'C' base position: x: 0, y: -80
      // With offsets: x: 0 + (-45) = -45, y: -80 + (-200) = -280
      const cTransform = letterC.style.transform;
      expect(cTransform).toContain('translate(-45px, -280px)');
    });
  });

  describe('Windows Dell G7 17" (1920 x 1080, DPR ~1.0-1.5)', () => {
    it('should display letter "W" attached and aligned with other letters at DPR 1.0', () => {
      // Requirement 1.4
      simulateDevice(1920, 1.0);

      const { container } = render(<WelcomeLetters />);
      const letters = container.querySelectorAll('.welcome-letter');

      // Verify all 7 letters are rendered
      expect(letters.length).toBe(7);

      // Get layout parameters
      const params = getLayoutParams(container);
      expect(params).not.toBeNull();

      // Logical width = 1920 / 1.0 = 1920px
      // Should use 2xl+ breakpoint (w > 1536)
      // Expected: OFFSET_X: -30, OFFSET_Y: -180, SCALE: 2.3
      expect(params.scale).toBeCloseTo(2.3, 1);
      
      // First letter 'W' should be at x: -45 + (-30) = -75
      expect(params.firstLetterX).toBeCloseTo(-75, 0);
      
      // First letter 'W' should be at y: -160 + (-180) = -340
      expect(params.firstLetterY).toBeCloseTo(-340, 0);

      // Verify letter 'W' has proper transform
      const letterW = letters[0];
      expect(letterW.textContent).toBe('W');
      const wTransform = letterW.style.transform;
      expect(wTransform).toContain('translate(-75px, -340px)');
    });

    it('should display letter "W" attached and aligned with other letters at DPR 1.5', () => {
      // Requirement 1.4
      simulateDevice(1920, 1.5);

      const { container } = render(<WelcomeLetters />);
      const letters = container.querySelectorAll('.welcome-letter');

      // Verify all 7 letters are rendered
      expect(letters.length).toBe(7);

      // Get layout parameters
      const params = getLayoutParams(container);
      expect(params).not.toBeNull();

      // Logical width = 1920 / 1.5 = 1280px
      // Should use 1440 breakpoint (w <= 1440)
      // Expected: OFFSET_X: 0, OFFSET_Y: -160, SCALE: 2.0
      expect(params.scale).toBeCloseTo(2.0, 1);
      
      // First letter 'W' should be at x: -45 + 0 = -45
      expect(params.firstLetterX).toBeCloseTo(-45, 0);
      
      // First letter 'W' should be at y: -160 + (-160) = -320
      expect(params.firstLetterY).toBeCloseTo(-320, 0);

      // Verify letter 'W' has proper transform
      const letterW = letters[0];
      expect(letterW.textContent).toBe('W');
      const wTransform = letterW.style.transform;
      expect(wTransform).toContain('translate(-45px, -320px)');
    });
  });

  describe('Animation compatibility', () => {
    it('should maintain GSAP animation structure with DPR-aware positioning', () => {
      // Requirements 3.1, 3.2
      simulateDevice(1920, 1.5);

      const { container } = render(<WelcomeLetters />);
      const letters = container.querySelectorAll('.welcome-letter');

      // Verify all letters have the welcome-letter class for GSAP targeting
      letters.forEach((letter) => {
        expect(letter.classList.contains('welcome-letter')).toBe(true);
      });

      // Verify letters have will-change-transform for smooth animation
      letters.forEach((letter) => {
        expect(letter.classList.contains('will-change-transform')).toBe(true);
      });

      // Verify component container has proper transform origin for scaling
      const params = getLayoutParams(container);
      expect(params).not.toBeNull();
      expect(params.container.style.transformOrigin).toBe('center center');

      // Verify all 7 letters are present (animation targets)
      expect(letters.length).toBe(7);
    });
  });
});
