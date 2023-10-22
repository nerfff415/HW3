import {Box, Typography} from "@mui/material";

const SecondMain = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box>
                <Typography
                    fontSize="48px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    width="50%"
                    marginLeft="20px"
                >
                    Более 5 лет создаем мебель для вашего комфорта
                </Typography>
            </Box>
            <Box
                marginRight="323px"
            >
                <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="140%"
                    marginBottom="20px"
                    width="446px"
                >
                    Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.
                </Typography>
                <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="140%"
                    marginBottom="20px"
                    width="446px"
                >
                    Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.
                </Typography>
                <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="140%"
                    marginBottom="30px"
                    width="446px"
                >
                    В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.
                </Typography>

                <Typography
                    fontSize="36px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    marginBottom="50px"
                >
                    1 год
                    <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="140%"
                    >
                        гарантии на всю продукцию
                    </Typography>
                </Typography>

                <Typography
                    fontSize="36px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    marginBottom="50px"
                >
                    300+
                    <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="140%"
                    >
                        выполненных проектов
                    </Typography>
                </Typography>

                <Typography
                    fontSize="36px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    marginBottom="10px"
                >
                    15 дней
                    <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="140%"
                    >
                        срок производства
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default SecondMain;