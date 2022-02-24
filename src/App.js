import React, { useState } from "react";
import "./App.css";
//클래스형
export default function App() {
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

	const [todoData, setTodoData] = useState([
		{
			id: "1",
			title: "공부하기",
			completed: true,
		},
		{
			id: "2",
			title: "청소하기",
			completed: false,
		},
		{
			id: "3",
			title: "운동하기",
			completed: false,
		},
	]);
	const [value, setValue] = useState("");

	const handleClick = (id) => {
		let newTodoData = todoData.filter((data) => data.id !== id);
		setTodoData(newTodoData);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// 할 일 입력
	const handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id: Date.now(),
			title: value,
			completed: false,
		};
		setTodoData((prev) => [...prev, newTodo]);
		setValue("");
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
		<div className="container">
			<div className="todoBlock">
				<h1>할 일 목록</h1>

				<ul>
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
				</ul>

				<form style={{ display: "flex" }} onSubmit={handleSubmit}>
					<input type="text" name="value" placeholder="해야할 일을 입력하세요." value={value} onChange={handleChange} style={{ flex: "10", padding: "5px" }} />
					<input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
				</form>
			</div>
		</div>
	);
}
