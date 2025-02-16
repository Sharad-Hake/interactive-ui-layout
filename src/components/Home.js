import React, { useState } from 'react';
import styles from './Home.module.css';
import Footer from './Footer';
import centralTexasImg from '../assets/Central_Texas1.png';
import exploreFishingImg from '../assets/Explore_Fly_Fishing.png';
import johnStoryImg from '../assets/John_Story.png';
import journeyImg from '../assets/The Journey.png';
import catchDayImg from '../assets/Catch_Day.png';
import troutTalesImg from '../assets/Trout_Tales.png';

const stories = [
  {
    id: 1,
    title: "John's Story",
    image: johnStoryImg,
    description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
  },
  {
    id: 2,
    title: "The Journey",
    image: journeyImg,
    description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
  {
    id: 3,
    title: "Catch Day",
    image: catchDayImg,
    description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
  },
  {
    id: 4,
    title: "Trout Tales",
    image: troutTalesImg,
    description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
  }
];

const Home = () => {
  const [expandedOption, setExpandedOption] = useState(null);

  const options = [
    {
      title: 'Explore Fly Fishing',
      image: exploreFishingImg,
      description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc'
    },
    {
      title: 'Fly Fishing Experiences',
      image: exploreFishingImg,
      description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc'
    },
    {
      title: 'Gear Up and Catch More',
      image: exploreFishingImg,
      description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc'
    }
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Central Texas<br />
                Fly Fishing
              </h1>
              <p className={styles.heroDescription}>
                At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
                cursus vestibulum, facilisi ac, sed faucibus.
              </p>
              <button className={styles.button}>Get started</button>
            </div>
            <div className={styles.heroImage}>
              <img 
                src={centralTexasImg} 
                alt="Central Texas Fly Fishing"
                className={styles.mainImage} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured options</h2>
          <div className={styles.expandableList}>
            {options.map((option) => (
              <div 
                key={option.title} 
                className={styles.expandableItem}
              >
                <div 
                  className={styles.expandableHeader}
                  onClick={() => setExpandedOption(expandedOption === option.title ? null : option.title)}
                >
                  <span>{option.title}</span>
                  <span className={expandedOption === option.title ? styles.minus : styles.plus}>
                    {expandedOption === option.title ? '−' : '+'}
                  </span>
                </div>  
                
                {expandedOption === option.title && (
                  <div className={styles.expandableContent}>
                    <img 
                      src={option.image} 
                      alt={option.title}
                      className={styles.cardImage} 
                    />
                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>{option.title}</h3>
                      <p className={styles.cardDescription}>{option.description}</p>
                      <button className={styles.secondaryButton}>Learn more</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.storiesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Member stories</h2>
          <div className={styles.storiesGrid}>
            {stories.map((story) => (
              <div key={story.id} 
              className={styles.storyCard}
              >
                <div className={styles.storyImageCard}>
                <img
                    src={story.image}
                    alt={story.title}
                    className={styles.storyImage}
                  />
                  </div>
                  <div className={styles.storyContentCard}>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <p className={styles.storyDescription}>{story.description}</p>
                  <button className={styles.storyButton}>Read more</button>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 