import React from "react";
import { Grid, Avatar, Typography, Box } from "@mui/material";

const friends = [
  { id: 1, name: "Alice", avatar: "/avatars/alice.png" },
  { id: 2, name: "Bob", avatar: "/avatars/bob.png" },
  { id: 3, name: "Carol", avatar: "/avatars/carol.png" },
  { id: 4, name: "Dave", avatar: "/avatars/dave.png" },
  { id: 5, name: "Eve", avatar: "/avatars/eve.png" },
];

const FriendList = () => {
  return (
    <Box sx={{ px: 2, mt: 2 }}>
      <Grid container spacing={2} justifyContent="space-between">
        {friends.map((friend) => (
          <Grid item xs={4} sm={3} md={2.4} lg={2.4} key={friend.id}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={friend.avatar} sx={{ width: 64, height: 64 }} />
              <Typography variant="body2" mt={1}>
                {friend.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FriendList;
