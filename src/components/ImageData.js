import React from "react";
import Image1 from "../assets/images/serviceImages/aqua_logo.png";
import Image2 from "../assets/images/serviceImages/bankofscotland.png";
import Image3 from "../assets/images/serviceImages/bip_logo.png";
import Image4 from "../assets/images/serviceImages/BM_Logo.png";
import Image5 from "../assets/images/serviceImages/Britannia_Logo.jpg";
import Image6 from "../assets/images/serviceImages/fluid_new.png";
import Image7 from "../assets/images/serviceImages/halifax.png";
import Image8 from "../assets/images/serviceImages/hsbc.jpg";
import Image9 from "../assets/images/serviceImages/lloyds.png";
import Image10 from "../assets/images/serviceImages/Marbles_Logo.png";
import Image11 from "../assets/images/serviceImages/MBNA_Logo.png";
import Image12 from "../assets/images/serviceImages/nationwide.png";
import Image13 from "../assets/images/serviceImages/novuna.png";
import Image14 from "../assets/images/serviceImages/opus_logo.png";
import Image15 from "../assets/images/serviceImages/SW_Logo.png";
import Image16 from "../assets/images/serviceImages/smile.png";
import Image17 from "../assets/images/serviceImages/tesco.png";
import Image18 from "../assets/images/serviceImages/cooperativebank.png";

const ImageData = () => {
  let imgGallery = [
    { src: Image1, title: "Aqua" },
    { src: Image2, title: "Bank of Scotland" },
    { src: Image3, title: "Bip" },
    { src: Image4, title: "Birmingham Midshires" },
    { src: Image5, title: "Britannia" },
    { src: Image6, title: "Fluid" },
    { src: Image7, title: "Halifax" },
    { src: Image8, title: "HSBC UK" },
    { src: Image9, title: "Lloyds Bank" },
    { src: Image10, title: "Marbles" },
    { src: Image11, title: "mbna" },
    { src: Image12, title: "Nationwide Building Society" },
    { src: Image13, title: "Novuna Personal Finance" },
    { src: Image14, title: "Opus" },
    { src: Image15, title: "Scottish Widows (excluding Scottish Widows Bank)" },
    { src: Image16, title: "smile" },
    { src: Image17, title: "Tesco Bank" },
    { src: Image18, title: "The Co-operative Bank" },
  ];
  return (
    <div id="serviceContainer">
      {imgGallery.map((imgObj) => (
        <div className="imageContainer">
          <img
            src={imgObj.src}
            alt={imgObj.title}
            style={{ height: "63px", width: "230.3px", objectFit: "contain" }}
          />
          <p>{imgObj.title}</p>
        </div>
      ))}
    </div>
  );
};
export default ImageData;
