import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
import { ExerciseDetailProps, ExerciseVideosProps } from "../utils/Props";

const ExerciseVideos = ({
  exerciseVideos,
  exerciseDetail,
}: {
  exerciseVideos: ExerciseVideosProps[];
  exerciseDetail: ExerciseDetailProps;
}) => {
  if (!exerciseVideos.length) return <Loader />;
  console.log({"videos":exerciseVideos,"detail": exerciseDetail});

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, textAlign: "center" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Assista videos sobre o{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {exerciseDetail?.name}
        </span>
      </Typography>
      <Stack
        sx={{ flexDirection: { sm: "row" }, gap: { sm: "70px", xs: "0px" } }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos
          ?.slice(0, 3)
          ?.map((item: any, index: string | number) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.title}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography
                  sx={{ fontSize: { lg: "18px", xs: "15px" } }}
                  color="#a4a3a3"
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
