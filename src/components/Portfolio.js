import { useState, useRef, useEffect } from "react";
import styles from "./Portfolio.module.css";

// Extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Get thumbnail URL from video ID
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};

const VideoSection = () => {
  const templates = [
    { code: "REGOCLIN032501", videoUrl: "https://www.youtube.com/embed/jh5U5BnpGN8?si=NQ4rmAtx3AZcqwiK" },
    { code: "REGOCLIN032502", videoUrl: "https://www.youtube.com/embed/AKa2ABRRgPs?si=Hw6c2O0INdJD_D8_" },
    { code: "REGOCLIN032503", videoUrl: "https://www.youtube.com/embed/74DWwSxsVSs?si=KS0vcFxQqY4HZ94N" },
    { code: "REGOCLIN032504", videoUrl: "https://www.youtube.com/embed/-hVy_jxeMeA?si=0Nc9bu_b7hiJqNk-" },
    { code: "REGOCLIN032505", videoUrl: "https://www.youtube.com/embed/KqCUuvl1myg?si=wqhwmlldZZLSarPn" }
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
                  <div className={styles.centerClickArea} />
                </>
              ) : (
                <div className={styles.thumbnail}>
                  <img 
                    src={getYouTubeThumbnail(template.videoUrl)} 
                    alt={`Template ${template.code}`}
                    className={styles.thumbnailImage}
                  />
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