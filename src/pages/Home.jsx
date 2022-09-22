import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Popup from "../components/Popup";

const Home = () => {
  const todos = [
    {
      title: "Todo 1",
      description: "description 1",
      id: "1",
      status: "active",
    },
    {
      title: "Todo 2",
      description: "description 2",
      id: "2",
      status: "active",
    },
    {
      title: "Todo 3",
      description: "description 3",
      id: "3",
      status: "active",
    },
  ];
  const [open, setOpen] = useState(false);
  const [openedTodo, setOpenedTodo] = useState({});
  const openView = (id) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    setOpenedTodo(currentTodo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setOpenedTodo({});
    }, 100);
  };

  return (
    <Card sx={{ padding: 5 }}>
      <Grid
        container
        alignItems="center"
        marginBottom={2}
        sx={{
          justifyContent: {
            md: "space-between",
          },
          flexDirection: {
            sm: "column",
            md: "row",
          },
        }}
      >
        <Grid item>
          <Typography variant="h4">Active Todos</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">Create Todo</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {todos.map((todo) => (
          <>
            <Grid key={todo.id} item xs={12} sm={6} md={6} lg={4}>
              <Card sx={{ paddingX: 2, paddingY: 1, position: "relative" }}>
                <Typography className="status">{todo.status}</Typography>
                <Typography variant="h4">{todo.title}</Typography>
                <Typography variant="h6">{todo.description}</Typography>
                <Box display="flex" justifyContent="flex-end">
                  <Button onClick={() => openView(todo.id)}>View Todo</Button>
                </Box>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
      <Popup
        className={"view-popup"}
        handleClose={handleClose}
        fullWidth={false}
        open={open}
      >
        <Typography textAlign="center" variant="h4">
          {openedTodo.title}
        </Typography>
        <Typography variant="p" fontSize="20px">
          {" "}
          {openedTodo.description}
        </Typography>
        <h1>status: {openedTodo.status}</h1>
      </Popup>
    </Card>
  );
};

export default Home;
