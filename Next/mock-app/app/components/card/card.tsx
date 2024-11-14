'use client';

import { useEffect, useState } from 'react';
import styles from './card.module.css'; // Ensure you have a CSS module file for styling
import Image from 'next/image'; // Import Image from next/image

// Define types for better TypeScript support
type CardData = {
  id: number;
  imageSrc: string;
  title: string;
};

type CardComponentProps = {
  cards: CardData[];
};

const Card: React.FC<CardComponentProps> = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // Add resize logic here if needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (card: CardData) => {
    setCurrentCard(card);
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setCurrentCard(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            onClick={() => handleCardClick(card)}
          >
            <div className={styles.border}></div>
            {/* Using Image component from Next.js */}
            <Image 
              src={card.imageSrc} 
              alt={card.title} 
              width={400}  // You can customize the width as needed
              height={400} // You can customize the height as needed
              objectFit="cover" // Ensures the image covers the area, maintaining aspect ratio
            />
            <h1>{card.title}</h1>
          </div>
        ))}
      </div>

      {isOpen && currentCard && (
        <div id="cover" className={styles.cover}>
          <div id="open-content" className={`${styles.openContent} ${isOpen ? styles.open : ''}`}>
            <a href="#" onClick={handleCloseClick} className={styles.closeContent}>
              <span className={styles.x1}></span>
              <span className={styles.x2}></span>
            </a>
            {/* Using Image component for the open content as well */}
            <Image
              id="open-content-image"
              src={currentCard.imageSrc}
              alt="Open Content"
              width={800}  // You can customize the width as needed
              height={600} // You can customize the height as needed
              objectFit="cover" // Ensure the image maintains aspect ratio
            />
            <div className={styles.text}>
              <h1>{currentCard.title}</h1>
              <p>Your additional content goes here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
