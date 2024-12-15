import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Content = () => {
  return <div>
          <Stack
        sx={{
          width: "100%",
          backgroundColor: "#fafbfc",
        }}>
        <Box sx={{ p: "70px 0", textAlign: "center", width: "90%" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "20px",
              textAlign: "center",
              justifyContent: "center",
              color: "#4c6373",
              fontWeight: "400",
              lineHeight: "29px",
              margin: "0 0 40px",
            }}>
            شركاؤنا في النّجاح
          </Typography>
          <Grid
            container
            spacing={2} // المسافة بين الصور
            justifyContent="center" // توسيط العناصر أفقياً
            flexGrow={"grow"}>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/aap-logo-2017-cine.jpg"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/hikma.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/Arab_bank.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/Meta_Logo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/potash.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/ritlogo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/VanLeer_short_colour-grey.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/logo_Kingdom_of_the_netherlands.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/JMF-logo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/Turquoise_Mountain-Logo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/University_College_London_logo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img src="/public/images/AR.png" height="50px" width="auto" />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img src="/public/images/AR.png" height="50px" width="auto" />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/University_College_London_logo.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/gizlogo_unternehmen-en-implemented-rgb.png"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <a href="#">
                <img
                  src="/public/images/German_Jordanian_Cooperation_logo_300_dpi.jpg"
                  height="50px"
                  width="auto"
                />
              </a>
            </Grid>
          </Grid>
          <Button
            sx={{
              background: "0 0",
              fontSize: "16px",
              fontWeight: "400",
              padding: "10px 20px",
              color: "#3f5767",
              border: "1px solid #3f5767",
              borderRadius: "80px",
              marginTop: "3rem",
              "&:hover": {
                color: "#000"
              }
            }}
            variant="outlined">
            اعرض جميع الشركاء
          </Button>
        </Box>
      </Stack>
  </div>;
};

export default Content;
