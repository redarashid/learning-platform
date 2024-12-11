import { Box, Grid, Typography } from "@mui/material";
import "./CardSlider.css";

const CardSlider = () => {

  return (
    <Grid container spacing={2} justifyContent="space-between" sx={{textAlign: "right"}}>
      {/* الصندوق الأول */}
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Box 1</Typography>
        </Box>
      </Grid>

      {/* الصندوق الثاني */}
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Box 2</Typography>
        </Box>
      </Grid>

      {/* الصندوق الثالث */}
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Box 3</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardSlider;
