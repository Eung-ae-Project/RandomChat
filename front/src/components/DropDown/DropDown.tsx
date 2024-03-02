import React from "react";
import useDetectClose from "@hooks/useDetectClose";

import { DropdownButton, DropdownContainer, LinkWrapper, Menu, Ul, Wrapper,Li } from "@components/DropDown/styles";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DropdownMenu = () => {
	const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
	const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);


	return (
		<Wrapper>
			<DropdownContainer>
				<DropdownButton onClick={myPageHandler} ref={myPageRef}>
					<span>정렬기준</span>
					<FontAwesomeIcon icon={faCaretDown} />
				</DropdownButton>
				<Menu isDropped={myPageIsOpen}>
					<Ul>
						<Li>
							<LinkWrapper href="#1-1">메뉴1</LinkWrapper>
						</Li>
						<Li>
							<LinkWrapper href="#1-2">메뉴2</LinkWrapper>
						</Li>
						<Li>
							<LinkWrapper href="#1-3">메뉴3</LinkWrapper>
						</Li>
					</Ul>
				</Menu>
			</DropdownContainer>
		</Wrapper>
	);
};

export default DropdownMenu;

