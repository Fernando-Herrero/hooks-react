import { useEffect } from "react";
import "./App.css";
import { Counter } from "./components/Counter.jsx/Counter";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { PokemonViewer } from "./components/PokemonViewer/PokemonViewer";
import { SizeScreen } from "./components/SizeScreen/SizeScreen";
import { LayaoutSwitcher } from "./components/LayaoutSwitcher/LayaoutSwitcher";

export const App = () => {
	const width = useWindowWidth();

	useEffect(() => {
		if (width < 768) {
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
		} else if (width >= 768 && width < 1024) {
			document.body.style.backgroundColor = "orange";
			document.body.style.color = "black";
		} else {
			document.body.style.backgroundColor = "green";
			document.body.style.color = "black";
		}
	}, [width]);

	return (
		<>
			<LoginForm />
			<Counter />
			<PokemonViewer />
			<SizeScreen />
			<LayaoutSwitcher />
		</>
	);
};
