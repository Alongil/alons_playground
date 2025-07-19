import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Hi user
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
