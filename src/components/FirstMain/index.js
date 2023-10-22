import {Box, Typography} from "@mui/material";
import imageOne  from "../../shared/images/michael-oxendine-GHCVUtBECuY-unsplash (1) 1.png"
import imageTwo from "../../shared/images/spacejoy-IH7wPsjwomc-unsplash (1) 1.png"
const FirstMain = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                marginLeft="20px"
            >
                <Typography
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="140%"
                    width="50%"
                >
                    Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.
                </Typography>
                <Box>
                    <img src={imageOne} alt="Картинка №1"/>
                </Box>
            </Box>

            <Box
                marginRight="90px"
            >
                <img src={imageTwo} alt="Картинка №2"/>
            </Box>
        </Box>
    )
}

export default FirstMain;