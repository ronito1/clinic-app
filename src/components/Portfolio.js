import { useState } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const VideoSection = () => {
  const templates = [
    { code: "REGOCLIN032501", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032502", videoUrl: "https://www.youtube.com/embed/ae05k9e_zFc?si=yJFrPEwOOYIBMkkP" },
    { code: "REGOCLIN032503", videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { code: "REGOCLIN032504", videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
    { code: "REGOCLIN032505", videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk" }
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SELECT THE CUSTOM TEMPLATE FOR YOUR CLINIC</h2>
      <div className={styles.templateList}>
        {templates.map((template, index) => (
          <div key={index} className={`${styles.template} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.laptop}>
              <Image
                src="/img/portfolio/laptop-cover.png"
                alt="Laptop Frame"
                width={500}
                height={350}
                className={styles.laptopFrame}
              />
              {playingIndex === index ? (
                <iframe
                  className={styles.video}
                  src={`${template.videoUrl}&autoplay=1&mute=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className={styles.thumbnail} onClick={() => setPlayingIndex(index)}>
                  <Image
                    src="/img/portfolio/laptop-thumbnail.png"
                    alt="Video Thumbnail"
                    width={373}
                    height={220}
                    className={styles.thumbnailImg}
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