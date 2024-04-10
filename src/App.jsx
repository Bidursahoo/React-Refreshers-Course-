import "./App.css";
import Post from "./Components/Posts Collection/Post";
import ModalStateHandle from "./Components/Modal/ModalStateHandle";
import MainHeader from "./Components/Header/MainHeader";
import { useState } from "react";

function App() {
  const [visible, setVisibility] = useState(false);
  const close = () => {
    setVisibility(false);
  };
  const open = () => {
    setVisibility(true);
  };
  return (
    <>
      <MainHeader open={open} />
      <ModalStateHandle close={close} visiblility={visible} />
      <h1>Hello World</h1>
      <Post />
    </>
  );
}

export default App;
