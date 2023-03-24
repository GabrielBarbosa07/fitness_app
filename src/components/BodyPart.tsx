import React from "react";
import { Box, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }: any) => (
  <Box
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? "4px solid #FF2625" : "",
      background: "#fff",
      borderBottomLeftRadius: "20px",
      width: "270px",
      height: "282px",
      cursor: "pointer",
      gap: "47px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Roboto"
      color="#3A1212"
      textTransform="capitalize"
      letterSpacing={3}
    >
      {item}
    </Typography>
  </Box>
);

export default BodyPart;
