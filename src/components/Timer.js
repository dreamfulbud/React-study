import React, { useEffect, useRef, useState } from "react";

export default function Timer() {
	const [timer, setTimer] = useState(0);

	let timerRef = useRef();
	const handleChange = (e) => {
		if (e.target.checked) {
			timerRef.current = setInterval(() => {
				setTimer((timer) => timer + 1);
			}, 1000);
		} else {
			clearInterval(timerRef.current);
		}
	};

	return (
		<div>
			<input type="checkbox" id="checkbox-timer" onChange={handleChange} />
			<label for="checkbox-timer">타이머 활성화</label>
			<p>
				<strong>{timer}</strong>초
			</p>
		</div>
	);
}
