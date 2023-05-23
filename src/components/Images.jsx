import React, { useMemo } from "react";
import picture1 from "../assets/Pictures/Image.png";
import picture2 from "../assets/Pictures/Image-1.png";
import picture3 from "../assets/Pictures/Image-2.png";
import picture4 from "../assets/Pictures/Image-3.png";
import picture5 from "../assets/Pictures/Image-4.png";
import picture6 from "../assets/Pictures/Image-5.png";
import picture7 from "../assets/Pictures/Image-6.png";
import picture8 from "../assets/Pictures/Image-7.png";
import picture9 from "../assets/Pictures/Image-8.png";
import picture10 from "../assets/Pictures/Image-9.png";
import picture11 from "../assets/Pictures/Image-10.png";
import picture12 from "../assets/Pictures/Image-11.png";
import picture13 from "../assets/Pictures/Image-12.jpg";
import picture14 from "../assets/Pictures/Image-13.jpg";
import picture15 from "../assets/Pictures/Image-14.jpg";
import picture16 from "../assets/Pictures/Image-15.jpg";
import picture17 from "../assets/Pictures/Image-16.jpg";
import picture18 from "../assets/Pictures/Image-17.jpg";
import picture19 from "../assets/Pictures/Image-18.jpg";
import picture20 from "../assets/Pictures/Image-19.jpg";

const images = {
  1: picture1,
  2: picture2,
  3: picture3,
  4: picture4,
  5: picture5,
  6: picture6,
  7: picture7,
  8: picture8,
  9: picture9,
  10: picture10,
  11: picture11,
  12: picture12,
  13: picture13,
  14: picture14,
  15: picture15,
  16: picture16,
  17: picture17,
  18: picture18,
  19: picture19,
  20: picture20,
};

function Images({ id, className }) {
  const image = useMemo(() => images[id], [id]);
  return <img className={`Cards-image ${className}`} src={image} alt="image" />;
}

export default Images;
