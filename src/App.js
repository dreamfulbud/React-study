import React, { Component } from "react";
import "./App.css";
//클래스형
export default class App extends Component {
	btnStyle = {
		color: "#fff",
		border: "none",
		padding: "5px 9px",
		borderRadius: "50%",
		cursor: "pointer",
		float: "right",
	};

	listStyle = (completed) => {
		return {
			padding: "10px",
			borderBottom: "1px dotted #ddd",
			textDecoration: completed ? "line-through" : "none",
		};
	};

	state = {
		todoData: [
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
		],
		value: "",
	};

	handleClick = (id) => {
		let newTodoData = this.state.todoData.filter((data) => data.id !== id);
		this.setState({ todoData: newTodoData });
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	// 할 일 입력
	handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id: Date.now(),
			title: this.state.value,
			completed: false,
		};
		this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
	};

	// 완료여부 false/true
	handleCompleChange = (id) => {
		let newTodoData = this.state.todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		this.setState({ todoData: newTodoData });
	};

	render() {
		return (
			<div className="container">
				<div className="todoBlock">
					<h1>할 일 목록</h1>

					<ul>
						{this.state.todoData.map((data) => (
							<>
								<li style={this.listStyle(data.completed)} key={data.id}>
									<input type="checkbox" onChange={() => this.handleCompleChange(data.id)} defaultChecked={data.completed} id={"input" + data.id} />
									<label for={"input" + data.id}>{data.title}</label>
									<button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>
										x
									</button>
								</li>
							</>
						))}
					</ul>

					<form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
						<input type="text" name="value" placeholder="해야할 일을 입력하세요." value={this.state.value} onChange={this.handleChange} style={{ flex: "10", padding: "5px" }} />
						<input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
					</form>
				</div>
			</div>
		);
	}
}
