import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";

const SidebarMenu = ({ open, onClose, chats, onSelectChat }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: 280 }}>
        <Typography variant="h6" p={2}>
          Chats
        </Typography>
        <Divider />
        <List className="chat-list">
          {chats.map((chat) => (
            <ListItem
              className="single-list"
              button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
            >
              {" "}
              <Avatar src="/broken-image.jpg" />
              <ListItemText primary={chat.name} secondary={chat.lastMessage} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SidebarMenu;
