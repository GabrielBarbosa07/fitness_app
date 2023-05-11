import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { ExercisesProps } from "../utils/Props";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
}: ExercisesProps) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Exercícios com o{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Músculo-Alvo
        </span>{" "}
        Semelhante
      </Typography>
      <Stack
        direction="row"
        sx={{ p: { xs: "0 36px", lg: 6 }, position: "relative" }}
      >
        {targetMuscleExercises?.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Exercícios com o{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipamento
        </span>{" "}
        Semelhante
      </Typography>
      <Stack
        direction="row"
        sx={{ p: { xs: "0 36px", lg: 6 }, position: "relative" }}
      >
        {equipmentExercises?.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
