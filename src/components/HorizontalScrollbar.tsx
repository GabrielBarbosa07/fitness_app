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
  speed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }: any) => (
  <Slider {...settings}>
    {data.map((item: any) => (
      <Box key={item.id || item} p="0 40px">
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    ))}
  </Slider>
);

export default HorizontalScrollbar;
