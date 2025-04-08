import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Enter your name?");

	var firstName = "John";

	console.log("App component rendered");

	return (
		<>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<div className="card">
				<input
					type="text"
					value={firstName}
					onChange={(e) => (firstName = e.target.value)}
				/>
				<p>{firstName}</p>
			</div>
		</>
	);
}

export default App;
