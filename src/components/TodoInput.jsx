function TodoInput({formData,onChange, onSubmit}) {
    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Todo App</legend>
          <div className="container d-flex flex-column gap-1">
            <input type="text" name="title" value={formData.title} onChange={onChange} placeholder="title here" />
            <textarea rows="5" name="desc" cols="20" placeholder="add a description..." value={formData.desc} onChange={onChange}></textarea>
            <div className="d-flex gap-1 align-items-center justify-content-between">
                <label htmlFor="start-date">시작일</label><input type="date" id="start-date" name="start" value={formData.start} onChange={onChange} className="m-0" />
                <label htmlFor="end-date">종료일</label><input type="date" id="end-end" name="end" value={formData.end} onChange={onChange} className="m-0" />
            </div>
            <input type="submit" value="등록" />
          </div>
        </fieldset>
      </form>
    )
  } 
export default TodoInput;