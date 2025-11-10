# Design Document

## Overview

This design document outlines the transformation of the PostCaseStudy component from a static page to a dynamic, data-driven page that displays unique content based on URL parameters. The design follows the established pattern used in BlogDetail.jsx, ensuring consistency across the codebase while accommodating the more complex component structure of case studies.

## Architecture

### Component Structure

```
PostCaseStudy (Container Component)
├── useParams() hook - extracts :id from URL
├── caseStudies data object - stores all case study content
├── Case study lookup logic - retrieves data by id
├── Not Found UI - displays when id is invalid
└── Case Study Content Sections
    ├── Hero (video hero)
    ├── TitleWithDescription
    ├── StatsSection
    ├── FullScreenImage
    ├── GalleryWithText
    ├── SimpleHeadingText
    ├── FourGallery
    └── Section (from Home)
```

### Data Flow

1. User navigates to `/case-study/:id`
2. React Router passes the route to PostCaseStudy component
3. PostCaseStudy extracts `id` using `useParams()`
4. Component looks up `caseStudies[id]` from data object
5. If found: data is passed as props to child components
6. If not found: "Not Found" UI is rendered
7. Child components receive data and render with fallbacks for missing fields

### Routing Changes

**Current:**
```javascript
<Route path="case-study-post" element={<PostCaseStudy />} />
```

**New:**
```javascript
<Route path="case-study/:id" element={<PostCaseStudy />} />
```

## Components and Interfaces

### PostCaseStudy Component Interface

**Imports Required:**
```javascript
import { useParams } from 'react-router-dom';
```

**Component Structure:**
```javascript
const PostCaseStudy = () => {
  const { id } = useParams();
  
  const caseStudies = {
    // Data objects keyed by id
  };
  
  const caseStudy = caseStudies[id];
  
  if (!caseStudy) {
    return <NotFoundUI />;
  }
  
  return (
    <div>
      {/* Render sections with caseStudy data */}
    </div>
  );
};
```

### Child Component Props Mapping

Each child component already accepts props. The design maps case study data to these existing props:

**Hero Component:**
- Currently: No props (uses hardcoded video)
- Design Decision: Keep as-is since all case studies use the same demo video
- Future Enhancement: Add `videoSrc` prop to data object if different videos needed

**TitleWithDescription Component:**
- Props: `title` (string), `description` (array of strings)
- Data mapping: `caseStudy.titleSection.title`, `caseStudy.titleSection.description`

**StatsSection Component:**
- Props: `title`, `column1`, `column2`, `column3`
- Data mapping: `caseStudy.stats.title`, `caseStudy.stats.column1`, etc.
- Each column contains: `{ heading, value, description }` and optional `{ image: { src, alt } }`

**FullScreenImage Component:**
- Props: `src`, `alt`
- Data mapping: `caseStudy.fullScreenImage.src`, `caseStudy.fullScreenImage.alt`

**GalleryWithText Component:**
- Props: `heading`, `text`, `images` (array)
- Data mapping: `caseStudy.galleryWithText.heading`, `caseStudy.galleryWithText.text`, `caseStudy.galleryWithText.images`

**SimpleHeadingText Component:**
- Props: `heading`, `text` (array)
- Data mapping: `caseStudy.simpleHeadingText.heading`, `caseStudy.simpleHeadingText.text`

**FourGallery Component:**
- Props: `images` (array of 4 image objects)
- Data mapping: `caseStudy.fourGallery.images`

## Data Models

### Case Study Data Object Schema

```javascript
{
  id: number,
  // Basic metadata
  title: string,
  client: string,
  category: string,
  
  // Title section (TitleWithDescription component)
  titleSection: {
    title: string,
    description: [string, string, ...]
  },
  
  // Stats section (StatsSection component)
  stats: {
    title: string,
    column1: {
      heading: string,
      value: string,
      description: string
    },
    column2: {
      image: { src: string | null, alt: string },
      stat: {
        heading: string,
        value: string,
        description: string
      }
    },
    column3: {
      stat: {
        heading: string,
        value: string,
        description: string
      },
      image: { src: string | null, alt: string }
    }
  },
  
  // Full screen image (FullScreenImage component)
  fullScreenImage: {
    src: string | null,
    alt: string
  },
  
  // Gallery with text (GalleryWithText component)
  galleryWithText: {
    heading: string,
    text: string,
    images: [
      { src: string | null, alt: string },
      { src: string | null, alt: string },
      { src: string | null, alt: string }
    ]
  },
  
  // Simple heading text (SimpleHeadingText component)
  simpleHeadingText: {
    heading: string,
    text: [string, string, ...]
  },
  
  // Four gallery (FourGallery component)
  fourGallery: {
    images: [
      { src: string | null, alt: string },
      { src: string | null, alt: string },
      { src: string | null, alt: string },
      { src: string | null, alt: string }
    ]
  }
}
```

