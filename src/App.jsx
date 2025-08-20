import { useEffect } from "react";
import "./App.css";
import { Counter } from "./components/Counter.jsx/Counter";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useWindowWidth } from "./hooks/useWindowWidth";

export const App = () => {
	const width = useWindowWidth();

	useEffect(() => {
		document.body.style.backgroundColor = width < 768 ? "black" : "orange";
		document.body.style.color = width < 768 ? "white" : "black";
	}, [width]);

	return (
		<>
			<LoginForm />
			<Counter />
		</>
	);
};
