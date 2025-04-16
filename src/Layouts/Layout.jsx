import React, { useState } from "react";
import { Box } from "@mui/material";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import ChatHeader from "../components/ChatHeader";
import SidebarMenu from "../components/SidebarMenu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  const [messages, setMessages] = useState([
    { text: "Hey there!", sender: "other" },
    { text: "Hi! How are you?", sender: "me" },
    { text: "I'm doing well, thanks!", sender: "other" },
    { text: "What about you?", sender: "other" },
    { text: "I'm great, just working on some projects.", sender: "me" },
    { text: "That sounds interesting!", sender: "other" },
    { text: "Yeah, it keeps me busy.", sender: "me" },
    { text: "Do you have any plans for the weekend?", sender: "other" },
    { text: "Not yet, maybe just relax and watch some movies.", sender: "me" },
    { text: "Sounds like a good plan!", sender: "other" },
    { text: "What about you? Any plans?", sender: "me" },
    { text: "I'm thinking of going hiking.", sender: "other" },
    { text: "Nice! Where do you plan to go?", sender: "me" },
    { text: "Probably to the mountains nearby.", sender: "other" },
    { text: "That should be fun!", sender: "me" },
    { text: "I hope the weather stays nice.", sender: "other" },
    { text: "Fingers crossed!", sender: "me" },
    { text: "Have you been hiking before?", sender: "me" },
    { text: "Yes, a few times. I really enjoy it.", sender: "other" },
    { text: "That's great! Enjoy your hike!", sender: "me" },
    { text: "Thanks! Have a great weekend!", sender: "other" },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    // Add more chats
  ];
  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setDrawerOpen(false);
  };
  /**
   * Handles sending a new message by adding it to the messages state.
   * The new message is only added if it is not empty.
   * @param {string} newMessage The new message to be sent.
   */
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
      <div className="main-body">
        {/* Chat List Sidebar */}
        <SidebarMenu
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          chats={chats}
          onSelectChat={handleSelectChat}
        />
        <div className="container">
          <div className="content">
            <ChatHeader onToggleDrawer={() => setDrawerOpen(true)} />

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
              {/* <MessageInput onSend={handleSendMessage} /> */}
            </Box>

            <MessageInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
