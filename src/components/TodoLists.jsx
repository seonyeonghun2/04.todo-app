import "bootstrap-icons/font/bootstrap-icons.css"
import "./TodoLists.css";
function TodoLists({ todos }) {
  function convertDday(todo) {
    return Math.round(
      (new Date(todo.end).getTime() - new Date(todo.start).getTime()) /
        (1000 * 60 * 60 * 24)
    );
  }
  function convertDate(todo) {
    return new Date(todo.end).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  return (
    <ul className="items">
      {todos.map((todo) => (
        <li key={todo.id} className="item">
          <h2 className="category">{todo.category}</h2>
          <div className="main">
            <h2 className="text-primary text-overflow">{todo.title}</h2>
            <p className="text-secondary">{todo.desc}</p>
          </div>
          <div className="extra d-flex">
            <div className="d-flex gap-1">
              <span className="d-day">D - {convertDday(todo)}</span>
              <span className="end-date">{convertDate(todo)}</span>
            </div>
            <span className="ml-1"><i class="bi bi-people"></i>{todo.participant}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoLists;
