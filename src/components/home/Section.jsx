import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Section = () => {
  return (
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
    //           <Stack
    //             direction="row"
    //             sx={{
    //               backgroundColor: "#FFF",
    //               boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    //               borderRadius: "10px",
    //               overflow: "hidden",
    //               maxWidth: "1000px",
    //               zIndex: 999,
    //               position: "relative",
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
    //                 ادوات القياده الاساسيه
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
    //                 src="/public/images/managers.jpg"
    //                 style={{
    //                   objectFit: "cover",
    //                   width: "100%",
    //                   height: "100%",
    //                 }}
    //               />
    //             </Box>
    //           </Stack>
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

    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#F0F6F9",
              height: "400px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#25343F",
              textAlign: "center",
            }}>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              اصقل مهاراتك العمليّة مع تخصّصات إدراك
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              قم بتطوير مهارة مهنية محددة من خلال سلسلة من الدورات التدريبية
              المترابطة. جسّد أفكارك على أرض الواقع من خلال مشاريع عمليّة واحصل
              على شهادة تخصص لإضافتها إلى سيرتك الذاتية.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#FED04E",
                color: "#25343F",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
              variant="contained">
              تصفح التخصصات
            </Button>
          </Box>
        </Grid>

        {/* الجزء الثاني: الجزء الأيمن (أكبر من الجزء الأيسر) */}
        <Grid item xs={12} sm={6} md={8}>
          <Box
            sx={{
              backgroundColor: "#FED04E",
              height: "400px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#25343F",
              textAlign: "right",
            }}>
            <Typography
              variant="h5"
              sx={{
                marginBottom: "1rem",
                mt: "0",
                fontSize: "32px",
                fontWeight: "800",
                lineHeight: "43px",
                color: "#24343f",
                mb: "10px",
                textAlign: "right",
                alignItems: "center",
              }}>
              اصقل مهاراتك العمليّة مع تخصّصات <br />
              إدراك
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
                textAlign: "right",
                color: "#000",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "29px",
                alignItems: "center",
              }}>
              قم بتطوير مهارة مهنية محددة من خلال سلسلة من الدورات التدريبية
              <br /> المترابطة. جسّد أفكارك على أرض الواقع من خلال مشاريع عمليّة
              <br /> واحصل على شهادة تخصص لإضافتها إلى سيرتك الذاتية
            </Typography>
            <Button
              sx={{
                backgroundColor: "#25343F",
                color: "#FFF",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
              variant="contained">
              تصفح التخصصات
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
