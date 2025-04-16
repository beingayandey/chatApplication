import React from "react";
import { Box } from "@mui/material";
import ChatMessage from "./ChatMessage";

const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      className="message-list-outer"
    >
      {messages.map((msg, idx) => (
        <ChatMessage
          className="message-list-chat"
          key={idx}
          message={msg.text}
          isSender={msg.sender === "me"}
        />
      ))}
    </Box>
  );
};

export default MessageList;
