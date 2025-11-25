# Implementation Plan

- [x] 1. Modify WelcomeLetters component to calculate DPR-normalized viewport width





  - Update the `useMemo` hook to calculate DPR and logical viewport width
  - Replace `window.innerWidth` with `physicalWidth / dpr` in breakpoint calculations
  - Add fallback for undefined DPR (default to 1.0)
  - Add fallback for SSR scenario (window undefined)
  - _Requirements: 1.1, 1.5, 2.4_

- [x] 1.1 Write unit tests for specific device configurations


  - Test Pixel 8a (1080px width, DPR 2.6) calculates correct logical width
  - Test Samsung S23 (2340px width, DPR 3.0) calculates correct logical width
  - Test Dell G7 (1920px width, DPR 1.0-1.5) calculates correct logical width
  - Test edge cases: DPR undefined, DPR = 0, very high DPR (4.0+)
  - Test SSR scenario with window undefined
  - _Requirements: 1.2, 1.3, 1.4_


- [x] 1.2 Write property test for logical width calculation

  - **Property 1: Logical width calculation**
  - **Validates: Requirements 1.1, 1.5, 2.4**
  - Generate random physical widths (320-3840px) and DPR values (1.0-4.0)
  - Verify logicalWidth === physicalWidth / dpr for all combinations
  - Configure test to run minimum 100 iterations
  - _Requirements: 1.1, 1.5, 2.4_

- [x] 1.3 Write property test for consistent scaling


  - **Property 2: Consistent scaling for equivalent logical widths**
  - **Validates: Requirements 2.1, 2.3**
  - Generate pairs of (width, dpr) that produce same logical width
  - Verify SCALE, OFFSET_X, OFFSET_Y are identical for both pairs
  - Configure test to run minimum 100 iterations
  - _Requirements: 2.1, 2.3_

- [x] 2. Verify fix on reported problem devices





  - Test on Android Pixel 8a simulator/device (1080 x 2400, DPR ~2.6)
  - Test on Samsung S23 simulator/device (2340 x 1080, DPR ~3.0)
  - Test on Windows Dell G7 or similar (1920 x 1080, DPR ~1.0-1.5)
  - Verify all letters are visible and properly aligned
  - Verify animations still work smoothly
  - _Requirements: 1.2, 1.3, 1.4, 3.1, 3.2_

- [x] 3. Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.
