import "./App.css";
import { Counter } from "./components/Counter.jsx/Counter";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const App = () => {
	return (
		<>
			<LoginForm />
			<Counter />
		</>
	);
};
