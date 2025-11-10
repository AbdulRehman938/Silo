# Implementation Plan

- [x] 1. Update routing configuration for dynamic case study URLs


  - Modify `src/routes/route.jsx` to change the case study route from `path="case-study-post"` to `path="case-study/:id"`
  - Verify the route is properly nested within the Layout wrapper
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_





- [ ] 2. Transform PostCaseStudy component to use dynamic routing
  - [x] 2.1 Add useParams import and extract id parameter


    - Import `useParams` from `react-router-dom` at the top of PostCaseStudy.jsx
    - Add `const { id } = useParams()` inside the component
    - _Requirements: 1.1, 3.1_

  - [ ] 2.2 Create case study data structure with 3-5 unique case studies
    - Define `caseStudies` object with numeric keys (1, 2, 3, 4, 5)
    - Create Case Study 1: E-commerce Platform with conversion-focused stats
    - Create Case Study 2: Brand Refresh Campaign with social media metrics
    - Create Case Study 3: Mobile App Launch with user acquisition stats
    - Create Case Study 4: Content Marketing Strategy with traffic/lead metrics

    - Create Case Study 5: UGC Creator Campaign with engagement metrics
    - Ensure each case study has unique titles, descriptions, stat values, and varied content
    - Follow the data schema from design.md with all required fields (titleSection, stats, fullScreenImage, galleryWithText, simpleHeadingText, fourGallery)
    - Use existing public folder images where appropriate, null for others
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3.2, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_



  - [ ] 2.3 Implement case study lookup and not-found handling
    - Add `const caseStudy = caseStudies[id]` to retrieve the specific case study
    - Implement conditional rendering: if `!caseStudy`, return Not Found UI
    - Create Not Found UI with heading, message, and back link to `/case-studies`
    - Style Not Found UI to match BlogDetail pattern (centered, clean layout)
    - _Requirements: 1.4, 3.3, 3.4_





  - [ ] 2.4 Update component JSX to pass case study data as props
    - Update TitleWithDescription to receive `title={caseStudy.titleSection.title}` and `description={caseStudy.titleSection.description}`
    - Update StatsSection to receive `title={caseStudy.stats.title}`, `column1={caseStudy.stats.column1}`, `column2={caseStudy.stats.column2}`, `column3={caseStudy.stats.column3}`
    - Update FullScreenImage to receive `src={caseStudy.fullScreenImage.src}` and `alt={caseStudy.fullScreenImage.alt}`
    - Update GalleryWithText to receive `heading={caseStudy.galleryWithText.heading}`, `text={caseStudy.galleryWithText.text}`, `images={caseStudy.galleryWithText.images}`
    - Update SimpleHeadingText to receive `heading={caseStudy.simpleHeadingText.heading}` and `text={caseStudy.simpleHeadingText.text}`

    - Update FourGallery to receive `images={caseStudy.fourGallery.images}`
    - Keep Hero component unchanged (no props needed)
    - _Requirements: 1.3, 1.5, 2.9, 3.5_

- [ ] 3. Verify implementation and test all scenarios
  - [x] 3.1 Test valid case study IDs

    - Navigate to `/case-study/1`, `/case-study/2`, `/case-study/3` in browser
    - Verify each displays unique content (different titles, stats, descriptions)
    - Verify all sections render correctly for each case study
    - Verify images display or show appropriate placeholders
    - _Requirements: 1.2, 1.3, 4.2, 4.3, 4.4, 4.5_


  - [ ] 3.2 Test invalid case study ID
    - Navigate to `/case-study/999` in browser
    - Verify "Case Study Not Found" message displays
    - Verify back link navigates to `/case-studies` page
    - Verify no console errors occur
    - _Requirements: 1.4, 3.4_

  - [ ] 3.3 Test component fallback behavior
    - Verify components handle null/missing image sources gracefully
    - Verify no crashes occur with missing optional data
    - Check browser console for any errors or warnings
    - _Requirements: 2.9_

  - [ ] 3.4 Test responsive behavior across devices
    - Test on mobile viewport (375px width)
    - Test on tablet viewport (768px width)
    - Test on desktop viewport (1440px width)
    - Verify all sections remain properly formatted
    - Verify video controls work on all viewport sizes
    - _Requirements: 1.3_
