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
	getStyle = () => {
		return {
			padding: "10px",
			borderBottom: "1px dotted #ddd",
		};
	};

	todoData = [
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
	];
	render() {
		return (
			<div className="container">
				<div className="todoBlock">
					<h1>할 일 목록</h1>

					<ul>
						{this.todoData.map((data) => (
							<>
								<li style={this.getStyle()} key={data.id}>
									<input type="checkbox" defaultChecked={data.completed} />
									{data.title}
									<button style={this.btnStyle}>x</button>
								</li>
							</>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
