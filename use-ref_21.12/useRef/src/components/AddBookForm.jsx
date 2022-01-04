import { isValidElement, useEffect, useRef, useState } from "react";

const AddBookForm = () => {
  const [disabled, setDisabled] = useState(true);

  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const pagesRef = useRef(null);

  const isValid = () => {
    return(
      !titleRef.current.value ||
      !authorRef.current.value ||
      !pagesRef.current.value
    )
  };

  
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log(titleRef.current.value);
          console.log(authorRef.current.value);
          console.log(pagesRef.current.value);
        }}
      >
        <input
          ref={titleRef}
          type="text"
          placeholder="input title"
          onChange={() => setDisabled(isValid)}
        />
        <br />
        <br />
        <input
          ref={authorRef}
          type="text"
          placeholder="input author"
          onChange={() => setDisabled(isValid)}
        />
        <br />
        <br />
        <input
          ref={pagesRef}
          type="number"
          placeholder="input pages"
          onChange={() => setDisabled(isValid)}
        />
        <br />
        <br />
        <input type="submit" value={"Add Book"} disabled={disabled} />
      </form>
    </div>
  );
};

export default AddBookForm;
