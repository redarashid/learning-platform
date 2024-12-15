import { Box, Container,Grid, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Stack direction={"row"} sx={{ gap: 8, mt: "-20rem", width: "100%" }}>
        <Container>
          <Stack direction={"column"}>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                تقدّم مع إدراك
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#516088",
                  mt: "1rem",
                  textAlign: "right",
                  mb: "3rem",
                }}>
                انضم إلى مجتمع متعلّمي إدراك لتحدث نقلة نوعية في مسيرتك المهنية
                من
                <br /> خلال البرامج المصمّمة لتزويدك بالمهارات التي تحتاجها
                لاستكشاف طاقاتك
                <br /> وإمكانيّاتك الذاتية
              </Typography>
            </Box>

            <Grid container spacing={1} direction="row-reverse">
              <Grid item xs={12} sm={4}>
                <Box sx={{ mt: "1.5rem", textAlign: "right" }}>
                  <img src="/public/images/machine.svg" />
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    الجاهزيّة المهنيّة
                  </Typography>
                  <Typography sx={{ color: "#516088" }}>
                    تميّز في سوق العمل بمهاراتك <br />
                    وشغفك للتعلم والتطور
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ mt: "1.5rem", textAlign: "right" }}>
                  <img
                    src="/public/images/gate.svg"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    التّعلّم المرن
                  </Typography>
                  <Typography sx={{ color: "#516088" }}>
                    تعلّم مجانا أينما كنت وفي أي وقت، عبر <br />
                    حاسوبك الشخصي أو هاتفك المتنقل
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ mt: "1.5rem", textAlign: "right" }}>
                  <img src="/public/images/user.svg" />
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    محتوى عالي الجودة
                  </Typography>
                  <Typography sx={{ color: "#516088" }}>
                    اكتسب المهارات المطلوبة في سوق العمل
                    <br /> مع نخبة من أفضل الخبراء والمدربين
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        <Box>
          <img
            src="/public/images/learn.webp"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
