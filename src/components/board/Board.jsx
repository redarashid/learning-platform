import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import NavBoard from "../NavBoard";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Board = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          backgroundColor: "#FFF",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        }}>
        <NavBoard />
        <Typography
          variant="h2"
          sx={{
            color: "#3f5767",
            fontWeight: "bold",
          }}>
          واصل التعلّم
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h2"
          sx={{
            color: "#3f5767",
            fontWeight: "bold",
          }}>
          واصل التعلّم
        </Typography>
      </Box>

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

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-end",
            }}>
            <Button
              startIcon={<ChecklistRtlOutlinedIcon />}
              sx={{
                marginBottom: "10px",
                width: "60%",
                color: "#FFF",
                fontSize: "1.3rem",
                border: "",
                textAlign: "right",
                justifyContent: "flex-end",
                backgroundColor: "#0BA7AA",
                pr: "10px",
                mb: "0",
              }}>
              واصل التعلّم
            </Button>

            <Button
              startIcon={<AutoAwesomeOutlinedIcon />}
              sx={{
                marginBottom: "10px",
                width: "60%",
                color: "#4D6679",
                fontSize: "1.3rem",
                border: "",
                textAlign: "right",
                justifyContent: "flex-end",
                pr: "10px",
                "&:hover": {
                  backgroundColor: "#0BA7AA",
                  color: "#FFF",
                },
              }}>
              اقتراحات لك
            </Button>
            <Button
              startIcon={<SettingsSuggestOutlinedIcon />}
              sx={{
                marginBottom: "10px",
                width: "60%",
                color: "#4D6679",
                fontSize: "1.3rem",
                border: "",
                textAlign: "right",
                justifyContent: "flex-end",
                pr: "10px",
                "&:hover": {
                  backgroundColor: "#0BA7AA",
                  color: "#FFF",
                },
              }}>
              المنجزة
            </Button>

            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ marginLeft: "auto" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  flexGrow: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "right",
                    flexGrow: 1,
                  }}>
                  ابحث في مساقاتك
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ textAlign: "right", padding: "1rem" }}>
                  <Stack
                    spacing={1.5}
                    direction="column"
                    sx={{
                      direction: "rtl",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                    <TextField
                      variant="outlined"
                      placeholder="ابحث"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "5px",
                        },
                      }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        borderRadius: "5px",
                        borderColor: "#0BA7AA",
                        color: "#0BA7AA",
                        "&:hover": {
                          backgroundColor: "#0BA7AA",
                          color: "#FFF",
                        },
                      }}>
                      جميع البرامج
                    </Button>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
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
