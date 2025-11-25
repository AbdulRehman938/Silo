# Requirements Document

## Introduction

This feature addresses positioning issues with the animated welcome text on the home page across devices with varying Device Pixel Ratios (DPR). Currently, the welcome text appears misaligned on specific devices:
- Android Pixel 8a (1080 x 2400): entire welcome segment hidden behind image
- Android Samsung S23 (2340 x 1080): letter "C" is detached
- Windows Dell G7 17" (1920 x 1080): letter "W" is detached

The root cause is that the positioning logic uses `window.innerWidth` without accounting for DPR, causing incorrect calculations on high-DPR displays.

## Glossary

- **DPR (Device Pixel Ratio)**: The ratio between physical pixels and CSS pixels on a display
- **WelcomeLetters Component**: The React component that renders and animates the welcome text letters
- **BASE_LAYOUT**: The configuration array defining position, size, and rotation for each letter
- **OFFSET_X/OFFSET_Y**: Horizontal and vertical positioning adjustments applied to all letters
- **SCALE**: The scaling factor applied to the entire letter group

## Requirements

### Requirement 1

**User Story:** As a user on a high-DPR device, I want the welcome text to display correctly positioned, so that all letters are visible and properly aligned.

#### Acceptance Criteria

1. WHEN the WelcomeLetters component calculates positioning THEN the system SHALL incorporate device pixel ratio into the calculation
2. WHEN a user views the page on Android Pixel 8a (1080 x 2400, DPR ~2.6) THEN the system SHALL display all welcome letters visible and properly positioned
3. WHEN a user views the page on Samsung S23 (2340 x 1080, DPR ~3.0) THEN the system SHALL display the letter "C" attached and aligned with other letters
4. WHEN a user views the page on Windows Dell G7 17" (1920 x 1080, DPR ~1.0-1.5) THEN the system SHALL display the letter "W" attached and aligned with other letters
5. WHEN the system calculates layout parameters THEN the system SHALL use logical viewport width (physical width / DPR) instead of physical width

### Requirement 2

**User Story:** As a developer, I want the positioning logic to be maintainable and clear, so that future adjustments are straightforward.

#### Acceptance Criteria

1. WHEN calculating responsive breakpoints THEN the system SHALL use a normalized viewport width that accounts for DPR
2. WHEN the component initializes THEN the system SHALL log or expose the calculated DPR value for debugging purposes
3. WHEN breakpoint logic executes THEN the system SHALL apply consistent scaling across all DPR values
4. WHEN the viewport width is determined THEN the system SHALL compute it as `window.innerWidth / window.devicePixelRatio`

### Requirement 3

**User Story:** As a user on any device, I want the welcome text animation to work smoothly, so that the visual experience is not degraded.

#### Acceptance Criteria

1. WHEN DPR-aware positioning is applied THEN the system SHALL maintain the existing GSAP animation behavior
2. WHEN letters animate into position THEN the system SHALL preserve the drop order and timing
3. WHEN the component renders THEN the system SHALL not introduce visual jitter or layout shifts
4. WHEN the page loads THEN the system SHALL calculate positioning before the animation triggers
