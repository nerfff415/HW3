import {Box, Button, Input, Typography} from "@mui/material";
import imageThree from "../../shared/images/bilal-mansuri-yJ78NE83YH8-unsplash 1.png"
import AppStore from "../../shared/icons/appStore";
import GoogleMarket from "../../shared/icons/googleMarket";

const OrderProject = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box
                marginLeft="20px"
            >
                <img src={imageThree} alt="Картинка №3"/>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginRight="400px"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Typography
                        fontSize="48px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="normal"
                        marginBottom="10px"
                    >
                        Хотите заказать проект?
                    </Typography>
                    <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="140%"
                        margintBottom="10px"
                    >
                        Оставьте заявку, и мы вам перезвоним
                    </Typography>
                    <Input
                        sx={{
                            width: "562px",
                            height: "31px",
                            marginTop: "10px"
                        }}
                        placeholder="Имя"
                    />
                    <Input
                        sx={{
                            width: "562px",
                            height: "31px",
                            marginTop: "10px"
                        }}
                        placeholder="E-mail"
                    />
                    <Input
                        sx={{
                            width: "562px",
                            height: "31px",
                            marginTop: "10px"
                        }}
                        placeholder="Телефон"
                    />

                    <Button
                        sx={{
                            display: "inline-flex",
                            backgroundColor: "black",
                            color: "white",
                            padding: "12px 20px",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px"
                        }}
                    >
                        Отправить заявку
                    </Button>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    marginTop="50px"
                >
                    <AppStore />
                    <GoogleMarket />
                </Box>
            </Box>
        </Box>
    )
}

export default OrderProject