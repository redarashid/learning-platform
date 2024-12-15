import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CardSlider from "../slider/CardSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Footer from "../Footer";
import About from "./About";
import Content from "./Content";
import Services from "./Services";
import Features from "./Features";
import Section from "./Section";

const Hero = () => {
  return (
    <Box>
      <Container sx={{ height: "300vh" }}>
        <Features />
        <Section />

        <Box sx={{ textAlign: "right", mt: "4rem" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            الدّورات الأكثر طلباً
          </Typography>
          <Typography variant="h6" sx={{ color: "#83939E", m: "0.7rem" }}>
            اختر من أحد هذه الدورات لتطوير مهاراتك في مجالات مختلفة
          </Typography>

          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              mr: "0.7rem",
              borderRadius: "23px",
              "&:hover": {
                color: "#000",
              },
            }}
            href="#contained-buttons">
            تطوير الذات
          </Button>

          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              borderRadius: "23px",
              mr: "0.7rem",
              "&:hover": {
                color: "#000",
              },
            }}
            href="#contained-buttons">
            الاستعداد الزظيفى
          </Button>

          <Button
            sx={{
              borderRadius: "23px",
              backgroundColor: "#0CA7AA",
              color: "#FFF",
              fontWeight: "bold",
            }}
            variant="contained"
            href="#contained-buttons">
            الاعمال والرياده
          </Button>
        </Box>

        <Stack
          direction={"row"}
          sx={{ gap: 4, textAlign: "right", mt: "2rem" }}>
          <CardSlider />
        </Stack>
      </Container>

      <About />

      <Content />

      <Services />

      <Footer />
    </Box>
  );
};

export default Hero;
