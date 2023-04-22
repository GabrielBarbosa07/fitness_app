export interface ExercisesProps {
    exercise: ExerciceProps[];
    targetMuscleExercises:ExercisesProps[];
    equipmentExercises:ExercisesProps[]
}

export interface ExerciceProps {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
}

export interface ExerciseVideosAndDetailProps {
    exerciseVideos: [
        {
            channelId: string;
            channelName: string;
            description: string;
            lengthText: string;
            publishedTimeText: string;
            thumbnails: [
                {
                    height: number;
                    url: string;
                    width: string;
                }
            ];
            title: string;
            videoId: string;
            viewCountText: string;
        }
    ];
    exerciseDetail: {
        bodyPart: string;
        equipment: string;
        gifUrl: string;
        id: string;
        name: string;
        target: string;
    };
}