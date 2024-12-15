import { Box, Button, Stack, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box>
      <Stack
        sx={{
          backgroundColor: "#58C0C3",
          textAlign: "center",
          justifyContent: "center",
          p: "70px 0",
          flexDirection: "row",
        }}>
        <Box sx={{ textAlign: "right", padding: "0 140px" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFF",
              fontWeight: "800",
              fontSize: "40px",
              lineHeight: "54px",
              mb: "30px",
            }}>
            موارد التعليم المدرسي
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              pb: "1.5rem",
              margin: "0 0 10px",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "30px",
            }}>
            توفّر منصة إدراك للتعليم المدرسي مواد تعليمية مجانية باللّغة العربية
            لدعم
            <br /> طلبة المدارس من جميع الفئات العمرية
          </Typography>
          <Button
            sx={{
              background: "#FFF",
              borderRadius: "80px",
              color: "#3f5767",
              border: "none",
              fontSize: "16px",
              fontWeight: "400",
              paddingLeft: "25px",
              paddingRight: "25px",
              "&:hover": {
                background: "#DDD",
                color: "#000",
              },
            }}>
            تفضل بزيارة منصه التعليم المدرسى K-12
          </Button>
        </Box>

        <Box sx={{ padding: "0 80px" }}>
          <img src="/public/images/children.svg" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
