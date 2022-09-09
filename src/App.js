import "./App.css";
import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the page loads we need to listen to database and fetch the todos
  useEffect(() => {
    db.collection("todos").orderBy("timestamp",'desc').onSnapshot((snapShot) => {
      setTodos(snapShot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([ input]);
    setInput("");
  };


  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <h1>Hello Clever Programmers 🚀</h1>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button type="submit" disabled={!input} variant="contained">
          Add Todo
        </Button>
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} />;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
