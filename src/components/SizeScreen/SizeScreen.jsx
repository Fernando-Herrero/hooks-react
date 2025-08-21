import { useDevice } from "../../hooks/useDevice";

export const SizeScreen = () => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	return (
		<h1>
			{isMobile && "Mobile size"}
			{isTablet && "Tablet size"}
			{isDesktop && "Desktop size"}
		</h1>
	);
};
