import { useEffect, useState } from "react";

const useDetectClose = (elem, initialState) => {
	const [isOpen, setIsOpen] = useState(initialState);

	useEffect(() => {
		const onClick = (e) => {
			if (elem.current !== null && !elem.current.contains(e.target)) {
				setIsOpen(!isOpen);
			}
		};

		if (isOpen) {
			window.addEventListener("click", onClick);
		}

		return () => {
			window.removeEventListener("click", onClick);
		};
	}, [isOpen, elem]);
	return [isOpen, setIsOpen];
};

export default useDetectClose;
출처: https://mingeesuh.tistory.com/entry/React-드롭다운-메뉴-만들기-feat-useRef-useState [코딩마차:티스토리]
