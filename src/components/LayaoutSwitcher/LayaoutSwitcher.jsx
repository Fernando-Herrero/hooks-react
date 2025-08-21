import { useDevice } from "../../hooks/useDevice";

export const LayaoutSwitcher = () => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	let gridStyte = {};

	if (isMobile) {
		gridStyte = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px" };
	} else if (isTablet) {
		gridStyte = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" };
	} else {
		gridStyte = { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" };
	}

	const items = Array.from({ length: 16 });

	const colors = [
		"red",
		"blue",
		"green",
		"orange",
		"purple",
		"pink",
		"cyan",
		"teal",
		"lime",
		"brown",
		"gold",
		"magenta",
		"skyblue",
		"gray",
		"violet",
		"black",
	];

	return (
		<div style={gridStyte}>
			{items.map((_, index) => (
				<div key={index} style={{ width: "50px", height: "50px", backgroundColor: colors[index] }}></div>
			))}
		</div>
	);
};
