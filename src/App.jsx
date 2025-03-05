import React, { useState } from 'react'
import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"
import TodoLists from "./components/TodoLists"
import "./App.css"


function App() {
  const [id, setId] = useState(0);  
  const [todos, setTodos] = useState([])
  const [formData, setFormData] = useState({
    id: id,
    title: '',
    desc: '',
    start: new Date().toISOString().split("T")[0],
    end: ''
  })


  function onSubmit(e){
    e.preventDefault();
    setTodos(prevTodo => ([
      ...prevTodo, {
      ...formData,
      id: id
    }]))
    setId(prevId => prevId + 1);
    setFormData({
      title: '',
      desc: '',
      start: new Date().toISOString().split("T")[0],
      end: ''
    })
  }
  function onChange(e) {
    const {name, value} = e.target; // 이벤트 발생 객체의 name 속성, value 속성
    // 각 입력값 항목에서 change 이벤트 발생(=값 변경)
    // name을 기준으로 formData의 특정 키 값을 변경
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <>
      <TodoHeader />
      <TodoInput onChange={onChange} onSubmit={onSubmit} formData={formData} />
      <TodoLists todos={todos} />
    </>
  )
}

export default App