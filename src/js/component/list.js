import React, { useState, useEffect } from "react";

export const List = () => {
	{
		/* in the hooks you will have to put a variable and the function
if you have "todo" you will also need setTodo and useState and will have the initial value of empty string = "" */
	}

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/kvaldesvallejo")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				//actualizar la lista
				setTodos(responseAsJson);
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		console.log(todos);
	}, []);

	const Enter = e => {
		if (e.key === "Enter") {
			console.log(e.target.value);
			setTodos(todos.concat(e.target.value));
			e.target.value = "";
		}
	};
	const Delete = t => {
		console.log(t);
		setTodos(
			todos.filter(index => {
				console.log(index);
				return t != index;
			})
		);
		console.log(todos);
	};

	return (
		<div id="container">
			<h3>Todos</h3>
			<input type="text" onKeyDown={Enter} />
			<ul>
				{todos.map((value, index) => (
					<li key={index}>
						{value.label}
						<button onClick={() => Delete(value)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};