### Sample Case Study Data Objects

The implementation will include 3-5 unique case studies with varied content:

**Case Study 1: E-commerce Platform**
- Focus: 45% conversion increase
- Stats emphasize user engagement and sales metrics
- Images showcase product pages and checkout flow

**Case Study 2: Brand Refresh Campaign**
- Focus: Social media reach and brand awareness
- Stats emphasize impressions, engagement rate, follower growth
- Images showcase brand assets and campaign materials

**Case Study 3: Mobile App Launch**
- Focus: User acquisition and retention
- Stats emphasize downloads, daily active users, retention rate
- Images showcase app screens and user interface

**Case Study 4: Content Marketing Strategy** (Optional)
- Focus: Organic traffic and lead generation
- Stats emphasize traffic growth, lead conversion, content performance
- Images showcase content pieces and analytics

**Case Study 5: UGC Creator Campaign** (Optional)
- Focus: Authentic content and community engagement
- Stats emphasize content pieces created, engagement rate, ROI
- Images showcase creator content and campaign results

## Error Handling

### Not Found Scenario

When `caseStudies[id]` returns `undefined`:

```javascript
if (!caseStudy) {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <a 
            href="/case-studies" 
            className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            ← Back to Case Studies
          </a>
        </div>
      </div>
    </div>
  );
}
```

### Missing Data Handling

All child components already have default fallback values in their implementations:
- TitleWithDescription: Falls back to placeholder text
- StatsSection: Falls back to "30%" and placeholder descriptions
- FullScreenImage: Shows gray placeholder with icon
- GalleryWithText: Uses default images array
- SimpleHeadingText: Falls back to placeholder text
- FourGallery: Uses default images array

**Design Decision:** Leverage existing component fallbacks rather than adding additional null checks in PostCaseStudy. This keeps the container component clean and maintains component encapsulation.

## Testing Strategy

### Manual Testing Checklist

1. **Valid Case Study IDs**
   - Navigate to `/case-study/1`, `/case-study/2`, `/case-study/3`
   - Verify unique content displays for each
   - Verify all sections render correctly
   - Verify images load (or show placeholders)

2. **Invalid Case Study ID**
   - Navigate to `/case-study/999`
   - Verify "Not Found" message displays
   - Verify back link navigates to `/case-studies`

3. **Data Variations**
   - Verify different titles across case studies
   - Verify different stat values across case studies
   - Verify different descriptions across case studies
   - Verify image variations (some with src, some null)

4. **Component Fallbacks**
   - Test case study with missing optional fields
   - Verify components use default values
   - Verify no console errors or crashes

5. **Responsive Behavior**
   - Test on mobile, tablet, desktop viewports
   - Verify all sections remain responsive
   - Verify video controls work on all devices

6. **Navigation Integration**
   - Verify links from case studies listing page work
   - Verify browser back/forward buttons work
   - Verify direct URL entry works

### Edge Cases

1. **Non-numeric ID:** `/case-study/abc` - Should show not found
2. **Empty ID:** `/case-study/` - Should 404 or redirect
3. **Decimal ID:** `/case-study/1.5` - Should show not found
4. **Negative ID:** `/case-study/-1` - Should show not found

## Implementation Notes

### Code Organization

- Keep all case study data in PostCaseStudy.jsx (following BlogDetail pattern)
- Do not create separate data files at this stage
- Maintain existing component files without modifications
- Only modify: PostCaseStudy.jsx and route.jsx

### Content Guidelines

- Use realistic but varied statistics (avoid all "30%")
- Write unique, descriptive titles for each case study
- Vary description lengths (some short, some detailed)
- Use different stat categories (conversion, engagement, growth, etc.)
- Reference existing public folder images where appropriate
- Use null for images that don't exist yet (components handle this)

### Future Enhancements

- Move case study data to separate data file or CMS
- Add hero video variations per case study
- Add breadcrumb navigation
- Add related case studies section
- Add social sharing functionality
- Add case study metadata (date, duration, team size)
