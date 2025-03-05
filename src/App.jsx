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
    category: 'etc',
    start: new Date().toISOString().split("T")[0],
    end: '',
    color: '',
    participant: 0
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
      end: '',
      participant: 0,
      category: 'etc',
      color: ''
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
  function onClick(e){
    // 클릭하면, .btn-active 옮겨지게 (선택한 category가 active하게 처리)
    // console.dir(e.target)
    console.dir(e.target.dataset.color)
    setFormData(prevData => ({
      ...prevData,
      ["category"]: e.target.innerText
    }))
  }
  return (
    <>
      <TodoHeader />
      <TodoInput onChange={onChange} onClick={onClick} onSubmit={onSubmit} formData={formData} />
      <TodoLists todos={todos} />
    </>
  )
}

export default App