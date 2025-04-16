import React from "react";
import { Box } from "@mui/material"; // ← this line is important!
import { Paper, Typography } from "@mui/material";

const ChatMessage = ({ message, isSender }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: isSender ? "flex-end" : "flex-start",
        }}
        className="message"
      >
        <Paper
          elevation={3}
          className="message-content"
          sx={{
            p: 1.5,
            bgcolor: isSender ? "#1976d2" : "#e0e0e0",
            color: isSender ? "#fff" : "#000",
            maxWidth: "70%",
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">{message}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ChatMessage;
