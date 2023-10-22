import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                marginLeft="15px"
            >
                <Typography>© 2023 AVEJI</Typography>
                <Typography>Все права защищены</Typography>
            </Box>
            <Box
                display="flex"
                alignItems="center"
            >
                <Typography>Политика конфеденциальности / Оплата и доставка</Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginRight="15px"
            >
                <Typography marginRight="20px">ВКОНТАКТЕ</Typography>
                <Typography>ТЕЛЕГРАМ</Typography>
            </Box>
        </Box>
    )
}

export default Footer;