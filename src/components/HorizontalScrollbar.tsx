import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

import BodyPart from "./BodyPart";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

function SampleNextArrow({ className, onClick }: any) {
  return (
    <Typography onClick={onClick} className={className}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function SamplePrevArrow({ className, onClick }: any) {
  return (
    <Typography onClick={onClick} className={className}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 1,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 682,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }: any) => (
  <Box sx={{ width: "100%", p: { xs: "0 20px", lg: "40px" } }}>
    <Slider {...settings}>
      {data.map((item: any) => (
        <Box key={item.id || item}>
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
      ))}
    </Slider>
  </Box>
);

export default HorizontalScrollbar;
