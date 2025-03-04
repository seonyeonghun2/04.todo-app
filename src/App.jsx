import React, { useState } from 'react'
import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"
import TodoLists from "./components/TodoLists"
import "./App.css"


function App() {
  const [idx, setIdx] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  
  function onSubmit(e){
    e.preventDefault();
    // setTodos(prevTodos => [...prevTodos, {
    //   id: idx,
    //   subject: title,
    //   desc: description,
    //   start: startDate,
    //   end: endDate
    // }])    
  }
  function onTitleChange(e) {
    setTitle(e.target.value)
  }
  function onDescChange(e) {
    setDescription(e.target.value)
  }
  function onStartDateChange(e) {
    setStartDate(new Date())
  }
  function onEndDateChange(e) {
    setEndDate(e.target.value)
  }
  return (
    <>
      <TodoHeader />
      <TodoInput onTitleChange={onTitleChange} onDescChange={onDescChange} onStartDateChange={onStartDateChange} onEndDateChange={onEndDateChange} onSubmit={onSubmit} title={title} description={description} startDate={startDate} endDate={endDate} />
      <TodoLists />
    </>
  )
}

export default App