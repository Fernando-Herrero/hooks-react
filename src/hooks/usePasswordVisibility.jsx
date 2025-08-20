import { useToggle } from "./useToggle";

export const usePasswordVisibility = () => {
	const [isVisible, toggleVisible] = useToggle(false);

	return { isVisible, toggleVisible };
};
