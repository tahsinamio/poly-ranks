import React from "react";

const HomeImage = () => {
  return (
    <div>
      <div class="parallax-container">
        <div class="parallax">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "45% 50%",
              opacity: "1",
            }}
            src="/Visit_hero_campus_above.jpeg"
            alt="home_image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
