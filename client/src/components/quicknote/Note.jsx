import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useState } from "react";

import axios from "axios";
import { Context } from "../../context/Context";

function Note(props) {

  const { user } =  useContext(Context);

  const handleClick = async () => {
    console.log(props.id);
    await axios.delete("/notes/"+props.id)
      .then(res => {
        console.log(res.data);
    });
  }

  return (
    <div className="note">

      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
