import {Box, Typography} from "@mui/material";

const ItemReview = ({name, description}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            width="445px"
            height="327px"
            border="1px solid black"
        >
            <Typography
                fontSize="18px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
            >
                {name}
            </Typography>
            <Typography
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="140%"
                textAlign="center"
            >
                {description}
            </Typography>
        </Box>
    )
}

export default ItemReview;