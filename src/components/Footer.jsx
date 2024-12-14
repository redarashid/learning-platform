import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import "../App.css";
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

      <Stack sx={{ direction: "row", textAlign: "right", margin: "4vh 8vh" }}>
        <Box className="footer-sections">
          {sections.map((section, index) => (
            <Box key={index} className="footer-section">
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
            </Box>
          ))}
        </Box>
      </Stack>
    </div>
  );
};

export default Footer;








// import { Box, Stack, Typography, Button, Grid } from "@mui/material";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
//   FaTwitter,
// } from "react-icons/fa"; // أيقونات
// import { BsGoogle } from "react-icons/bs"; // أيقونة Google

// const Footer = () => {
//   const links = [
//     { icon: <BsGoogle />, url: "https://www.google.com" },
//     { icon: <FaLinkedin />, url: "https://www.linkedin.com" },
//     { icon: <FaYoutube />, url: "https://www.youtube.com" },
//     { icon: <FaInstagram />, url: "https://www.instagram.com" },
//     { icon: <FaTwitter />, url: "https://twitter.com" },
//     { icon: <FaFacebook />, url: "https://www.facebook.com" },
//   ];

//   const sections = [
//     {
//       title: "عن ادراك",
//       links: [
//         "عن إدراك",
//         "كيف تتعلم مع إدراك",
//         "شروط الخدمة",
//         "سياسة الخصوصية",
//         "اتفاقية تحليل البيانات",
//         "سياسة ملفات الارتباط",
//         "اتصل بنا",
//       ],
//     },
//     {
//       title: "المزيد",
//       links: [
//         "منصة التعليم المدرسي",
//         "المدونة",
//         "بودكاست إدراك",
//         "مركز المساعدة",
//       ],
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#0b0e15",
//         color: "#b3dff5",
//         padding: "20px",
//         width: "100%",
//         textAlign: "right",
//       }}>
//       {/* تواصل معنا */}
//       <Typography
//         sx={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
//         تواصل معنا
//       </Typography>
//       <Stack
//         direction="row"
//         justifyContent="flex-end"
//         spacing={2}
//         sx={{ marginBottom: "20px" }}>
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "40px",
//               height: "40px",
//               backgroundColor: "#1a202c",
//               color: "#fff",
//               borderRadius: "50%",
//               transition: "background-color 0.3s ease",
//             }}>
//             {link.icon}
//           </a>
//         ))}
//       </Stack>

//       {/* الأقسام */}
//       <Grid container spacing={3}>
//         {sections.map((section, index) => (
//           <Grid item xs={12} md={6} key={index}>
//             <Typography sx={{ fontSize: "1.5rem", marginBottom: "10px" }}>
//               {section.title}
//             </Typography>
//             <ul
//               style={{
//                 listStyleType: "none",
//                 paddingLeft: 0,
//                 marginBottom: "20px",
//               }}>
//               {section.links.map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href="#"
//                     style={{
//                       color: "#b3dff5",
//                       textDecoration: "none",
//                       fontSize: "1rem",
//                       display: "block",
//                       marginBottom: "8px",
//                     }}>
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Grid>
//         ))}
//       </Grid>

//       {/* الزرار */}
//       <Button
//         sx={{
//           border: "1px solid #0CA7AA",
//           color: "#747A85",
//           fontWeight: "bold",
//           opacity: "5",
//           padding: "5px 15px",
//           borderRadius: "23px",
//           marginBottom: "1.5rem",
//           display: "inline-block",
//           justifyContent: "center",
//           alignItems: "center",
//           "&:hover": {
//             backgroundColor: "#0CA7AA",
//             color: "#FFF",
//           },
//         }}
//         href="#contained-buttons">
//         لوحتى التعليميه
//       </Button>
//     </Box>
//   );
// };

// export default Footer;
