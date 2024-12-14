import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg,rgb(59, 61, 81) 0%, #0F1820 100%)",
  color: "#ffffff",
  padding: "64px 0 32px 0",
  boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)",
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  "& h6": {
    fontWeight: 600,
    marginBottom: "24px",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      right: 0, // تغيير من "left" إلى "right"
      width: "40px",
      height: "2px",
      backgroundColor: "#0BA7AA",
    },
  },
  "& ul": {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  "& li": {
    marginBottom: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#0BA7AA",
      transform: "translateX(5px)",
    },
  },
}));

const NewsletterBox = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  padding: "24px",
  marginTop: "32px",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  margin: "0 8px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#0BA7AA",
    transform: "translateY(-3px)",
  },
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #0BA7AA 30%,rgb(21, 214, 221) 90%)",
  borderRadius: "25px",
  padding: "12px 32px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 3px 15px #0ca7aa85",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 5px 20px #0ca7aa85",
  },
}));

const ModernFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("تم الاشتراك بالبريد الإلكتروني:", email);
      setEmail("");
    }
  };

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg" dir="rtl">
        {" "}
        {/* إضافة dir="rtl" هنا */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <Typography variant="h6">نظرة عامة على الشركة</Typography>
              <ul>
                <li>نبذة عنا</li>
                <li>مهمتنا</li>
                <li>فريق العمل</li>
                <li>وظائفنا</li>
                <li>اتصل بنا</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">مميزات المنتج</Typography>
              <ul>
                <li>الحلول</li>
                <li>التقنية</li>
                <li>التكاملات</li>
                <li>التسعير</li>
                <li>واجهة البرمجة</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">الدعم والأسئلة المتكررة</Typography>
              <ul>
                <li>مركز المساعدة</li>
                <li>التوثيق</li>
                <li>المجتمع</li>
                <li>الموارد</li>
                <li>التحديثات</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterColumn>
              <Typography variant="h6">الشركاء</Typography>
              <ul>
                <li>السوق</li>
                <li>المطورون</li>
                <li>الشركاء التابعون</li>
                <li>بوابة الشركاء</li>
                <li>قصص النجاح</li>
              </ul>
            </FooterColumn>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <Typography variant="h6">المعلومات القانونية</Typography>
              <ul>
                <li>سياسة الخصوصية</li>
                <li>شروط الخدمة</li>
                <li>سياسة الكوكيز</li>
                <li>الأمان</li>
                <li>الامتثال</li>
              </ul>
            </FooterColumn>
          </Grid>
        </Grid>
        <NewsletterBox>
          <Typography variant="h5" gutterBottom>
            اشترك في نشرتنا الإخبارية
          </Typography>
          <form onSubmit={handleSubscribe}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                
                fullWidth
                variant="outlined"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  marginBottom: "16px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                  },
                }}
                inputProps={{
                  "aria-label": "اشترك في النشرة الإخبارية",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#0ca7aab8",
                  "&:hover": {
                    background: "#0ca7aa",
                  },
                }}>
                اشترك
              </Button>
            </Stack>
          </form>
        </NewsletterBox>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <GetStartedButton
            sx={{ backgroundColor: "#0BA7AA" }}
            variant="contained"
            color="primary">
            ابدأ اليوم
          </GetStartedButton>

          <Box sx={{ mt: 4 }}>
            <SocialButton aria-label="Facebook">
              <FaFacebook size={24} />
            </SocialButton>
            <SocialButton aria-label="Twitter">
              <FaTwitter size={24} />
            </SocialButton>
            <SocialButton aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </SocialButton>
            <SocialButton aria-label="Instagram">
              <FaInstagram size={24} />
            </SocialButton>
            <SocialButton aria-label="YouTube">
              <FaYoutube size={24} />
            </SocialButton>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default ModernFooter;
