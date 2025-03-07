import { useState, useRef, useEffect } from "react";
import styles from "./Portfolio.module.css";

const VideoSection = () => {
  const templates = [
    { code: "REGOCLIN032501", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032502", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032503", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032504", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032505", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" }
  ];

  const [playingIndex, setPlayingIndex] = useState(null);
  const videoContainerRefs = useRef([]);

  // Set up refs for each video container
  useEffect(() => {
    videoContainerRefs.current = videoContainerRefs.current.slice(0, templates.length);
  }, [templates.length]);

  // Handle mouse enter - start playing video
  const handleMouseEnter = (index) => {
    setPlayingIndex(index);
  };

  // Handle mouse leave - stop playing video
  const handleMouseLeave = () => {
    setPlayingIndex(null);
  };

  // Handle video click - enter fullscreen
  const handleVideoClick = (index, event) => {
    // Get the dimensions of the video container
    const container = videoContainerRefs.current[index];
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate the center area (middle 50% of width and height)
    const centerX = rect.left + width / 4;
    const centerY = rect.top + height / 4;
    const centerWidth = width / 2;
    const centerHeight = height / 2;
    
    // Check if click was in the center area
    if (
      event.clientX >= centerX && 
      event.clientX <= centerX + centerWidth &&
      event.clientY >= centerY && 
      event.clientY <= centerY + centerHeight
    ) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) { /* Safari */
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { /* IE11 */
        container.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SELECT THE CUSTOM TEMPLATE FOR YOUR CLINIC</h2>
      <div className={styles.templateList}>
        {templates.map((template, index) => (
          <div key={index} className={`${styles.template} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div 
              className={styles.videoContainer}
              ref={el => videoContainerRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => playingIndex === index && handleVideoClick(index, e)}
              style={{ cursor: playingIndex === index ? 'pointer' : 'default' }}
            >
              {playingIndex === index ? (
                <>
                  <iframe
                    className={styles.video}
                    src={`${template.videoUrl}&autoplay=1&mute=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  ></iframe>
                  <div 
                    className={styles.centerClickArea}
                    style={{
                      position: 'absolute',
                      top: '25%',
                      left: '25%',
                      width: '50%',
                      height: '50%',
                      zIndex: 10,
                      cursor: 'pointer',
                      background: 'transparent'
                    }}
                  />
                </>
              ) : (
                <div className={styles.thumbnail}>
                  <div className={styles.overlay}>
                    <span className={styles.playButton}>▶</span>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.templateInfo}>
              <h3>TEMPLATE CODE</h3>
              <div className={styles.templateCode}>{template.code}</div>
              <p>Enhance your clinic with a tailored digital experience.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;