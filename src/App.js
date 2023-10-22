import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import FirstMain from "./components/FirstMain";
import SecondMain from "./components/SecondMain";
import ThirdMain from "./components/ThirdMain";
import {Box, Typography} from "@mui/material";
import ItemReview from "./components/ItemReview";
import Reviews from "./components/Reviews";
import OrderProject from "./components/OrderProject";
import Project from "./components/Project";

function App() {
  return (
      <>
          <Box
            marginBottom="150px"
            marginLeft="20px"
          >
              <Header />
          </Box>
          <Box
            marginBottom="150px"
          >
              <FirstMain />
          </Box>
          <Box
              marginBottom="150px"
          >
              <SecondMain />
          </Box>

          <Box
            marginBottom="150px"
          >
              <ThirdMain />
          </Box>
          <Box
            marginBottom="150px"
          >
              <Reviews />
          </Box>

          <Box
              marginBottom="150px"
          >
              <Typography
                fontSize="48px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                marginLeft="20px"
                marginBottom="30px"
              >Проекты</Typography>
              <Box
                  marginLeft="20px"
              >
                  <Project />
              </Box>
          </Box>

          <Box
            marginBottom="150px"
          >
              <OrderProject />
          </Box>

          <Box>
              <Footer />
          </Box>
      </>
      // <Reviews />
      // <Box
      //   display="flex"
      //   flexDirection="column"
      //   justifyContent="space-between"
      // >
      //     {/*<Box*/}
      //     {/*  marginBottom="50px"*/}
      //     {/*>*/}
      //     {/*    <PageTitle />*/}
      //     {/*</Box>*/}
      //     {/*<Box*/}
      //     {/*  marginBottom="50px"*/}
      //     {/*>*/}
      //     {/*    <FirstMain />*/}
      //     {/*</Box>*/}
      //     {/*<Box*/}
      //     {/*  marginBottom="50px"*/}
      //     {/*>*/}
      //     {/*    <SecondMain />*/}
      //     {/*</Box>*/}
      //     <Box
      //       marginBottom="50px"
      //     >
      //         <ThirdMain />
      //     </Box>
      // </Box>
  )
}

export default App;
