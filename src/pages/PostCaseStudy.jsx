import Hero from '../components/poststudy/Hero'
import TitleWithDescription from '../components/poststudy/TitleWithDescription'
import StatsSection from '../components/poststudy/StatsSection'
import FullScreenImage from '../components/poststudy/FullScreenImage'
import GalleryWithText from '../components/poststudy/GalleryWithText'
import SimpleHeadingText from '../components/poststudy/SimpleHeadingText'
import FourGallery from '../components/poststudy/FourGallery'
import Section from '../components/Home/Section'

const PostCaseStudy = () => {
  return (
    <div className='w-full h-auto bg-white mb-20'>
      {/* Video Hero */}
      <Hero />
      
      {/* Modular Sections - Can be reordered as needed */}
      <TitleWithDescription 
        title="This job was pretty bloody cool."
        description={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Sed vel lectus eu nisi aliquam mollis quis vel magna."
        ]}
      />
      
      <StatsSection 
        title="A title for the stats section"
        column1={{
          heading: 'Short stats heading goes here',
          value: '30%',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }}
        column2={{
          image: { src: null, alt: 'Stats visualization' },
          stat: {
            heading: 'Short stats heading goes here',
            value: '30%',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        }}
        column3={{
          stat: {
            heading: 'Short stats heading goes here',
            value: '30%',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          image: { src: null, alt: 'Stats visualization' }
        }}
      />
      
      <FullScreenImage 
        src={null}
        alt="Case study showcase"
      />
      
      <GalleryWithText 
        heading="Short heading goes here"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
        images={[
          { src: null, alt: "Gallery 1" },
          { src: null, alt: "Gallery 2" },
          { src: null, alt: "Gallery 3" }
        ]}
      />
      
      <SimpleHeadingText 
        heading="Medium length section heading goes here"
        text={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Sed vel lectus eu nisi aliquam mollis quis vel magna. Integer euismod lacus luctus magna."
        ]}
      />
      
      <FourGallery 
        images={[
          { src: null, alt: "Gallery 1" },
          { src: null, alt: "Gallery 2" },
          { src: null, alt: "Gallery 3" },
          { src: null, alt: "Gallery 4" }
        ]}
      />
      <Section />
    </div>
  )
}

export default PostCaseStudy