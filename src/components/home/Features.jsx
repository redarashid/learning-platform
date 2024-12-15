import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Features = () => {
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
          style={{ width: "55%", maxHeight: 400, objectFit: "cover" }}
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
              textAlign: "right",
              mt: 2,
            }}>
            قم ببناء مهاراتك العمليّة من خلال الالتحاق ببرامج تدريبيّة متطوّرة،
            واكتسب شهادات تساعدك للدخول في سوق العمل وتطوير مسيرتك المهنية
          </Typography>
          <Button
            sx={{
              borderRadius: "23px",
              backgroundColor: "#0CA7AA",
              color: "#FFF",
              fontWeight: "bold",
              mt: "2rem",
            }}
            variant="contained"
            size="large"
            href="#contained-buttons">
            أستكشف البرامج
          </Button>
        </Box>
      </Box>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "40px 45px",
          borderRadius: "10px",
          justifyContent: "center",
          gap: 4,
          zIndex: 100,
          position: "relative",
        }}>
        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <img
            src="/public/images/icon-1.svg"
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textAlign: "right",
            }}>
            احصل على الشهادة
          </Typography>
          <Typography
            sx={{
              color: "#3C427F",
              fontSize: "18px",
              textAlign: "right",
            }}>
            لتعزّز فرصك في إطلاق مسيرتك المهنية، أو تنميتها وتطويرها.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <img
            src="/public/images/icon-2.svg"
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textAlign: "right",
            }}>
            تعلّم
          </Typography>
          <Typography
            sx={{
              color: "#3C427F",
              fontSize: "18px",
              textAlign: "right",
            }}>
            مع أكثر المدرّبين كفاءة لتصقل مهاراتك المهنية والعمليّة
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <img
            src="/public/images/icon-3.svg"
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textAlign: "right",
            }}>
            التحق
          </Typography>
          <Typography
            sx={{
              color: "#3C427F",
              fontSize: "18px",
              textAlign: "right",
            }}>
            بأحد البرامج لتنضمّ إلى مجتمع من المتعلّمين الرّاغبين بالتطوّر، مثلك
            تمامًا
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <img
            src="/public/images/icon-4.svg"
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textAlign: "right",
            }}>
            اكتشف
          </Typography>
          <Typography
            sx={{
              color: "#3C427F",
              fontSize: "18px",
              textAlign: "right",
            }}>
            مجموعة كبيرة ومتنوعة من أكثر الدورات والتخصصات كفاءة وجودة
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", direction: "rtl" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textAlign: "right",
              mb: "1rem",
            }}>
            هنا تبدأ رحلتك من العِلم إلى العَمل
          </Typography>
          <img
            src="/public/images/arrow.svg"
            alt=""
            style={{
              transform: "rotate(180deg)",
              width: "2rem",
              height: "2rem",
              cursor: "pointer",
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Features;
