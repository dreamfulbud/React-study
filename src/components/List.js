import React, { useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./list.scss";

export default function List({ todoData, setTodoData }) {
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

	const handleEnd = (result) => {
		// console.log(result);

		//목적지가 없으면 이벤트 취소, 함수 종료
		if (!result.destination) return;

		// 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
		const newTodoData = todoData;

		//변경시키는 아이템을 배열에서 지운 후, return 값으로 지워진 아이템을 추가해줌
		const [reorderedItem] = newTodoData.splice(result.source.index, 1);
		newTodoData.splice(result.destination.index, 0, reorderedItem);

		setTodoData(newTodoData);
	};

	return (
		<DragDropContext onDragEnd={handleEnd}>
			<Droppable droppableId="to-dos">
				{(provided) => (
					<ul {...provided.droppableProps} ref={provided.innerRef}>
						{todoData.map((data, index) => (
							<Draggable key={data.id} draggableId={data.id.toString()} index={index}>
								{(provided, snapshot) => (
									<li key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={snapshot.isDragging ? "selected" : "not-selected"}>
										<input type="checkbox" onChange={() => handleCompleChange(data.id)} defaultChecked={data.completed} className={data.completed ? "check-true" : ""} id={"input" + data.id} />
										<label for={"input" + data.id}>{data.title}</label>
										<button onClick={() => handleClick(data.id)}>
											<span className="a11y-hidden">삭제</span>
										</button>
									</li>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	);
}
