// import { Box, Stack, Button, Grid2, Typography } from "@mui/material";
// import "./CardSlider.css";

// const CardSlider = () => {
//   return (
//     <Grid2 sx={{gap: 2}}>

//       <Stack
//         sx={{
//           backgroundColor: "#FFF",
//           boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           borderRadius: "10px",
//           overflow: "hidden",
//           maxWidth: "310px",
//           pb: "2rem",
//           textAlign: "right",
//           width: "80%",
//         }}>
//         <Box sx={{ textAlign: "right" }}>
//           <Box>
//             <img
//               src="/public/images/Agile-Project-Management.jpg"
//               style={{
//                 objectFit: "contain",
//                 width: "100%",
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               padding: "2rem",
//               display: "flex",
//               backgroundColor: "#FFF",
//               flexDirection: "column",
//               justifyContent: "center",
//               color: "#25343F",
//               position: "relative",
//               pb: "5rem",
//             }}>
//             <Typography
//               sx={{
//                 color: "#25343F",
//                 fontSize: "1.5rem",
//                 marginBottom: "1rem",
//                 textAlign: "right",
//               }}
//               variant="h3">
//               ادارة المشاريع باستخدام الاجيال
//             </Typography>
//             <Button
//               sx={{
//                 top: "140px",
//                 right: "15px",
//                 position: "absolute",
//                 backgroundColor: "#E9F6FB",
//                 p: "5px 5px",
//                 "&:hover": {
//                   color: "#25343F",
//                 },
//               }}>
//               دورة
//             </Button>
//           </Box>
//         </Box>
//       </Stack>

//       <Stack
//         sx={{
//           backgroundColor: "#FFF",
//           boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           borderRadius: "10px",
//           overflow: "hidden",
//           maxWidth: "310px",
//           pb: "2rem",
//           textAlign: "right",
//           width: "80%",
//         }}>
//         <Box sx={{ textAlign: "right" }}>
//           <Box>
//             <img
//               src="/public/images/Agile-Project-Management.jpg"
//               style={{
//                 objectFit: "contain",
//                 width: "100%",
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               padding: "2rem",
//               display: "flex",
//               backgroundColor: "#FFF",
//               flexDirection: "column",
//               justifyContent: "center",
//               color: "#25343F",
//               position: "relative",
//               pb: "5rem",
//             }}>
//             <Typography
//               sx={{
//                 color: "#25343F",
//                 fontSize: "1.5rem",
//                 marginBottom: "1rem",
//                 textAlign: "right",
//               }}
//               variant="h3">
//               ادارة المشاريع باستخدام الاجيال
//             </Typography>
//             <Button
//               sx={{
//                 top: "140px",
//                 right: "15px",
//                 position: "absolute",
//                 backgroundColor: "#E9F6FB",
//                 p: "5px 5px",
//                 "&:hover": {
//                   color: "#25343F",
//                 },
//               }}>
//               دورة
//             </Button>
//           </Box>
//         </Box>
//       </Stack>

//       <Stack
//         sx={{
//           backgroundColor: "#FFF",
//           boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           borderRadius: "10px",
//           overflow: "hidden",
//           maxWidth: "310px",
//           pb: "2rem",
//           textAlign: "right",
//           width: "80%",
//         }}>
//         <Box sx={{ textAlign: "right" }}>
//           <Box>
//             <img
//               src="/public/images/Agile-Project-Management.jpg"
//               style={{
//                 objectFit: "contain",
//                 width: "100%",
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               padding: "2rem",
//               display: "flex",
//               backgroundColor: "#FFF",
//               flexDirection: "column",
//               justifyContent: "center",
//               color: "#25343F",
//               position: "relative",
//               pb: "5rem",
//             }}>
//             <Typography
//               sx={{
//                 color: "#25343F",
//                 fontSize: "1.5rem",
//                 marginBottom: "1rem",
//                 textAlign: "right",
//               }}
//               variant="h3">
//               ادارة المشاريع باستخدام الاجيال
//             </Typography>
//             <Button
//               sx={{
//                 top: "140px",
//                 right: "15px",
//                 position: "absolute",
//                 backgroundColor: "#E9F6FB",
//                 p: "5px 5px",
//                 "&:hover": {
//                   color: "#25343F",
//                 },
//               }}>
//               دورة
//             </Button>
//           </Box>
//         </Box>
//       </Stack>
//     </Grid2>
//   );
// };

// export default CardSlider;

import React from "react";
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
      title: "The Future of Web Development",
      description:
        "Exploring the latest trends and technologies shaping the future of web development. From WebAssembly to Edge Computing, discover what's next in the world of web technologies.",
      image: "images.unsplash.com/photo-1504639725590-34d0984388bd",
      author: {
        name: "John Developer",
        avatar: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      description:
        "A comprehensive guide to React Hooks. Learn how to write cleaner, more efficient React components using the power of Hooks.",
      image: "images.unsplash.com/photo-1533922922960-9fceb9ef4733",
      author: {
        name: "Sarah Code",
        avatar: "images.unsplash.com/photo-1438761681033-6461ffad8d80",
      },
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "UI/UX Best Practices",
      description:
        "Essential UI/UX design principles for creating user-friendly interfaces. Learn how to enhance user experience through effective design patterns.",
      image: "images.unsplash.com/photo-1516321318423-f06f85e504b3",
      author: {
        name: "Mike Design",
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
                        <Typography variant="subtitle2">
                          {post.author.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <BsCalendar style={{ marginRight: "4px" }} />
                        <time dateTime={post.date}>
                          <Typography variant="caption">
                            {new Date(post.date).toLocaleDateString("en-US", {
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
