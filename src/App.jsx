import "./App.css";
import Post from "./Components/Posts Collection/Post";
import ModalStateHandle from "./Components/Modal/ModalStateHandle";
import MainHeader from "./Components/Header/MainHeader";
import { useState } from "react";
import arrayOfPosts from "./Data/ArrayOfList";
function App() {
  const [visible, setVisibility] = useState(false);
  const [postArray, setpostArray] = useState(arrayOfPosts);
  const addPost = (post) => {
    setpostArray([...postArray, post]);
  };
  const close = () => {
    setVisibility(false);
  };
  const open = () => {
    setVisibility(true);
  };
  return (
    <>
      <MainHeader open={open} />
      <ModalStateHandle close={close} visiblility={visible} add={addPost} />
      <h1>Hello World</h1>
      <Post arrayOfPost={postArray} />
    </>
  );
}

export default App;
