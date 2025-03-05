import "./TodoInput.css"
function TodoInput({formData,onChange, onSubmit, onClick}) {
    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Todo App</legend>
          <div className="container d-flex flex-column gap-1">
            <div className="d-flex gap-1 justify-content-between">
              <button type="button" onClick={onClick} className="btn btn-active text-primary" data-color="orange">free time</button>
              <button type="button" onClick={onClick} className="btn text-primary" data-color="lime">family</button>
              <button type="button" onClick={onClick} className="btn text-primary" data-color="crimson">meeting</button>
              <button type="button" onClick={onClick} className="btn text-primary" data-color="dodgerblue">travel</button>
              <button type="button" onClick={onClick} className="btn text-primary" data-color="chocolate">etc</button>
            </div>
            <input type="text" name="title" value={formData.title} onChange={onChange} placeholder="title here" />
            <textarea rows="5" name="desc" cols="20" placeholder="add a description..." value={formData.desc} onChange={onChange}></textarea>
            <div className="d-flex gap-1 align-items-center justify-content-between">
                <label htmlFor="start-date">시작일</label><input type="date" id="start-date" name="start" value={formData.start} onChange={onChange} className="m-0" />
                <label htmlFor="end-date">종료일</label><input type="date" id="end-end" name="end" value={formData.end} onChange={onChange} className="m-0" />
            </div>
            <div>
              <label>participant</label>
              <input type="number" name="participant" value={formData.participant} max="10" min="0" onChange={onChange} />
            </div>
            <input type="submit" value="등록" />
          </div>
        </fieldset>
      </form>
    )
  } 
export default TodoInput;