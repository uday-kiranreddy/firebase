import { ListItem, ListItemText, List, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import "./Todo.css";
import { db } from "./firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

function Todo(props) {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // updat ethe tod with the input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>i am modal</h1>
          <input
            value={input}
            placeholder={props.todo.todo}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <Button onClick={updateTodo}>update</Button> */}
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Deadline...⏰" />
        </ListItem>
        {/* <button onClick={(e) => setOpen(true)}>Edit</button> */}
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        ></DeleteForeverIcon>
      </List>
    </>
  );
}
export default Todo;
