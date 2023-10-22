import ItemReview from "../ItemReview";
import {Box, Typography} from "@mui/material";

const Reviews = () => {
    return (
        <Box>
            <Typography
                fontSize="48px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                marginBottom="32px"
                marginLeft="20px"
            >
                Отзывы
            </Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                marginLeft="20px"
                marginRight="20px"
            >
                <ItemReview
                    name="Игорь Антонов"
                    description="Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне."
                />
                <ItemReview
                    name="Ольга Иванова"
                    description="После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!"
                />
                <ItemReview
                    name="Аркадий Макаров"
                    description="Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!"
                />
            </Box>
        </Box>
    )
}

export default Reviews;