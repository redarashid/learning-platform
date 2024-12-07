import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"; // أيقونات
import { BsGoogle } from "react-icons/bs"; // أيقونة Google
import "../App.css"; // ملف التنسيق
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  const links = [
    { icon: <BsGoogle />, url: "https://www.google.com" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com" },
    { icon: <FaYoutube />, url: "https://www.youtube.com" },
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebook />, url: "https://www.facebook.com" },
  ];

  const sections = [
    {
      title: "عن ادراك",
      links: [
        "عن إدراك",
        "كيف تتعلم مع إدراك",
        "شروط الخدمة",
        "سياسة الخصوصية",
        "اتفاقية تحليل البيانات",
        "سياسة ملفات الارتباط",
        "اتصل بنا",
      ],
    },
    {
      title: "المزيد",
      links: [
        "منصة التعليم المدرسي",
        "المدونة",
        "بودكاست إدراك",
        "مركز المساعدة",
      ],
    },
  ];
  return (
    <div className="social-container">
      <Typography
        sx={{ color: "#FFF", fontWeight: "bold", fontSize: "2.5rem" }}
        className="social-title">
        تواصل معنا
      </Typography>
      <Box className="social-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link">
            {link.icon}
          </a>
        ))}
      </Box>

      <Stack>
        <div className="footer-sections">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
