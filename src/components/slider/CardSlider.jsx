import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Grid,
  CardActionArea,
  styled,
} from "@mui/material";
import { BsCalendar } from "react-icons/bs";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
  },
}));

const BlogCard = () => {
  const blogPosts = [
    {
      id: 1,
      title: "مستقبل تطوير الويب",
      description:
        "استكشاف أحدث الاتجاهات والتقنيات التي تشكل مستقبل تطوير الويب. من WebAssembly إلى الحوسبة الطرفية، اكتشف ما هو قادم في عالم تقنيات الويب.",
      image: "images.unsplash.com/photo-1504639725590-34d0984388bd",
      author: {
        name: "جون ديفيلوبر",
        avatar: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "إتقان React Hooks",
      description:
        "دليل شامل لـ React Hooks. تعلم كيفية كتابة مكونات React بشكل أنظف وأكثر كفاءة باستخدام قوة الـ Hooks.",
      image: "images.unsplash.com/photo-1533922922960-9fceb9ef4733",
      author: {
        name: "سارة كود",
        avatar: "images.unsplash.com/photo-1438761681033-6461ffad8d80",
      },
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "أفضل ممارسات UI/UX",
      description:
        "مبادئ تصميم UI/UX الأساسية لإنشاء واجهات سهلة الاستخدام. تعلم كيفية تعزيز تجربة المستخدم من خلال أنماط التصميم الفعالة.",
      image: "images.unsplash.com/photo-1516321318423-f06f85e504b3",
      author: {
        name: "مايك ديزاين",
        avatar: "images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      date: "2024-01-05",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <article>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://${post.image}`}
                    alt={post.title}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        textAlign: "right", // محاذاة النص إلى اليمين
                      }}>
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        textAlign: "right", // محاذاة النص إلى اليمين
                      }}>
                      {post.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={`https://${post.author.avatar}`}
                          alt={post.author.name}
                          sx={{ width: 32, height: 32, mr: 1 }}
                        />
                        <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
                          {post.author.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <BsCalendar style={{ marginRight: "4px" }} />
                        <time dateTime={post.date}>
                          <Typography variant="caption" sx={{ textAlign: "right" }}>
                            {new Date(post.date).toLocaleDateString("ar-EG", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Typography>
                        </time>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </article>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogCard;
