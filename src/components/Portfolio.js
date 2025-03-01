import { useState } from "react";
import Image from "next/image";

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
    <div className="container">
      <h2 className="heading">SELECT THE CUSTOM TEMPLATE FOR YOUR CLINIC</h2>
      <div className="template-list">
        {templates.map((template, index) => (
          <div key={index} className={`template ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="laptop">
              <Image
                src="/img/portfolio/laptop-cover.png"
                alt="Laptop Frame"
                width={500}
                height={350}
                className="laptop-frame"
              />
              {playingIndex === index ? (
                <iframe
                  className="video"
                  src={`${template.videoUrl}&autoplay=1&mute=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="thumbnail" onClick={() => setPlayingIndex(index)}>
                  <Image
                    src="/img/portfolio/laptop-thumbnail.png"
                    alt="Video Thumbnail"
                    width={373}
                    height={220}
                    className="thumbnail-img"
                  />
                  <div className="overlay">
                    <span className="play-button">▶</span>
                  </div>
                </div>
              )}
            </div>
            <div className="template-info">
              <h3>TEMPLATE CODE</h3>
              <div className="template-code">{template.code}</div>
              <p>Enhance your clinic with a tailored digital experience.</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 40px;
          background-color: #f9f9f9;
        }
        .heading {
          color: #FF5722;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 40px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .template-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }
        .template {
          display: flex;
          align-items: center;
          width: 80%;
          max-width: 900px;
          justify-content: space-between;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .left {
          flex-direction: row;
        }
        .right {
          flex-direction: row-reverse;
        }
        .laptop {
          position: relative;
          width: 500px;
          height: 350px;
        }
        .laptop-frame {
          width: 100%;
          height: auto;
        }
        .thumbnail, .video {
          position: absolute;
          width: 74.5%;
          height: 62.8%;
          top: 4.5%;
          left: 13.5%;
          object-fit: cover;
          border-radius: 4px;
        }
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .overlay:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        .play-button {
          font-size: 32px;
          color: white;
        }
        .template-info {
          text-align: left;
          max-width: 250px;
        }
        .template-info h3 {
          color: #9c6000;
          font-weight: bold;
        }
        .template-code {
          background: #fff;
          border: 2px solid gray;
          padding: 6px 16px;
          font-weight: bold;
          font-size: 23px;
          text-align: center;
          color: rgb(128, 83, 5);
          width: fit-content;
          min-width: 150px;
          font-family: "Arial", sans-serif;
        }
        p {
          font-size: 14px;
          color: #333;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .template {
            flex-direction: column !important;
            align-items: center;
          }
          .laptop {
            width: 400px;
            height: 300px;
          }
          .thumbnail, .video {
            width: 75%;
            height: 80%;
            top: 0;
            left: 12.5%;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoSection;
