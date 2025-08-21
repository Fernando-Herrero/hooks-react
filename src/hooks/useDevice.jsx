import { useEffect, useState } from "react";
import { useWindowWidth } from "./useWindowWidth";

export const useDevice = () => {
	const [device, setDevice] = useState({ isMobile: false, isTablet: false, isDesktop: false });
	const width = useWindowWidth();

	useEffect(() => {
		if (width < 768) setDevice({ isMobile: true, isTablet: false, isDesktop: false });
		if (width >= 768 && width < 1024) setDevice({ isMobile: false, isTablet: true, isDesktop: false });
		if (width >= 1024) setDevice({ isMobile: false, isTablet: false, isDesktop: true });
	}, [width]);

	return device;
};
