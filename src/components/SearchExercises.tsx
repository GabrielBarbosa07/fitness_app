import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if(search){
      // const exercisesData = await fetchData()
    }
  }

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
    </Stack>
  );
};

export default SearchExercises;
