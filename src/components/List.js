import React, { useRef } from "react";

export default function List({ id, title, completed, todoData, setTodoData, provided, snapshot }) {
	// 삭제
	const handleClick = (id) => {
		let newTodoData = todoData.filter((data) => data.id !== id);
		setTodoData(newTodoData);
	};
	// 완료여부 false/true
	const handleCompleChange = (id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		setTodoData(newTodoData);
	};

	return (
		<li key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={snapshot.isDragging ? "selected" : "not-selected"}>
			<input type="checkbox" onChange={() => handleCompleChange(id)} defaultChecked={completed} className={completed ? "check-true" : ""} id={"input" + id} />
			<label for={"input" + id}>{title}</label>
			<button onClick={() => handleClick(id)}>
				<span className="a11y-hidden">삭제</span>
			</button>
		</li>
	);
}
