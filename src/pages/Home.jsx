import { Box, Button, Card, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Popup from "../components/Popup";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
const Home = () => {
  const groups = [
    {
      name: "Group 1",
      createdBy: "1",
      id: "101",
      todos: ["1", "3"],
    },
    {
      name: "Group 2",
      createdBy: "1",
      id: "102",
      todos: ["2"],
    },
  ];
  const todos = [
    {
      title: "Todo 1",
      description: "description 1",
      id: "1",
      status: "active",
      groupId: "101",
    },
    {
      title: "Todo 2",
      description: "description 2",
      id: "2",
      status: "active",
      groupId: "102",
    },
    {
      title: "Todo 3",
      description: "description 3",
      id: "3",
      status: "active",
      groupId: "101",
    },
  ];
  const newTodos = todos.map((todo) => {
    const group = groups.find((group) => group.id === todo.groupId);
    return { ...todo, group: group.name };
  });
  const [open, setOpen] = useState(false);
  const [openedTodo, setOpenedTodo] = useState({});
  const openView = (currentTodo) => {
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
      <Grid className="active-todo-list" container spacing={2}>
        {newTodos.map((todo) => (
          <Grid key={todo.id} item xs={12} sm={6} md={6} lg={4}>
            <Card sx={{ paddingX: 2, paddingY: 1, position: "relative" }}>
              <IconButton className="delete-icon" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <Typography variant="h4">{todo.title}</Typography>
              <Typography variant="h6">{todo.description}</Typography>
              <Typography variant="p">
                <strong>Group: </strong> {todo.group}
              </Typography>
              <Box display="flex" justifyContent="space-between" paddingTop={1}>
                <Button variant="outlined" endIcon={<DoneIcon />}>
                  Mar as Done
                </Button>
                <Button variant="contained" onClick={() => openView(todo)}>
                  Edit Todo
                </Button>
              </Box>
            </Card>
          </Grid>
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
          {openedTodo.description}
        </Typography>
        <h1>status: {openedTodo.status}</h1>
      </Popup>
    </Card>
  );
};

export default Home;
