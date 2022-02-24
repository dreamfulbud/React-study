import React, { useState, useRef } from "react";

export default function Unit() {
	const [output, setOutput] = useState(0);
	const [value, setValue] = useState(10);

	const input = useRef();
	function onChange(e) {
		let outputValue = e.target.value;
		if (Number(value) === 0.393701) {
			setOutput(Number(outputValue * value).toFixed(6));
		} else {
			setOutput(outputValue * value);
		}
	}
	function handleSelect(e) {
		let selectValue = Number(e.target.value);
		setValue(selectValue);
		if (selectValue === 0.393701) {
			setOutput(Number(input.current.value * selectValue).toFixed(6));
		} else {
			setOutput(input.current.value * selectValue);
		}
	}
	return (
		<div>
			<label for="input-cm">숫자입력</label>
			<input type="number" id="input-cm" onChange={onChange} ref={input} />
			cm
			<strong>{output}</strong>
			<select value={value} onChange={handleSelect}>
				<option defaultValue value={10}>
					mm
				</option>
				<option value={0.01}>m</option>
				<option value={0.393701}>inch</option>
			</select>
		</div>
	);
}
