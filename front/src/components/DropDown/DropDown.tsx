import {useRef, useState} from "react";
import Link from "react-router-dom";
import styles from "@components/DropDown/styles";
import classNames from "classNames";
import useDetectClose from "@hooks/useDetectClose";


const DropDown = () => {
	const dropDownRef = useRef(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
	return (
		<div className={styles.dropDownMenu}>
			<button onClick={() => setIsOpen(!isOpen)}>메뉴 보기</button>

			<ul
				ref={dropDownRef}
				className={classNames(styles.menu, { [styles.active]: isOpen })}
			>
				<li>추천순</li>
				<li>마지막 대화순</li>
				<li>인원순</li>
				
				{/* 메뉴 리스트들 */}
			</ul>
		</div>
	);
};

export default DropDown;
