import { Box, Container, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
          gap: 4,
        }}>
        <img
          src="/public/images/hero_image.png"
          style={{ width: "50%", maxHeight: 350, objectFit: "cover" }}
        />
        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontWeight: "bold",
              color: "#24343F",
              fontSize: "3rem",
            }}>
            اطمح، تعلّم، تقدّم
          </Typography>
          <Typography
            sx={{
              color: "#24343F",
              fontSize: "2rem",
              lineHeight: "1.2",
              textAlign: "center",
              mt: 2,
            }}>
            قم ببناء مهاراتك العمليّة من خلال الالتحاق ببرامج تدريبيّة متطوّرة،
            واكتسب شهادات تساعدك للدخول في سوق العمل وتطوير مسيرتك المهنية
          </Typography>
        </Box>
      </Box>
      <Stack direction={"row"} spacing={2}>
        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <img
            src="/public/images/icon-1.svg"
            alt=""
            style={{ fontSize: 20 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "right",
            }}>
            احصل على الشهادة
          </Typography>
          <Typography
            sx={{ color: "#3C427F", maxWidth: "50%", textAlign: "right" }}>
            لتعزّز فرصك في إطلاق مسيرتك المهنية، أو تنميتها وتطويرها.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
