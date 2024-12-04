import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2} mt={3}>
        <Button
          sx={{ borderRadius: "20px" }}
          color="success"
          variant="contained"
          href="#contained-buttons">
          سجل مجانا
        </Button>
        <Button
          sx={{ border: "1px solid #2e7d32", borderRadius: "20px" }}
          href="#contained-buttons">
          دخول
        </Button>
        <Button
          sx={{ border: "1px solid #2e7d32", borderRadius: "20px" }}
          href="#contained-buttons">
          En
        </Button>
      </Stack>
    </Container>
  );
};

export default Header;
