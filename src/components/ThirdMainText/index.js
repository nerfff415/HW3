import {Box, Typography} from "@mui/material";

const ThirdMainText = ({name, title}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography
                width="328px"
                height="100px"
                fontSize="36px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
            >
                {name}
            </Typography>
            <Typography
                width="329px"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="140%"
                marginRight="30px"
            >
                {title}
            </Typography>
        </Box>
    )
}

export default ThirdMainText