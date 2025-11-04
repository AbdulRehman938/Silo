import React from 'react'
import Section from '../components/Home/Section.jsx'

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
            Terms
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Effective date: April 3, 2023
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Heading 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Heading 2
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla ante nisi vitae. In aliquet 
                pellentesque semper leo vestibulum turpis sed bibendum diam. Tempor integer aliquam in vitae 
                mattis eget fringilla.
              </p>
              <p>
                Id, tristique elit, id quam quis ac diam, amet. Ut etiam suspendisse morbi aliquam faucibus eget 
                volutpat. Nisi, dictum quis mauris, at ut. Tellus aliquam enim urna etiam. Mauris posuere adipiscing 
                arcu amet, vitae nisi tellus tristique. In feugiat sapien varius id.
              </p>
            </div>
          </section>

          {/* Heading 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Heading 3
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in scelerisque mollis ut volutpat lectus velit, sed 
                auctor. Porttitor turpis arcu quis fusce augue etiam. Quis ut habitant diam et. Suscipit tristique risus, at 
                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquam sodales id sed ac scelerisque.
              </p>
              <p>
                Tristique orci consectetur nam posuere ornare leo metus, ultrices. Blandit duis ultrices vulputate morbi 
                feugiat orci placerat elit. Aliquam tellus lorem sed ac. Montes, sed mauris pellentesque faucibus 
                accumsan. Cursus viverra semper magna risus elementum faucibus molestie pellentesque. Arcu 
                ultrices sed mauris vestibulum.
              </p>
            </div>
          </section>

          {/* Heading 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Heading 4
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Morbi sed imperdiet in ipsum, adipiscing elit sit lectus. Tellus id scelerisque sed ultricies ultrices. Duis 
              est sit sed leo risus blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet 
              nulla purus habitasse.
            </p>
          </section>

          {/* Heading 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Heading 5
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Morbi sed imperdiet in ipsum, adipiscing elit sit lectus. Tellus id scelerisque sed ultricies ultrices. Duis 
              est sit sed leo risus blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet 
              nulla purus habitasse.
            </p>
            
            {/* Quote Block */}
            <blockquote className="border-l-4 border-gray-300 pl-4 sm:pl-6 py-2 my-6 sm:my-8">
              <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
                "Ipsum sit mattis nulla quam nulla. Gravida ut gravida ac enim mauris id. Non 
                pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem 
                tempor. Diam elit, orci, tincidunt aenean tempus."
              </p>
            </blockquote>
          </section>

          {/* Heading 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Heading 6
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Nunc sed faucibus bibendum feugiat sed malesuada tellus egestas condimentum mi massa. In tincidunt 
              pharetra consectetur sed quis facilisis metus. Etiam egestas in nec sed et. Quis lacinia sit et dictum 
              eget nibh tortor commodo cursus.
            </p>
          </section>
        </div>
      </div>
      
      {/* Section Component */}
      <Section />
    </div>
  )
}

export default Terms