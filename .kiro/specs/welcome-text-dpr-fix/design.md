# Design Document

## Overview

This design addresses the welcome text positioning issues caused by not accounting for Device Pixel Ratio (DPR) in the responsive breakpoint calculations. The solution modifies the `WelcomeLetters.jsx` component to calculate a DPR-normalized viewport width, ensuring consistent positioning across all devices regardless of their pixel density.

## Architecture

The fix is isolated to the `WelcomeLetters` component and does not require changes to parent components or the animation system. The architecture remains:

```
VideoAndWelcome.jsx (parent)
  └── WelcomeLetters.jsx (modified)
        └── GSAP animations (unchanged)
```

The key change is in the `useMemo` hook that calculates `OFFSET_X`, `OFFSET_Y`, and `SCALE` values based on viewport width.

## Components and Interfaces

### Modified Component: WelcomeLetters.jsx

**Current Implementation:**
```javascript
const w = typeof window !== 'undefined' ? window.innerWidth : 1440;
```

**New Implementation:**
```javascript
const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
const physicalWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
const w = physicalWidth / dpr; // Logical viewport width
```

**Interface:**
- Input: Browser window dimensions and DPR
- Output: Positioned and scaled letter elements
- Props: None (self-contained component)

## Data Models

### Viewport Calculation Model

```javascript
{
  dpr: number,              // Device pixel ratio (1.0 - 3.0+)
  physicalWidth: number,    // window.innerWidth in CSS pixels
  logicalWidth: number,     // physicalWidth / dpr
  OFFSET_X: number,         // Horizontal offset for letter group
  OFFSET_Y: number,         // Vertical offset for letter group
  SCALE: number             // Scaling factor for letter group
}
```

### Breakpoint Configuration

The existing breakpoint logic remains unchanged in structure, but operates on `logicalWidth` instead of `physicalWidth`:

- ≤ 385px: Mobile (very small)
- ≤ 425-440px: Mobile (standard)
- ≤ 480px: Mobile (large) with interpolation
- ≤ 900px: Tablet (md)
- ≤ 1024px: Tablet (lg)
- ≤ 1440px: Desktop (standard)
- ≤ 1536px: Desktop (xl)
- > 1536px: Desktop (2xl+)

## Co
rrectness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Property 1: Logical width calculation
*For any* combination of physical viewport width and device pixel ratio, the calculated logical width should equal the physical width divided by the DPR
**Validates: Requirements 1.1, 1.5, 2.4**

Property 2: Consistent scaling for equivalent logical widths
*For any* two combinations of (physical width, DPR) that produce the same logical width, the calculated SCALE, OFFSET_X, and OFFSET_Y values should be identical
**Validates: Requirements 2.1, 2.3**

## Error Handling

### DPR Unavailable
- Fallback to DPR = 1.0 if `window.devicePixelRatio` is undefined
- Ensures backward compatibility with older browsers

### Server-Side Rendering
- Default to physical width of 1440px and DPR of 1.0 during SSR
- Recalculate on client-side hydration

### Edge Cases
- DPR = 0 or negative: Clamp to minimum of 1.0
- Extremely high DPR (> 4.0): No special handling needed, formula works correctly
- Very small logical widths (< 320px): Existing mobile breakpoints handle this

## Testing Strategy

### Unit Tests

Unit tests will verify specific device configurations and edge cases:

1. **Specific Device Tests (Examples)**
   - Test Pixel 8a configuration (1080px, DPR 2.6)
   - Test Samsung S23 configuration (2340px, DPR 3.0)
   - Test Dell G7 configuration (1920px, DPR 1.0-1.5)
   - Verify calculated logical widths match expected values

2. **Edge Case Tests**
   - DPR = 0 or undefined (should fallback to 1.0)
   - Very high DPR (4.0+)
   - SSR scenario (window undefined)

### Property-Based Tests

Property-based tests will verify universal correctness across all input combinations using **fast-check** (JavaScript property testing library):

1. **Property 1: Logical Width Calculation**
   - Generate random physical widths (320-3840px)
   - Generate random DPR values (1.0-4.0)
   - Verify: `logicalWidth === physicalWidth / dpr`
   - Run 100+ iterations

2. **Property 2: Consistent Scaling**
   - Generate pairs of (width1, dpr1) and (width2, dpr2) where `width1/dpr1 === width2/dpr2`
   - Calculate layout parameters for both
   - Verify: `SCALE1 === SCALE2`, `OFFSET_X1 === OFFSET_X2`, `OFFSET_Y1 === OFFSET_Y2`
   - Run 100+ iterations

**Testing Requirements:**
- Each property-based test MUST be tagged with: `**Feature: welcome-text-dpr-fix, Property {number}: {property_text}**`
- Each property-based test MUST run a minimum of 100 iterations
- Use fast-check library for property-based testing
- Each correctness property MUST be implemented by a SINGLE property-based test

## Implementation Notes

### Performance Considerations
- DPR calculation happens once per component mount in `useMemo`
- No performance impact on animation or rendering
- Recalculates only when dependencies change (none in this case)

### Browser Compatibility
- `window.devicePixelRatio` supported in all modern browsers
- Fallback to 1.0 ensures compatibility with older browsers
- No polyfills required

### Maintenance
- Breakpoint values remain unchanged
- Future breakpoint adjustments work the same way
- DPR calculation is isolated and easy to modify if needed
