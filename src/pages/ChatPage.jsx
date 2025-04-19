import React from "react";
import { Box } from "@mui/material";
import Avatar from "../components/FloatingAvatar";

const ChatPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Avatar
        avatar="https://avatars.githubusercontent.com/u/133956?v=4"
        size="lg"
        top={50}
        left={50}
        delay={0}
        duration={3}
        xShift={5}
        yShift={5}
      />
    </Box>
  );
};

export default ChatPage;
