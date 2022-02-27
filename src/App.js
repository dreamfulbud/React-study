import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";
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

					<Lists todoData={todoData} setTodoData={setTodoData} />
					<Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
				</div>
			</div>
		</>
	);
}
