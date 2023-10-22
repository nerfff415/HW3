import {Box, Typography} from "@mui/material";

const PageTitle = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box
                width="50%"
                marginLeft="20px"
            >
                <Typography
                    fontSize="72px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="120%"
                    textTransform="uppercase"
                >
                    Эксклюзивная и нестандартная мебель для дома
                </Typography>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                marginRight="20px"
            >
                <Typography
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    sx={{
                        textDecoration: "underline"
                    }}
                >
                    Заказать проект
                </Typography>
            </Box>
        </Box>
    )
}

export default PageTitle