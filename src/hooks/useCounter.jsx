import { act, useState } from "react";

export const useCounter = (n) => {
	const [count, setCount] = useState(n);

	const handleCount = (action) => {
		setCount((prev) => (action === "sum" ? prev + 1 : prev - 1));
	};

	return [count, handleCount];
};
