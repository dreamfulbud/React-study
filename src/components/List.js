import React, { useState } from "react";

export default function List({ todoData, setTodoData }) {
	const btnStyle = {
		color: "#fff",
		border: "none",
		padding: "5px 9px",
		borderRadius: "50%",
		cursor: "pointer",
		float: "right",
	};

	const listStyle = (completed) => {
		return {
			padding: "10px",
			borderBottom: "1px dotted #ddd",
			textDecoration: completed ? "line-through" : "none",
		};
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

	// 삭제
	const handleClick = (id) => {
		let newTodoData = todoData.filter((data) => data.id !== id);
		setTodoData(newTodoData);
	};

	return (
		<>
			{todoData.map((data) => (
				<>
					<li style={listStyle(data.completed)} key={data.id}>
						<input type="checkbox" onChange={() => handleCompleChange(data.id)} defaultChecked={data.completed} id={"input" + data.id} />
						<label for={"input" + data.id}>{data.title}</label>
						<button style={btnStyle} onClick={() => handleClick(data.id)}>
							x
						</button>
					</li>
				</>
			))}
		</>
	);
}
