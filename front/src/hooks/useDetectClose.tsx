import { useEffect, useState, useRef } from "react";

const useDetectClose = (initialState:any) => {
	const [isOpen, setIsOpen] = useState(initialState);
	const ref = useRef(null);

	const removeHandler = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const onClick = (e:any) => {
			if (ref.current !== null && !(ref.current == e.currentTarget)) {
				setIsOpen(!isOpen);
			}
		};

		if (isOpen) {
			window.addEventListener("click", onClick);
		}

		return () => {
			window.removeEventListener("click", onClick);
		};
	}, [isOpen]);

	return [isOpen, ref, removeHandler];
};

export default useDetectClose;

