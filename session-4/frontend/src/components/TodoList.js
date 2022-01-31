import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import { addTodo, removeTodo, toggleDone } from "../todoManager";

const TodoList = () => {
  const [todos, setTodos] = useState(addTodo([], "first todo"));
  const [content, setContent] = useState("");

  const toggleTodo = (todoId) => {
    setTodos(toggleDone(todos, todoId));
  };

  const todoElements = () => {
    return (
      <div style={{ width: "50%" }}>
        {todos
          .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
          .map((todo) => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {todo.done ? (
                <Typography style={{ textDecorationLine: "line-through" }}>
                  {todo.content}
                </Typography>
              ) : (
                <Typography>{todo.content}</Typography>
              )}
              <div style={{ alignSelf: "flex-end" }}>
                {todo.done ? (
                  <IconButton onClick={() => toggleTodo(todo.id)}>
                    <RemoveDoneIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => toggleTodo(todo.id)}>
                    <DoneIcon />
                  </IconButton>
                )}
                <IconButton
                  onClick={() => setTodos(removeTodo(todos, todo.id))}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          ))}
      </div>
    );
  };
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <Typography variant="h3">Todo List</Typography>
      <TextField
        style={{ width: "50%" }}
        placeholder="eg: finish ML report"
        value={content}
        onChange={(event) => {
          console.log(event.target.value);
          setContent(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            console.log("Enter Pressed");
            setTodos(addTodo(todos, content));
            setContent("");
          }
        }}
      />
      {todoElements()}
    </Box>
  );
};

export default TodoList;
