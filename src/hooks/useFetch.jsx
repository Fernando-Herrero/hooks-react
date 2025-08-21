import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		if (!url) {
			setData(null);
			setLoading(false);
			setError(null);
			return;
		}

		let isCancelled = false;

		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);
				setData(null);

				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

				const result = await response.json();

				if (!isCancelled) {
					setData(result);
				}
			} catch (error) {
				const errorMessage =
					error.name === "TypeError" ? "Network error - check your connection" : error.message;

				if (!isCancelled) {
					setError(errorMessage);
					setData(null);
				}
			} finally {
				if (!isCancelled) {
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => (isCancelled = true);
	}, [url]);

	return { data, loading, error };
};
