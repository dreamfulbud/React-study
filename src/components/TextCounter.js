import React, { useState } from "react";

export default function TextCounter() {
	const [text, setText] = useState();
	function onChange(e) {
		setText(e.target.value.length);
	}
	return (
		<div>
			<h2>κΈμμ : {text}</h2>
			<textarea onChange={onChange} />
		</div>
	);
}
