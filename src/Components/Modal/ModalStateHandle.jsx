import React, { useState } from "react";
import Modal from "./Modal";
import NewPost from "../Posts Collection/New Post/NewPost";
import arrayOfPosts from "../../Data/ArrayOfList";

const ModalStateHandle = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const add = () => {
    props.add(formData);
  };
  const cancleBtn = () => {
    setFormData({
      title: "",
      body: "",
    });
  };

  return (
    <>
      {props.visiblility && (
        <Modal>
          <NewPost
            dataChange={handleDataChange}
            cancle={cancleBtn}
            close={props.close}
            add={add}
          />
        </Modal>
      )}
    </>
  );
};

export default ModalStateHandle;
