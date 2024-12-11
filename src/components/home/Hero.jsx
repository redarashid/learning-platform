import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Footer from "../Footer";

const Hero = () => {
  return (
    <>
      <Container sx={{ height: "300vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
            gap: 4,
          }}>
          <img
            src="/public/images/hero_image.png"
            style={{ width: "55%", maxHeight: 400, objectFit: "cover" }}
          />
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h4"
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: "#24343F",
                fontSize: "3rem",
              }}>
              اطمح، تعلّم، تقدّم
            </Typography>
            <Typography
              sx={{
                color: "#24343F",
                fontSize: "2rem",
                lineHeight: "1.2",
                textAlign: "center",
                mt: 2,
              }}>
              قم ببناء مهاراتك العمليّة من خلال الالتحاق ببرامج تدريبيّة
              متطوّرة، واكتسب شهادات تساعدك للدخول في سوق العمل وتطوير مسيرتك
              المهنية
            </Typography>
            <Button
              sx={{
                borderRadius: "23px",
                backgroundColor: "#0CA7AA",
                color: "#FFF",
                fontWeight: "bold",
                mt: "2rem",
              }}
              variant="contained"
              size="large"
              href="#contained-buttons">
              أستكشف البرامج
            </Button>
          </Box>
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            padding: "40px 45px",
            borderRadius: "10px",
            justifyContent: "center",
            gap: 4,
            zIndex: 2,
            mb: 2,
            position: "relative",
          }}>
          <Box sx={{ textAlign: "right", direction: "rtl" }}>
            <img
              src="/public/images/icon-1.svg"
              alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textAlign: "right",
              }}>
              احصل على الشهادة
            </Typography>
            <Typography
              sx={{
                color: "#3C427F",
                fontSize: "18px",
                textAlign: "right",
              }}>
              لتعزّز فرصك في إطلاق مسيرتك المهنية، أو تنميتها وتطويرها.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", direction: "rtl" }}>
            <img
              src="/public/images/icon-2.svg"
              alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textAlign: "right",
              }}>
              تعلّم
            </Typography>
            <Typography
              sx={{
                color: "#3C427F",
                fontSize: "18px",
                textAlign: "right",
              }}>
              مع أكثر المدرّبين كفاءة لتصقل مهاراتك المهنية والعمليّة
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", direction: "rtl" }}>
            <img
              src="/public/images/icon-3.svg"
              alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textAlign: "right",
              }}>
              التحق
            </Typography>
            <Typography
              sx={{
                color: "#3C427F",
                fontSize: "18px",
                textAlign: "right",
              }}>
              بأحد البرامج لتنضمّ إلى مجتمع من المتعلّمين الرّاغبين بالتطوّر،
              مثلك تمامًا
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", direction: "rtl" }}>
            <img
              src="/public/images/icon-4.svg"
              alt=""
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textAlign: "right",
              }}>
              اكتشف
            </Typography>
            <Typography
              sx={{
                color: "#3C427F",
                fontSize: "18px",
                textAlign: "right",
              }}>
              مجموعة كبيرة ومتنوعة من أكثر الدورات والتخصصات كفاءة وجودة
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", direction: "rtl" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textAlign: "right",
                mb: "1rem",
              }}>
              هنا تبدأ رحلتك من العِلم إلى العَمل
            </Typography>
            <img
              src="/public/images/arrow.svg"
              alt=""
              style={{
                transform: "rotate(180deg)",
                width: "2rem",
                height: "2rem",
                cursor: "pointer",
              }}
            />
          </Box>
        </Stack>

        <Grid
          container
          style={{
            width: "100%",
            height: "70vh",
            m: 0,
          }}>
          <Grid
            item
            xs={6}
            style={{
              backgroundColor: "#F0F6F9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              width: "100%",
              overflow: "hidden",
            }}>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper">
              <SwiperSlide>
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
                      بالمهارات الأساسية اللازمة للتميز في المراحل المبكرة من
                      مسيرتهم المهنية. من خلال ثلاث دورات شيقة، سيطوّر المتعلمون
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src="/images/The-Managers-Essential-Toolkit-Profile.jpg"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Stack>
              </SwiperSlide>

              <SwiperSlide>
                <Stack
                  direction="row"
                  sx={{
                    backgroundColor: "#FFF",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    maxWidth: "1000px",
                    zIndex: 99,
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
                      اساسيات القياده المهنيه
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "1.8rem",
                        color: "#83939E",
                        textAlign: "right",
                      }}>
                      تم تصميم تخصص أساسيات القيادة المهنية لتزويد القادة الشباب
                      بالمهارات الأساسية اللازمة للتميز في المراحل المبكرة من
                      مسيرتهم المهنية. من خلال ثلاث دورات شيقة، سيطوّر المتعلمون
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src="/public/images/essentials_-_S.png"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Stack>
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              backgroundColor: "#FED04E ",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              color: "#fff",
              textAlign: "right",
              padding: "2rem",
            }}>
            <Typography
              sx={{
                color: "#24343F",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
              variant="h3">
              اصقل مهاراتك العمليّة مع تخصّصات إدراك
            </Typography>
            <Typography
              sx={{
                color: "#24343F",
                fontSize: "1.2rem",
                marginBottom: "2rem",
              }}>
              قم بتطوير مهارة مهنية محددة من خلال سلسلة من الدورات التدريبية
              المترابطة. جسّد أفكارك على أرض الواقع من خلال مشاريع عمليّة واحصل
              على شهادة تخصص لإضافتها إلى سيرتك الذاتية
            </Typography>
            <Button
              sx={{
                borderRadius: "20px",
                color: "#516088",
                backgroundColor: "#FFF",
              }}
              variant="#FFF">
              تصفح التخصصات
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "right", mt: "4rem" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            الدّورات الأكثر طلباً
          </Typography>
          <Typography variant="h6" sx={{ color: "#83939E", m: "0.7rem" }}>
            اختر من أحد هذه الدورات لتطوير مهاراتك في مجالات مختلفة
          </Typography>

          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              mr: "0.7rem",
              borderRadius: "23px",
              "&:hover": {
                color: "#000",
              },
            }}
            href="#contained-buttons">
            تطوير الذات
          </Button>

          <Button
            sx={{
              border: "1px solid #0CA7AA",
              color: "#747A85",
              fontWeight: "bold",
              opacity: "5",
              borderRadius: "23px",
              mr: "0.7rem",
              "&:hover": {
                color: "#000",
              },
            }}
            href="#contained-buttons">
            الاستعداد الزظيفى
          </Button>

          <Button
            sx={{
              borderRadius: "23px",
              backgroundColor: "#0CA7AA",
              color: "#FFF",
              fontWeight: "bold",
            }}
            variant="contained"
            href="#contained-buttons">
            الاعمال والرياده
          </Button>
        </Box>

        <Stack
          direction={"row"}
          sx={{ gap: 4, textAlign: "right", mt: "2rem" }}>
          <Stack
            sx={{
              backgroundColor: "#3459DE",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "310px",
              pb: "2rem",
              textAlign: "right",
              width: "80%",
            }}>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  position: "relative",
                  top: "5rem",
                }}>
                تصفح المذيد من الدورات فى الاعمال والرياده
              </Typography>
              <img
                src="/public/images/arrow.svg"
                alt=""
                style={{
                  transform: "rotate(180deg)",
                  width: "2rem",
                  height: "2rem",
                  cursor: "pointer",
                  position: "relative",
                  top: "6rem",
                  right: "6rem",
                }}
              />
            </Box>
          </Stack>

          <Stack
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "310px",
              pb: "2rem",
              textAlign: "right",
              width: "80%",
            }}>
            <Box sx={{ textAlign: "right" }}>
              <Box>
                <img
                  src="/public/images/Circular-Entrepreneurship-Cover.jpg"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  padding: "2rem",
                  display: "flex",
                  backgroundColor: "#FFF",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#25343F",
                  position: "relative",
                  pb: "5rem",
                }}>
                <Typography
                  sx={{
                    color: "#25343F",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    textAlign: "right",
                  }}
                  variant="h3">
                  رياده الاعمال الدائريه
                </Typography>
                <Button
                  sx={{
                    top: "165px",
                    right: "15px",
                    position: "absolute",
                    backgroundColor: "#E9F6FB",
                    p: "5px 5px",
                    "&:hover": {
                      color: "#25343F",
                    },
                  }}>
                  دورة
                </Button>
              </Box>
            </Box>
          </Stack>

          <Stack
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "310px",
              pb: "2rem",
              textAlign: "right",
              width: "80%",
            }}>
            <Box sx={{ textAlign: "right" }}>
              <Box>
                <img
                  src="/public/images/4.3_R.png"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  padding: "2rem",
                  display: "flex",
                  backgroundColor: "#FFF",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#25343F",
                  position: "relative",
                  pb: "5rem",
                }}>
                <Typography
                  sx={{
                    color: "#25343F",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    textAlign: "right",
                  }}
                  variant="h3">
                  خدمه العملاء-اداره العملاء الرئيسين
                </Typography>
                <Button
                  sx={{
                    top: "165px",
                    right: "15px",
                    position: "absolute",
                    backgroundColor: "#E9F6FB",
                    p: "5px 5px",
                    "&:hover": {
                      color: "#25343F",
                    },
                  }}>
                  دورة
                </Button>
              </Box>
            </Box>
          </Stack>

          <Stack
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: "310px",
              pb: "2rem",
              textAlign: "right",
              width: "80%",
            }}>
            <Box sx={{ textAlign: "right" }}>
              <Box>
                <img
                  src="/public/images/Agile-Project-Management.jpg"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  padding: "2rem",
                  display: "flex",
                  backgroundColor: "#FFF",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#25343F",
                  position: "relative",
                  pb: "5rem",
                }}>
                <Typography
                  sx={{
                    color: "#25343F",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    textAlign: "right",
                  }}
                  variant="h3">
                  ادارة المشاريع باستخدام الاجيال
                </Typography>
                <Button
                  sx={{
                    top: "165px",
                    right: "15px",
                    position: "absolute",
                    backgroundColor: "#E9F6FB",
                    p: "5px 5px",
                    "&:hover": {
                      color: "#25343F",
                    },
                  }}>
                  دورة
                </Button>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Stack direction={"row"} sx={{ gap: 8, mt: "-25rem", width: "100%" }}>
        <Stack direction={"column"}>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              تقدّم مع إدراك
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#516088", mt: "1rem", textAlign: "right" }}>
              انضم إلى مجتمع متعلّمي إدراك لتحدث نقلة نوعية في مسيرتك المهنية من
              خلال البرامج المصمّمة لتزويدك بالمهارات التي تحتاجها لاستكشاف
              طاقاتك <br />
              وإمكانيّاتك الذاتية
            </Typography>
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}>
            <Box sx={{ mt: "1.5rem", textAlign: "right" }}>
              <img src="/public/images/machine.svg" />
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                الجاهزيّة المهنيّة
              </Typography>
              <Typography sx={{ color: "#516088" }}>
                تميّز في سوق العمل بمهاراتك وشغفك للتعلم والتطور.
              </Typography>
            </Box>

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
                تعلّم مجانا أينما كنت وفي أي وقت، عبر حاسوبك الشخصي أو هاتفك
                المتنقل.
              </Typography>
            </Box>

            <Box sx={{ mt: "1.5rem", textAlign: "right" }}>
              <img src="/public/images/user.svg" />
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                محتوى عالي الجودة
              </Typography>
              <Typography sx={{ color: "#516088" }}>
                اكتسب المهارات المطلوبة في سوق العمل مع نخبة من أفضل الخبراء
                والمدربين.
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Box>
          <img
            src="/public/images/learn.webp"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>

      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#FAFBFC",
        }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "25px",
            textAlign: "center",
            justifyContent: "center",
            pt: "5rem",
            color: "#507FB5",
          }}>
          شركاؤنا في النّجاح
        </Typography>
        <Box sx={{ p: "2rem", display: "flex", flexWrap: "wrap" }}>
          <a href="#" style={{ padding: "2rem 1.5rem" }}>
            <img
              src="/public/images/aap-logo-2017-cine.jpg"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: " 1.5rem" }}>
            <img
              src="/public/images/hikma.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/Arab_bank.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/Meta_Logo.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/potash.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/ritlogo.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/VanLeer_short_colour-grey.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/logo_Kingdom_of_the_netherlands.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/JMF-logo.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/Turquoise_Mountain-Logo.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img
              src="/public/images/University_College_London_logo.png"
              height={"50px"}
              width={"auto"}
            />
          </a>
          <a href="#" style={{ padding: "1.5rem" }}>
            <img src="/public/images/AR.png" height={"50px"} width={"auto"} />
          </a>
        </Box>
        <Button
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mb: "3rem",
            border: "1px solid #4D6679",
            width: "50%"
          }}>
          اعرض جميع الشركاء
        </Button>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "#58C0C3",
          textAlign: "center",
          justifyContent: "center",
          p: "70px 0",
          flexDirection: "row",
        }}>
        <Box sx={{ textAlign: "right", padding: "0 60px" }}>
          <Typography
            variant="h2"
            sx={{ color: "#FFF", fontWeight: "bold", pb: "1.5rem" }}>
            موارد التعليم المدرسي
          </Typography>
          <Typography variant="h4" sx={{ color: "#FFF", pb: "1.5rem" }}>
            توفّر منصة إدراك للتعليم المدرسي مواد تعليمية مجانية باللّغة العربية
            لدعم طلبة المدارس من جميع الفئات العمرية.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "20px",
              color: "#000",
            }}>
            تفضل بزيارة منصه التعليم المدرسى K-12
          </Button>
        </Box>

        <Box>
          <img src="/public/images/children.svg" />
        </Box>
      </Stack>

      <Footer />
    </>
  );
};

export default Hero;
