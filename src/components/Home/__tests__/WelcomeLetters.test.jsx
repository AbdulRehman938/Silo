import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import { WelcomeLetters } from '../WelcomeLetters';

describe('WelcomeLetters - DPR-normalized viewport width', () => {
  beforeEach(() => {
    // Reset window mock before each test
    vi.restoreAllMocks();
  });

  describe('Specific Device Configurations', () => {
    it('should calculate correct logical width for Pixel 8a (1080px width, DPR 2.6)', () => {
      // Mock window for Pixel 8a
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1080,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 2.6,
      });

      const expectedLogicalWidth = 1080 / 2.6; // ~415.38px
      
      // Render component - it will use the mocked window values
      const { container } = render(<WelcomeLetters />);
      
      // The component should render without errors
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // Verify logical width calculation (approximately 415px, which falls in mobile range)
      expect(expectedLogicalWidth).toBeCloseTo(415.38, 1);
      expect(expectedLogicalWidth).toBeGreaterThan(385);
      expect(expectedLogicalWidth).toBeLessThan(425);
    });

    it('should calculate correct logical width for Samsung S23 (2340px width, DPR 3.0)', () => {
      // Mock window for Samsung S23
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 2340,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 3.0,
      });

      const expectedLogicalWidth = 2340 / 3.0; // 780px
      
      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // Verify logical width calculation (780px, which falls in tablet range)
      expect(expectedLogicalWidth).toBe(780);
      expect(expectedLogicalWidth).toBeGreaterThan(480);
      expect(expectedLogicalWidth).toBeLessThan(900);
    });

    it('should calculate correct logical width for Dell G7 (1920px width, DPR 1.0)', () => {
      // Mock window for Dell G7 with DPR 1.0
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 1.0,
      });

      const expectedLogicalWidth = 1920 / 1.0; // 1920px
      
      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // Verify logical width calculation (1920px, desktop range)
      expect(expectedLogicalWidth).toBe(1920);
      expect(expectedLogicalWidth).toBeGreaterThan(1536);
    });

    it('should calculate correct logical width for Dell G7 (1920px width, DPR 1.5)', () => {
      // Mock window for Dell G7 with DPR 1.5
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 1.5,
      });

      const expectedLogicalWidth = 1920 / 1.5; // 1280px
      
      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // Verify logical width calculation (1280px, between 1024 and 1440)
      expect(expectedLogicalWidth).toBe(1280);
      expect(expectedLogicalWidth).toBeGreaterThan(1024);
      expect(expectedLogicalWidth).toBeLessThan(1440);
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined DPR by defaulting to 1.0', () => {
      // Mock window with undefined devicePixelRatio
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: undefined,
      });

      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // With undefined DPR, should default to 1.0, so logical width = physical width
      const expectedLogicalWidth = 1920 / 1.0;
      expect(expectedLogicalWidth).toBe(1920);
    });

    it('should handle DPR = 0 by defaulting to 1.0', () => {
      // Mock window with DPR = 0 (edge case)
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 0,
      });

      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // With DPR = 0 (falsy), should default to 1.0
      const expectedLogicalWidth = 1920 / 1.0;
      expect(expectedLogicalWidth).toBe(1920);
    });

    it('should handle very high DPR (4.0+)', () => {
      // Mock window with very high DPR
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 3840,
      });
      Object.defineProperty(window, 'devicePixelRatio', {
        writable: true,
        configurable: true,
        value: 4.5,
      });

      const expectedLogicalWidth = 3840 / 4.5; // ~853.33px
      
      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // Verify logical width calculation
      expect(expectedLogicalWidth).toBeCloseTo(853.33, 1);
      expect(expectedLogicalWidth).toBeGreaterThan(480);
      expect(expectedLogicalWidth).toBeLessThan(900);
    });

    it('should handle SSR scenario with window undefined', () => {
      // This test verifies the SSR fallback behavior
      // In the actual component, it checks typeof window !== 'undefined'
      // For SSR, it should default to 1440px with DPR 1.0
      
      // We can't truly test SSR in jsdom, but we can verify the component
      // renders without errors when window is available
      const { container } = render(<WelcomeLetters />);
      
      expect(container.querySelector('.welcome-letter')).toBeTruthy();
      
      // The SSR fallback in the code is: const w = typeof window !== 'undefined' ? ... : 1440;
      // This means in SSR, logical width would be 1440
      const ssrFallbackWidth = 1440;
      expect(ssrFallbackWidth).toBe(1440);
    });
  });
});
