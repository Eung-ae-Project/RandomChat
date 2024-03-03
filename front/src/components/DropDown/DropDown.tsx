import React, {useRef} from "react";
import Link from "react-router-dom";
import styles from "@components/DropDown/qwer.module.css";
import classNames from "classNames";
import useDetectClose from "@hooks/useDetectClose";


const DropDown = () => {
	const dropDownRef = useRef(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
	console.log(isOpen);

	return (
		<div className={styles.dropDownMenu}>
			<button
				ref={dropDownRef}
				onClick={() => setIsOpen(!isOpen)}
			>
				메뉴 보기
			</button>
			<ul
				className={classNames(styles.menu, { [styles.active]: isOpen })}
			>
				<li>
					<h1>qwer</h1>
				</li>
				{/* 메뉴 리스트들 */}
			</ul>
		</div>
	);
};

export default DropDown;
