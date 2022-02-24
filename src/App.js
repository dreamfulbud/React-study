import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import TextCounter from "./components/TextCounter";
import Timer from "./components/Timer";
import Unit from "./components/Unit";
//클래스형
export default function App() {
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

	return (
		<>
			<Timer />
			<Unit />
			<TextCounter />
			<div className="container">
				<div className="todoBlock">
					<h1>할 일 목록</h1>

					<ul>
						<List todoData={todoData} setTodoData={setTodoData} />
					</ul>

					<form style={{ display: "flex" }} onSubmit={handleSubmit}>
						<input type="text" name="value" placeholder="해야할 일을 입력하세요." value={value} onChange={handleChange} style={{ flex: "10", padding: "5px" }} />
						<input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
					</form>
				</div>
			</div>
		</>
	);
}
