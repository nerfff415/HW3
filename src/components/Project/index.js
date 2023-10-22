import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import project1 from "../../shared/images/project-1.png";
import project2 from "../../shared/images/project-2.png";
import project3 from "../../shared/images/project-3.png";
import project4 from "../../shared/images/project-4.png";
import project5 from "../../shared/images/project-5.png";
import project6 from "../../shared/images/project-6.png";
import { Grid } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const itemData = [
    {
        img: project1,
        title: "Тумба под телевизором"
    },
    {
        img: project2,
        title: "Кухня"
    },
    {
        img: project3,
        title: "Гостевая комната"
    },
    {
        img: project4,
        title: "Душевая комната"
    },
    {
        img: project5,
        title: "Спальня"
    },
    {
        img: project6,
        title: "Комод"
    },
]

export default function Project() {
    const [isHovered, setIsHovered] = React.useState(null);

    return (
        <Grid container spacing={2}>
            {itemData.map((item, index) => (
                <Grid item xs={12} sm={4} key={item.img} >
                    <ImageListItem
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '445px', height: '580px' }} // Установите желаемый размер
                        />
                        {isHovered === index && (
                            <ImageListItemBar
                                title={item.title}
                                sx={{
                                    width: "445px",
                                    height: "80px",
                                }}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <ArrowOutwardIcon />
                                    </IconButton>
                                }
                            />
                        )}
                    </ImageListItem>
                </Grid>
            ))}
        </Grid>
    );
}
