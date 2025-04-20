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

const SidebarMenu = ({ open, onClose, chats, onSelectChat, container }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      container={container} // Pass the DOM element directly
      ModalProps={{ keepMounted: true }} // Optimize for mobile
      className="chat-history-drawer"
      sx={{ "& .MuiDrawer-paper": { width: { xs: "80vw", sm: 280 } } }} // Responsive width
    >
      <div>
        <Typography variant="h6" p={2}>
          Recent Chats
        </Typography>
        <Divider />
        <List className="chat-list">
          {chats.map((chat) => (
            <ListItem
              className="single-list"
              button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              aria-label={`Select chat with ${chat.name}`}
            >
              <Avatar
                src={chat.avatar || "/default-avatar.png"}
                alt={chat.name}
                sx={{ mr: 2 }}
              />
              <ListItemText
                primary={chat.name}
                secondary={chat.lastMessage}
                primaryTypographyProps={{ noWrap: true }}
                secondaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SidebarMenu;
