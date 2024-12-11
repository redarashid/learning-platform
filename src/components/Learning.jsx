import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const Learning = () => {
  return (
    <div>
      <NavBar />

      <Stack>
        <Box
          sx={{
            backgroundColor: "#059A6D",
            width: "100%",
            height: "250px",
            paddingTop: "95px",
            paddingBottom: "95px",
            textAlign: "right",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box sx={{ paddingRight: "70px", paddingTop: "70px" }}>
            <Button
              variant="#FFF"
              sx={{
                color: "#D7AE7F",
                backgroundColor: "#FBF8EC",
                marginBottom: "10px",
              }}>
              تخصص
            </Button>
            <Typography
              variant="h2"
              sx={{
                color: "#FFF",
                fontWeight: "bold",
                paddingBottom: "5px",
              }}>
              أدوات القيادة الأساسية
            </Typography>
            <Typography sx={{ color: "#FFF", fontSize: "25px" }}>
              برنامج أدوات القيادة الأساسية يمكّن المديرين من اكتساب المهارات
              اللازمة
              <br /> لقيادة الفرق، إدارة المشاريع، وتحقيق النجاح المؤسسي بكفاءة
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            textAlign: "right",
            justifyContent: "flex-start",
            gap: 2,
            cursor: "pointer",
            direction: "rtl",
            padding: " 10px 70px",
            color: "#4C6373",
            borderBottom: "1px solid #E6ECEC",
          }}>
          <Typography
            sx={{
              position: "relative",
              "&:hover": {
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "1px",
                  backgroundColor: "#059A6D",
                  width: "100%",
                  borderBottom: "4px",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "1px",
                backgroundColor: "transparent",
                width: "100%",
                transition: "background-color 0.3s ease",
              },
            }}>
            الوصف
          </Typography>

          <Typography
            sx={{
              position: "relative",
              bottom: "3px",
              "&:hover": {
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "1px",
                  backgroundColor: "#059A6D",
                  width: "100%",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "1px",
                backgroundColor: "transparent",
                width: "100%",
                transition: "background-color 0.3s ease",
              },
            }}>
            ماذا ستتعلم
          </Typography>
          <Typography
            sx={{
              position: "relative",
              "&:hover": {
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "1px",
                  backgroundColor: "#059A6D",
                  width: "100%",
                },
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "1px",
                backgroundColor: "transparent",
                width: "100%",
                transition: "background-color 0.3s ease",
              },
            }}>
            مقدمو البرامج
          </Typography>
        </Box>

        <Box
          sx={{
            direction: "rtl",
            textAlign: "right",
            justifyContent: "flex-start",
            padding: " 10px 70px",
            marginBottom: "4vh",
          }}>
          <Typography
            variant="h2"
            sx={{ padding: "15px 0", fontSize: "25px", fontWeight: "bold" }}>
            الوصف
          </Typography>
          <Typography
            sx={{
              maxWidth: "700px",
              fontSize: "20px",
              color: "#4D6679",
              paddingBottom: "7px",
            }}>
            يهدف البرنامج التخصصي أدوات القيادة الأساسية إلى تمكين المديرين
            الحاليين والطموحين <br />
            من اكتساب المهارات الأساسية اللازمة لقيادة الفرق وتحقيق النجاح
            المؤسسي.
            <br /> يتكون البرنامج من ثلاثة دورات أساسية:
          </Typography>
          <Typography sx={{ color: "#9CA297", paddingBottom: "15px" }}>
            ادارة المشاريع باسلوب اجيال - تعرف على مبادئ المرونه لتنفيذ المشاريع
            بكفائه
          </Typography>
          <Button
            sx={{
              borderRadius: "25px",
              color: "#000",
              border: "1px solid #000",
              padding: "10px 15px",
            }}
            variant="outlined">
            أقرا المزيد
          </Button>
        </Box>

        <Box
          sx={{
            direction: "rtl",
            textAlign: "right",
            justifyContent: "flex-start",
            padding: "10px 70px",
            marginBottom: "4vh",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // يجعل النص والسهم بمحاذاة عمودية
              gap: "10px", // مسافة بين السهم والنص
              padding: "15px 0",
            }}>
            <Typography
              variant="h2"
              sx={{ fontSize: "25px", fontWeight: "bold" }}>
              ماذا ستتعلم
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}>
            <ArrowForwardIosIcon
              sx={{
                color: "#059A6D",
                fontSize: "20px",
                transform: "rotate(180deg)",
                justifyContent: "center",
                padding: "8px 8px",
              }}
            />
            <Typography
              sx={{
                maxWidth: "700px",
                fontSize: "23px",
                color: "#4D6679",
                paddingBottom: "7px",
              }}>
              تطبيق مبادئ إدارة المشاريع بأسلوب أجايل لتنفيذ المشاريع بكفاءة في
              بيئات <br />
              ديناميكية.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}>
            <ArrowForwardIosIcon
              sx={{
                color: "#059A6D",
                fontSize: "20px",
                transform: "rotate(180deg)",
                justifyContent: "center",
                padding: "8px 8px",
              }}
            />
            <Typography
              sx={{
                maxWidth: "700px",
                fontSize: "23px",
                color: "#4D6679",
                paddingBottom: "7px",
              }}>
              تحليل التحديات التنظيمية لتطوير خطط استراتيجية تتماشى مع الأهداف
              طويلة <br />
              المدى.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}>
            <ArrowForwardIosIcon
              sx={{
                color: "#059A6D",
                fontSize: "20px",
                transform: "rotate(180deg)",
                justifyContent: "center",
                padding: "8px 8px",
              }}
            />
            <Typography
              sx={{
                maxWidth: "700px",
                fontSize: "23px",
                color: "#4D6679",
                paddingBottom: "7px",
              }}>
              تقييم سيناريوهات اتخاذ القرار لاختيار الحلول الأكثر فعالية في
              سياقات الأعمال <br />
              المعقدة.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}>
            <ArrowForwardIosIcon
              sx={{
                color: "#059A6D",
                fontSize: "20px",
                transform: "rotate(180deg)",
                justifyContent: "center",
                padding: "8px 8px",
              }}
            />
            <Typography
              sx={{
                maxWidth: "700px",
                fontSize: "23px",
                color: "#4D6679",
                paddingBottom: "7px",
              }}>
              تصميم استراتيجيات عملية تدمج بين قيادة الفرق، تنفيذ المشاريع،
              وتحقيق أهداف النمو <br />
              المستدام.
            </Typography>
          </Box>

          <Box sx={{ marginTop: "7vh" }}>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}>
              الدورات المشمولة في التخصص
            </Typography>
            <Typography sx={{ padding: "15px 0", color: "#9CA297" }}>
              هذا التخصص يحتوي على الدورات التالية:
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                gap: 3,
                flexWrap: "wrap",
                width: "70%",
                marginBottom: "8vh",
              }}>
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
                        top: "140px",
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
                      src="/images/Decision-Making-in-the-Business-World.jpg"
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
                      اتخاذ القررات فى عالم الاعمال
                    </Typography>
                    <Button
                      sx={{
                        top: "140px",
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
                      src="/images/Strategic-Planning-Basics.jpg"
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
                      اساسيات التخطيط الاستراتيجى
                    </Typography>
                    <Button
                      sx={{
                        top: "140px",
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
          </Box>

          <Typography
            sx={{ fontSize: "27px", fontWeight: "bold", marginBottom: "5vh" }}>
            رعاة البرنامج
          </Typography>

          <Box
            sx={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              width: "150px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "5px 10px",
              cursor: "pointer",
              marginBottom: "5vh",
            }}>
            <img src="/public/images/Arab_bank.png" width={"95%"} />
          </Box>

          <Stack
            sx={{
              padding: "60px 90px",
              backgroundColor: "#059A6D",
              width: "500px",
              borderRadius: "8px",
              marginBottom: "10vh",
            }}>
            <Box sx={{ textAlign: "center", color: "#FFF" }}>
              <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                جاهز لتبدأ رحلة التعلم؟
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                سجّل الآن وابدأ رحلة العِلم إلى العَمل:
              </Typography>
              <Button
                sx={{
                  color: "#000",
                  border: "1px solid #FFF",
                  borderRadius: "25px",
                  backgroundColor: "#FFF",
                  fontSize: "15px",
                  padding: "8px 13px",
                  marginTop: "4vh",
                  "&:hover": {
                    backgroundColor: "#FBF8EC",
                  },
                }}>
                أنضم الان
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>

      <Box
        sx={{
          borderRadius: "12px",
          top: "-2000px",
          position: "relative",
          right: "400px",
        }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            overflow: "hidden",
            maxWidth: "400px",
            margin: "auto",
            textAlign: "right",
          }}>
          {/* الصورة */}
          <Box
            sx={{
              backgroundColor: "#F9A825",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
            }}>
            <img
              src="/images/managers.jpg"
              alt="Course"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* النصوص */}
          <Box
            sx={{
              padding: "30px 50px",
              textAlign: "right",
              justifyContent: "flex-start",
            }}>
            <Box sx={{ padding: "1rem", textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#434343",
                  textAlign: "right",
                }}>
                يمكنك البدء بالتعلّم الآن برنامج تعلّم ذاتي
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#32414B",
                  textAlign: "right",
                }}>
                درجة الصعوبة:
              </Typography>

              {/* خيارات درجة الصعوبة */}
              <Stack direction="row" justifyContent="center" spacing={1}>
                <Box
                  sx={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#E3F2FD",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "#1E88E5",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}>
                  سهل
                </Box>
                <Box
                  sx={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#FFF3E0",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "#FB8C00",
                    fontWeight: "bold",
                  }}>
                  متوسط
                </Box>
                <Box
                  sx={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#FCE4EC",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "#D81B60",
                    fontWeight: "bold",
                  }}>
                  متقدم
                </Box>
              </Stack>

              {/* النقاط السفلية */}
              <Stack
                direction="column"
                spacing={0.5}
                sx={{ marginTop: "1rem", color: "#666", textAlign: "right" }}>
                <Typography variant="body2">محتوى متاح دائماً</Typography>
                <Typography variant="body2">اختبارات تقييمية</Typography>
                <Typography variant="body2">شهادة إتمام</Typography>
              </Stack>
            </Box>

            {/* زر الانضمام */}
            <Box sx={{ padding: "1rem", textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#059A6D",
                  color: "#fff",
                  padding: "0.5rem 6rem",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#00B041" },
                }}>
                انضم الآن
              </Button>
              <Typography
                variant="caption"
                sx={{ display: "block", marginTop: "0.5rem", color: "#666" }}>
                انضم لآلاف المتعلمين
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Learning;
