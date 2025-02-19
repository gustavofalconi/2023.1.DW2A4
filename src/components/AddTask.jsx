import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    if (inputData.trim() !== "") {
      handleTaskAddition(inputData);
      setInputData("");
    } else {
      alert("O campo não pode estar vazio");
    }
  }

  return (
    <div className="add-task-container">
      <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;
