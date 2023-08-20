import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ImageGroup = ({ images, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to repeat the animation
    rootMargin: '-100px', // Adjust the rootMargin as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust the duration as needed
        ease: 'easeInOut', // Adjust the easing as needed
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-start mb-8"
    >
      <div className="flex mb-4">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 rounded-md mx-2 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-auto rounded-md"
            style={{ aspectRatio: '1/1', width: '100%', height: '100%' }}
          />
        </div>
      ))}
      </div>
      <p className="text-black text-xl mx-auto mt-4">{text}</p>
    </motion.div>
  );
};

const HomePage = () => {
  const imageGroups = [
   
    {
      images: [
        { src: '/dance.jpg', alt: 'dance' },
        { src: '/park.jpg', alt: 'park' },
      ],
      text: 'today is your day ✨',
    },
    {
      images: [
        { src: '/costco.jpg', alt: 'costco' },
        { src: '/park.JPG', alt: 'park' },
        { src: '/night.jpg', alt: 'night' },
      ],
      text: 'since that fateful day in grade 3 and through every stage thereafter, no matter how awkward 🙈',
    },
    {
      images: [
        { src: '/zoom.jpg', alt: 'zoom' },
        { src: '/mayo.jpg', alt: 'mayo' },
        { src: '/century.jpg', alt: 'century' },
      ],
      text: 'and whether or not we are in the down lows (e.g. AP season) ⛄️',
    },
    {
      images: [
        { src: '/quarry.jpg', alt: 'quarry' },
        { src: '/therapy.jpg', alt: 'therapy' },
      ],
      text: "we always come back to each other. and i so love doing life with you 🛣️",
    },
    {
      images: [
        { src: '/sing.jpg', alt: 'sing' },
        { src: '/concert.jpg', alt: 'concert' },
      ],
      text: 'thank you for making life fun with your radiant soul. love you to the stars and saturn and beyond 🪐🌌',
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-36">happy birthday, jenny yan 🎂</h1>
      <div className="flex items-center w-[70%] mx-auto rounded-md mb-52 ">
          <img
            src='/drive.jpg'
            alt='drive'
            className="object-cover rounded-md"
          />
        </div>
      <div className="w-3/4">
        {imageGroups.map((group, index) => (
          <div key={index} style={{ minHeight: '100vh' }}>
            <ImageGroup images={group.images} text={group.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;