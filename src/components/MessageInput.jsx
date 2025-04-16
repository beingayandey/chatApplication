import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage(""); // Clear the field after sending
    }
  };

  return (
    <div
      style={{ display: "flex", padding: "8px" }}
      className="message-input-div"
    >
      <TextField
        className="message-input-textfield"
        fullWidth
        label="Type a message..."
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;
