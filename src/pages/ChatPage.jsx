import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";

// Your avatar list - Replace with your actual user data
const avatarList = [
  { id: 1, avatar: "/avatars/1.jpg" },
  { id: 2, avatar: "/avatars/2.jpg" },
  { id: 3, avatar: "/avatars/3.jpg" },
  { id: 4, avatar: "/avatars/4.jpg" },
  { id: 5, avatar: "/avatars/5.jpg" },
  { id: 6, avatar: "/avatars/6.jpg" },
];

const sizeMap = {
  xs: 40,
  sm: 60,
  md: 80,
  lg: 100,
};

const sizeVariants = ["xs", "sm", "md", "lg"];

const ChatPage = () => {
  const [floatingAvatars, setFloatingAvatars] = useState([]);

  useEffect(() => {
    const prepared = avatarList.map((user) => ({
      ...user,
      size: sizeVariants[Math.floor(Math.random() * sizeVariants.length)],
      top: Math.random() * 80 + 5,
      left: Math.random() * 80 + 5,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    }));
    setFloatingAvatars(prepared);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "#fefefe",
      }}
    >
      {floatingAvatars.map((user) => (
        <Box
          key={user.id}
          sx={{
            position: "absolute",
            top: `${user.top}%`,
            left: `${user.left}%`,
            animation: `floatAnim ${user.duration}s ease-in-out infinite`,
            animationDelay: `${user.delay}s`,
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              width: sizeMap[user.size],
              height: sizeMap[user.size],
              border: "2px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
      ))}

      <style>{`
        @keyframes floatAnim {
          0%   { transform: translate(0, 0); }
          50%  { transform: translate(-20px, 20px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </Box>
  );
};

export default ChatPage;
