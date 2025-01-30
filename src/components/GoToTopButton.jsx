import React, { useState, useEffect } from 'react';



const GoToTopButton = () => {
  // State to track if the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-5 right-5 p-3 bg-gray-600 text-white rounded-full shadow-lg'
      >
        ↑

      </button>
    )
  );
};

export default GoToTopButton;
