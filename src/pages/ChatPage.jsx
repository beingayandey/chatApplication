import React, { useState } from "react";
import { Box } from "@mui/material";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import SidebarMenu from "../components/SidebarMenu";

const ChatPage = ({ drawerOpen, setDrawerOpen, containerRef }) => {
  const [messages, setMessages] = useState([
    { text: "Hey there!", sender: "other" },
    { text: "Hi! How are you?", sender: "me" },
  ]);
  const [activeChatId, setActiveChatId] = useState("1");
  const chats = [
    {
      id: "1",
      name: "Alice",
      lastMessage: "See you soon!",
      avatar: "",
      time: "12:32 PM",
    },
    {
      id: "2",
      name: "Bob",
      lastMessage: "Got it!",
      avatar: "",
      time: "11:18 AM",
    },
  ];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setDrawerOpen(false);
  };

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: "me" },
      ]);
    }
  };

  return (
    <>
      <SidebarMenu
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        chats={chats}
        onSelectChat={handleSelectChat}
        container={containerRef.current} // Pass the DOM element
      />
      <div className="content">
        <Box
          className="message-list"
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, overflowY: "auto" }}>
            <MessageList messages={messages} />
          </Box>
        </Box>
        <MessageInput onSend={handleSendMessage} />
      </div>
    </>
  );
};

export default ChatPage;
