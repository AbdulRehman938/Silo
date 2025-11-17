import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import Hero from '../components/BlogDetail/Hero';
import NewsletterSubscription from '../components/BlogDetail/NewsletterSubscription';
import { LuTriangleRight } from 'react-icons/lu';

export default function BlogDetail() {
  const { id } = useParams();
  const contentContainerRef = useRef(null);
  const [subscriptionState, setSubscriptionState] = useState({
    email: '',
    isSubmitting: false,
    message: '',
    messageType: ''
  });

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Please enter a valid email address.',
        messageType: 'error'
      });
      return;
    }

    setSubscriptionState(prev => ({
      ...prev,
      isSubmitting: true,
      message: '',
      messageType: ''
    }));

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', email);
      
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Successfully subscribed to newsletter!',
        messageType: 'success'
      });
    } catch (error) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Failed to subscribe. Please try again.',
        messageType: 'error'
      });
    }
  };

  // Blog data matching the structure from Ramblings page
  const blogPosts = {
    1: {
      id: 1,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717286/rambling1_wotzmr.png",
      category: "UGC",
      readTime: "5 min read",
      title: "How to brief a UGC creator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: "Demo Author",
      publishDate: "12 Sept 2024",
      featuredImage: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717272/placeholderblog1_r8kl8d.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717274/placeholderblog2_vdiswn.png',
          alt: 'Placeholder project image showing example visuals',
          caption: 'Illustrative placeholder image — example project visuals'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Demo Author'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    },
    2: {
      id: 2,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717283/rambling2_dhai4t.png",
      category: "Animation",
      readTime: "5 min read",
      title: "Animation checklist for social media",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: "Demo Author",
      publishDate: "12 Sept 2024",
      featuredImage: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717272/placeholderblog1_r8kl8d.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717274/placeholderblog2_vdiswn.png',
          alt: 'Placeholder project image showing example visuals',
          caption: 'Illustrative placeholder image — example project visuals'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Michael Jordan'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    },
    3: {
      id: 3,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717283/rambling3_d95vxk.png",
      category: "Strategy",
      readTime: "5 min read",
      title: "The Death of \"Posting to Post\"",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: "Demo Author",
      publishDate: "12 Sept 2024",
      featuredImage: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717272/placeholderblog1_r8kl8d.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717274/placeholderblog2_vdiswn.png',
          alt: 'Placeholder project image showing example visuals',
          caption: 'Illustrative placeholder image — example project visuals'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Michael Jordan'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    },
    4: {
      id: 4,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717290/rambling4_buowhf.png",
      category: "Branding",
      readTime: "5 min read",
      title: "5 Things Every Brand Brief Should Include (But Rarely Does)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: "Demo Author",
      publishDate: "12 Sept 2024",
      featuredImage: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717272/placeholderblog1_r8kl8d.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717274/placeholderblog2_vdiswn.png',
          alt: 'Placeholder project image showing example visuals',
          caption: 'Illustrative placeholder image — example project visuals'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Michael Jordan'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    },
    5: {
      id: 5,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717288/rambling5_hcmdks.png",
      category: "Creators",
      readTime: "5 min read",
      title: "Meet the Creators: Stories from Our Network",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: "Demo Author",
      publishDate: "12 Sept 2024",
      featuredImage: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717272/placeholderblog1_r8kl8d.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717274/placeholderblog2_vdiswn.png',
          alt: 'Placeholder project image showing example visuals',
          caption: 'Illustrative placeholder image — example project visuals'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Michael Jordan'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    }
  };

  const blogPost = blogPosts[id];

  // Handle case where blog post is not found
  if (!blogPost) {
    return (
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
            <p className="text-black mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/ramblings" 
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              ← Back to Ramblings
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white mt-20 min-h-[20vh]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}

        {/* Hero Section */}
        <Hero blogPost={blogPost} />

        {/* Content Container - wraps all scrollable content */}
        <div ref={contentContainerRef}>
        {/* Introduction and Newsletter Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Left Column - Introduction Content (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {blogPost.content?.introduction?.title || 'Introduction'}
            </h2>
            <div className="space-y-4 text-black leading-relaxed">
              {blogPost.content?.introduction?.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )) || (
                <>
                  <p>
                    Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.
                  </p>
                  <p>
                    Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Newsletter Subscription (1/3 width) */}
          <div className="lg:col-span-1">
            <NewsletterSubscription 
              onSubmit={handleNewsletterSubmit}
              isSubmitting={subscriptionState.isSubmitting}
              message={subscriptionState.message}
              messageType={subscriptionState.messageType}
              containerRef={contentContainerRef}
            />
          </div>
        </div>

        {/* Content Image Section - Matches left column width */}
        {blogPost.content?.contentImage && (
          <div className="mt-12 lg:max-w-[66.666%]">
            <div className="bg-white aspect-video overflow-hidden flex items-center justify-center">
              <img
                src={blogPost.content.contentImage.src}
                alt={blogPost.content.contentImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {blogPost.content.contentImage.caption && (
              <p className="text-sm text-black mt-2 flex items-center gap-1">
                <span><LuTriangleRight className="text-black fill-black mx-1 rotate-90" size={16} /></span> {blogPost.content.contentImage.caption}
              </p>
            )}
          </div>
        )}

        {/* Additional Content Paragraphs */}
        <div className="mt-12 lg:max-w-[66.666%]">
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </p>
            <p>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        {blogPost.content?.quote && (
          <div className="mt-12 border border-black p-8 lg:max-w-[66.666%]">
            <blockquote className="text-lg md:text-xl text-black leading-relaxed mb-4">
              "{blogPost.content.quote.text}"
            </blockquote>
            {blogPost.content.quote.author && (
              <p className="text-sm text-black flex items-center gap-1">
                <span><LuTriangleRight className="text-black fill-black mx-1 rotate-90" size={16} /></span> {blogPost.content.quote.author}
              </p>
            )}
          </div>
        )}

        {/* Conclusion Section */}
        {blogPost.content?.conclusion && (
          <div className="mt-16 lg:max-w-[66.666%]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {blogPost.content.conclusion.title}
            </h2>
            <div className="space-y-4 text-black leading-relaxed">
              {blogPost.content.conclusion.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
        </div>
        {/* End Content Container */}
      </div>
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black mt-10" />
    </div>
  );
}