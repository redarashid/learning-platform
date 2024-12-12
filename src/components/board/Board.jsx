import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import NavBoard from "../NavBoard";

const Board = () => {
  return (
    <>
      <NavBoard />

      <Box sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "2.75rem 1.25rem",
                alignItems: "center",
              }}>
              <img src="/images/balloon.svg" />
              <Typography
                sx={{
                  mt: "1.25rem",
                  color: "#c5c5c5",
                  fontSize: "1.9rem",
                  fontWeight: "bold",
                }}>
                لم تقم بالتسجيل في أي مساق بعد
              </Typography>
              <Button
                sx={{
                  border: "1px solid",
                  color: "#3f5767",
                  background: "transparent",
                  borderColor: "#3f5767",
                  opacity: "5",
                  borderRadius: "23px",
                  padding: "0.5rem 1.4rem",
                  letterSpacing: "1.8",
                  mt: "1.25rem",
                  "&:hover": {
                    backgroundColor: "#3f5767",
                    color: "#FFF",
                  },
                }}
                href="#contained-buttons">
                تصفح المساقات
              </Button>
            </Box>
          </Grid>

          <Grid>
            <Box></Box>
          </Grid>
        </Grid>
      </Box>

      <Stack
        sx={{
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          background: "#fafbfc",
          fontWeight: "normal",
          paddingBottom: "26px",
          paddingTop: "36px",
          gap: { xs: 4, md: 2 },
          alignItems: "center",
          textAlign: { xs: "center", md: "start" },
          color: "#A99E9C",
        }}>
        <Box sx={{ textAlign: "right", cursor: "pointer" }}>
          <Typography sx={{ color: "#A99E9C" }}>شروط الخدمة</Typography>
          <Typography>سياسة الخصوصية</Typography>
          <Typography>سياسة ملفات الارتباط</Typography>
          <Typography>اتفاقية تحليل البيانات</Typography>
          <Typography>تواصل معنا</Typography>
        </Box>
        <Box sx={{ textAlign: "right", cursor: "pointer" }}>
          <Typography>عن إدراك</Typography>
          <Typography>المدونة</Typography>
          <Typography>كيف تتعلم مع إدراك</Typography>
          <Typography>مركز المساعدة</Typography>
        </Box>
        <Box sx={{ textAlign: "right", cursor: "pointer" }}>
          <Typography>© 2024 إدراك.</Typography>
          <Typography>جميع الحقوق محفوظة.</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Board;
