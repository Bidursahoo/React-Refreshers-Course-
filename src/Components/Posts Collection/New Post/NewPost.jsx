import classes from "./NewPost.module.css";
import styleFromModal from "../../Modal/Modal.module.css";
function NewPost(props) {
  return (
    <div className={styleFromModal.backdrop}>
      <form className={[classes.form]}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
            onChange={props.dataChange}
          />
        </p>
        <p>
          <label htmlFor="name">Your title</label>
          <input
            type="text"
            id="name"
            name="title"
            required
            onChange={props.dataChange}
          />
        </p>
        <button onClick={props.insert}>Insert</button>
        <button onClick={props.cancle}>Cancle</button>
        <button onClick={props.close}>Close</button>

      </form>
    </div>
  );
}

export default NewPost;
