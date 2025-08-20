import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";

export const Counter = () => {
	const [count, handleCount] = useCounter(0);
	return (
		<div className="counter">
			<span>{count}</span>
			<div className="counter-buttons">
				<button onClick={() => handleCount("sum")}>➕</button>
				<button onClick={() => handleCount("rest")}>➖</button>
			</div>
		</div>
	);
};
