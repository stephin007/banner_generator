import { useState } from "react";

import "./App.css";

const BannerGenerator = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div className='blog-banner-container'>
      <div className='blog-banner-heading'>
        <h1>Blog Banner Generator</h1>
      </div>

      <div className='blog-banner-tools-main'>
        <div className='blog-banner-tools-text'>
          <label htmlFor='text'>Text:</label>
          <input
            type='text'
            id='text'
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className='blog-banner-tools-color'>
          <label htmlFor='color'>Text Color:</label>
          <input
            type='color'
            id='color'
            value={color}
            onChange={handleColorChange}
          />

          <div className='blog-banner-tools-bg-color'>
            <label htmlFor='backgroundColor'>Background Color:</label>
            <input
              type='color'
              id='backgroundColor'
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
          </div>
        </div>
      </div>
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
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default BannerGenerator;