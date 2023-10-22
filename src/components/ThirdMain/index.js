import {Box, Divider, Typography} from "@mui/material";
import ThirdMainText from "../ThirdMainText";

const ThirdMain = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box
                marginRight="79px"
            >
                <Typography
                    fontSize="48px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    marginLeft="20px"
                >
                    Как мы работаем
                </Typography>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                marginRight="79px"
            >
                <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="140%"
                    marginBottom="50px"
                    marginRight="223px"
                >
                    Алгоритм работы с нами для удобства и понимания проекта
                </Typography>

                <Box>
                    <Box
                        marginBottom="20px"
                    >
                        <ThirdMainText
                            name="Идея"
                            title="Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам."
                        />
                        <Divider />
                    </Box>

                    <Box
                        marginBottom="20px"
                    >
                        <ThirdMainText
                            name="Техническое задание"
                            title="Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты."
                        />
                        <Divider />
                    </Box>

                    <Box
                        marginBottom="20px"
                    >
                        <ThirdMainText
                            name="Коммерческое предложение"
                            title="Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение"
                        />
                        <Divider />
                    </Box>

                    <Box
                        marginBottom="20px"
                    >
                        <ThirdMainText
                            name="Подготовка рабочего проекта"
                            title="Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству."
                        />
                        <Divider />
                    </Box>

                    <Box
                        marginBottom="20px"
                    >
                        <ThirdMainText
                            name="Производство и монтаж"
                            title="Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно."
                        />
                        <Divider />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ThirdMain