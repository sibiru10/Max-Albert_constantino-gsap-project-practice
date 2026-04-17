import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(cardRef.current, {
        y: 50,              
        opacity: 0,         
        duration: 0.7,      
        ease: "power3.out"  
      })
      .from(cardRef.current.children, {
        y: 20,              
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,       
        ease: "elastic.out"
      }, "-=0.3");          
      
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div style={styles.pageContainer}>
      <div ref={cardRef} style={styles.card}>
        <h2 style={styles.title}>GSAP Fade-Up</h2>
        <p style={styles.paragraph}>
          This card animated smoothly when the page loaded. Notice how the title, 
          this paragraph, and the button below appear one after another in a staggered sequence.
        </p>
        <button style={styles.button}>Explore More</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#e5e7eb',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  card: {
    backgroundColor: '#000000',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    maxWidth: '350px',
    textAlign: 'center',

  },
  title: {
    margin: '0 0 16px 0',
    color: '#ffffff',
    fontSize: '24px'
  },
  paragraph: {
    margin: '0 0 24px 0',
    color: '#ffffff',
    lineHeight: '1.6',
    fontSize: '15px'
  },
  button: {
    backgroundColor: '#ffd900',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  }
};

export default AnimatedCard;