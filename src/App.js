import { useState, useRef } from "react";

import "./App.css";

const BannerGenerator = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FDDF63");
  const bannerRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleDownload = () => {
    if (text) {
      const banner = bannerRef.current;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const bannerWidth = banner.offsetWidth;
      const bannerHeight = banner.offsetHeight;

      canvas.width = bannerWidth;
      canvas.height = bannerHeight;

      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "24px bold sans-serif";
      context.fillStyle = color;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, bannerWidth / 2, bannerHeight / 2);

      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "blog_banner.png";
      link.click();
    }
  };

  return (
    <div className='blog-banner-main-container'>
      <div className='blog-banner-container'>
        <div className='blog-banner-heading'>
          <p>
            Social Media Banner <span>Generator</span>
          </p>
        </div>

        <div className='blog-banner-tools-main'>
          <div className='blog-banner-tools-text'>
            <label htmlFor='text'>Text</label>
            <input
              type='text'
              id='text'
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className='blog-banner-tools-color'>
            <label htmlFor='color'>Text Color</label>
            <input
              type='color'
              id='color'
              value={color}
              onChange={handleColorChange}
            />
          </div>

          <div className='blog-banner-tools-bg-color'>
            <label htmlFor='backgroundColor'>Background Color</label>
            <input
              type='color'
              id='backgroundColor'
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
          </div>
        </div>
        <div className='blog-banner-preview' ref={bannerRef}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "200px",
              backgroundColor: backgroundColor,
              color: color,
              fontSize: "24px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            {text}
          </div>
        </div>
        <div className='blog-banner-download'>
          <button
            className='download-button'
            onClick={handleDownload}
            disabled={!text}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerGenerator;
