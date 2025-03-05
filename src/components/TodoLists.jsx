import classNames from "classnames";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TodoLists.css";
function TodoLists({ todos, onClickMore, onDelete }) {
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
          <h2 className={classNames("category", todo.color)}>
            {todo.category}
          </h2>
          <div className={classNames("main", "position-relative", todo.color)}>
            <h2 className="text-primary text-overflow title">{todo.title}</h2>
            <p className="text-secondary desc">{todo.desc}</p>
            <div className="btn-group position-absolute">
              <button className="btn-transparent text-primary" onClick={() => onDelete(todo.id)}>
                <i className="bi bi-trash3"></i>
              </button>
              <button className="btn-transparent text-primary">
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
            <button
              className="more-btn btn-transparent position-absolute text-secondary"
              onClick={onClickMore}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </div>
          <div className="extra d-flex">
            <div className="d-flex gap-1">
              <span className="d-day">
                <i className="bi bi-calendar-week"></i>D-{convertDday(todo)}
              </span>
              <span className="end-date">
                <i className="bi bi-pin-angle"></i> {convertDate(todo)}
              </span>
            </div>
            <span className="ml-1">
              <i className="bi bi-people"></i> {todo.participant}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoLists;
