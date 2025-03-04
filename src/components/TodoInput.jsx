function TodoInput({startDate, endDate, title, onTitleChange, description, onDescChange, onStartDateChange, onEndDateChange, onSubmit}) {
    console.log("넘어온 title : ", title)
    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Todo App</legend>
          <div className="container d-flex flex-column gap-1">
            <input type="text" value={title} onChange={(e) => onTitleChange(e.target.value)} />
            <textarea rows="5" cols="20" placeholder="add a description..." value={description} onChange={(e) => onDescChange(e.target.value)}></textarea>
            <div className="d-flex gap-1 align-items-center justify-content-between">
                <label htmlFor="start-date">시작일</label><input type="date" id="start-date" value={startDate} onChange={(e) => onStartDateChange(e.target.value) } className="m-0" />
                <label htmlFor="end-date">종료일</label><input type="date" id="end-end" value={endDate} onChange={(e) => onEndDateChange(e.target.value) } className="m-0" />
            </div>
            <input type="submit" value="등록" />
          </div>
        </fieldset>
      </form>
    )
  } 
export default TodoInput;