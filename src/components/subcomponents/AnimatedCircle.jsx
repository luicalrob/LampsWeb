import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

export const AnimatedCircle = ({}) => {

  useEffect(() => {
    // Your animated circle logic using jQuery
    $('svg.radial-progress').each(function( index, value ) { 
      $(this).find($('circle.complete')).removeAttr('style');
    });

    const handleScroll = () => {
      $('svg.radial-progress').each(function( index, value ) {
        if (
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
          const percent = $(value).data('percentage');
          const radius = $(this).find($('circle.complete')).attr('r');
          const circumference = 2 * Math.PI * radius;
          const strokeDashOffset = circumference - ((percent * circumference) / 100);
          $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
        }
      });
    };

    // Attach scroll event listener
    $(window).on('scroll', handleScroll);

    // Trigger scroll event when component mounts
    $(window).trigger('scroll');

    // Cleanup on component unmount
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* {circles.map((circle, index) => ( */}
        <svg className={`radial-progress web-designer`} data-percentage='90' viewBox="0 0 80 80">
          <circle className="incomplete" cx="40" cy="40" r="35"></circle>
          <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: 2 * Math.PI * 35 * (1 - 90 / 100) }}></circle>
          <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
        </svg>
      {/* ))} */}
    </>
  );
};
