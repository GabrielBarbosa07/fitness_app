import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

export interface ExercisesProps{
  exercise: ExercisesProps[]
} 

export interface ExerciceProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }: any) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const exercisesDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
  const exercisesBodyPartListUrl =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        exercisesBodyPartListUrl,
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(exercisesDbUrl, exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise: ExerciceProps) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Exercícios Incríveis que você deveria conhecer
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              width: { lg: "800px", xs: "350px" },
            },
          }}
          value={search}
          onChange={({ target }) => setSearch(target.value.toLowerCase())}
          type="text"
          placeholder="Procure Exercícios"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: {
              lg: "20px",
              xs: "14px",
              height: "56px",
              position: "absolute",
              right: "0",
            },
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
