import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";

function SwiperSlick() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Stack
            direction="row"
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "1000px",
              zIndex: 999,
              position: "relative",
            }}>
            <Box
              sx={{
                flex: 1,
                padding: "2rem",
                display: "flex",
                backgroundColor: "#FFF",
                flexDirection: "column",
                justifyContent: "center",
                color: "#25343F",
              }}>
              <Typography
                sx={{
                  color: "#25343F",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
                variant="h3">
                ادوات القياده الاساسيه
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.8rem",
                  color: "#83939E",
                  textAlign: "right",
                }}>
                تم تصميم تخصص أساسيات القيادة المهنية لتزويد القادة الشباب
                بالمهارات الأساسية اللازمة للتميز في المراحل المبكرة من مسيرتهم
                المهنية. من خلال ثلاث دورات شيقة، سيطوّر المتعلمون
              </Typography>
            </Box>
            <Box>
              <img
                src="/public/images/managers.jpg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Stack>{" "}
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SwiperSlick;

// <Box>
//   <Grid
//     container
//     style={{
//       width: "100%",
//       height: "70vh",
//       m: 0,
//     }}>
//     <Grid
//       item
//       xs={6}
//       style={{
//         backgroundColor: "#F0F6F9",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "#fff",
//         width: "100%",
//         overflow: "hidden",
//       }}>
//       <Swiper
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper">
//         <SwiperSlide>
// <Stack
//   direction="row"
//   sx={{
//     backgroundColor: "#FFF",
//     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//     borderRadius: "10px",
//     overflow: "hidden",
//     maxWidth: "1000px",
//     zIndex: 999,
//     position: "relative",
//   }}>
//   <Box
//     sx={{
//       flex: 1,
//       padding: "2rem",
//       display: "flex",
//       backgroundColor: "#FFF",
//       flexDirection: "column",
//       justifyContent: "center",
//       color: "#25343F",
//     }}>
//     <Typography
//       sx={{
//         color: "#25343F",
//         fontSize: "2rem",
//         fontWeight: "bold",
//         marginBottom: "1rem",
//       }}
//       variant="h3">
//       ادوات القياده الاساسيه
//     </Typography>
//     <Typography
//       sx={{
//         fontSize: "1rem",
//         lineHeight: "1.8rem",
//         color: "#83939E",
//         textAlign: "right",
//       }}>
//       تم تصميم تخصص أساسيات القيادة المهنية لتزويد القادة الشباب
//       بالمهارات الأساسية اللازمة للتميز في المراحل المبكرة من
//       مسيرتهم المهنية. من خلال ثلاث دورات شيقة، سيطوّر المتعلمون
//     </Typography>
//   </Box>
//   <Box>
//     <img
//       src="/public/images/managers.jpg"
//       style={{
//         objectFit: "cover",
//         width: "100%",
//         height: "100%",
//       }}
//     />
//   </Box>
// </Stack>
//         </SwiperSlide>

//         <SwiperSlide>
//           <Stack
//             direction="row"
//             sx={{
//               backgroundColor: "#FFF",
//               boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//               borderRadius: "10px",
//               overflow: "hidden",
//               maxWidth: "1000px",
//               zIndex: 99,
//             }}>
//             <Box
//               sx={{
//                 flex: 1,
//                 padding: "2rem",
//                 display: "flex",
//                 backgroundColor: "#FFF",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 color: "#25343F",
//               }}>
//               <Typography
//                 sx={{
//                   color: "#25343F",
//                   fontSize: "2rem",
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                 }}
//                 variant="h3">
//                 اساسيات القياده المهنيه
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1rem",
//                   lineHeight: "1.8rem",
//                   color: "#83939E",
//                   textAlign: "right",
//                 }}>
//                 تم تصميم تخصص أساسيات القيادة المهنية لتزويد القادة الشباب
//                 بالمهارات الأساسية اللازمة للتميز في المراحل المبكرة من
//                 مسيرتهم المهنية. من خلال ثلاث دورات شيقة، سيطوّر المتعلمون
//               </Typography>
//             </Box>
//             <Box>
//               <img
//                 src="/public/images/essentials_-_S.png"
//                 style={{
//                   objectFit: "cover",
//                   width: "100%",
//                   height: "100%",
//                 }}
//               />
//             </Box>
//           </Stack>
//         </SwiperSlide>
//       </Swiper>
//     </Grid>
//     <Grid
//       item
//       xs={6}
//       style={{
//         backgroundColor: "#FED04E ",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "flex-end",
//         color: "#fff",
//         textAlign: "right",
//         padding: "2rem",
//       }}>
//       <Typography
//         sx={{
//           color: "#24343F",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//         }}
//         variant="h3">
//         اصقل مهاراتك العمليّة مع تخصّصات إدراك
//       </Typography>
//       <Typography
//         sx={{
//           color: "#24343F",
//           fontSize: "1.2rem",
//           marginBottom: "2rem",
//         }}>
//         قم بتطوير مهارة مهنية محددة من خلال سلسلة من الدورات التدريبية
//         المترابطة. جسّد أفكارك على أرض الواقع من خلال مشاريع عمليّة واحصل
//         على شهادة تخصص لإضافتها إلى سيرتك الذاتية
//       </Typography>
//       <Button
//         sx={{
//           borderRadius: "20px",
//           color: "#516088",
//           backgroundColor: "#FFF",
//         }}
//         variant="#FFF">
//         تصفح التخصصات
//       </Button>
//     </Grid>
//   </Grid>
// </Box>
