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
    category: '',
    start: new Date().toISOString().split("T")[0],
    end: '',
    color: '',
    participant: "0"
  })


  function onSubmit(e){
    e.preventDefault();
    // 폼 입력이 없는데, Todos가 등록되는 것을 막기
    // 1. 폼의 required 속성 추가 ==> 필수 입력, 입력 없으면 경고처리
    // 2. state 값이 빈값인지 조건식으로 확인 ==> 경고(alert) 처리 하거나..
    if(formData.color === "") {
      alert("카테고리를 선택하세요!");
      return;
    }
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
      participant: "0",
      category: '',
      color: ''
    })
  }
  function onChange(e) {
    // 제목의 길이가 몇자 이상인지 (value.length 를 검사해서 alert 처리하거나)
    const {name, value} = e.target; // 이벤트 발생 객체의 name 속성, value 속성
    // 각 입력값 항목에서 change 이벤트 발생(=값 변경)
    // name을 기준으로 formData의 특정 키 값을 변경
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  function onDelete(todoId){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }
  function onClick(e){
    // 클릭하면, .btn-active 옮겨지게 (선택한 category가 active하게 처리)
    // console.dir(e.target)
    setFormData(prevData => ({
      ...prevData,
      ["category"]: e.target.innerText,
      ["color"]: e.target.dataset.color
    }))
  }
  function onClickMore(e){
    e.target.previousElementSibling.classList.toggle("d-none")
  }
  return (
    <>
      <TodoHeader />
      <TodoInput onChange={onChange} onClick={onClick} onSubmit={onSubmit} formData={formData} />
      <TodoLists todos={todos} onClickMore={onClickMore} onDelete={onDelete} />
    </>
  )
}

export default App