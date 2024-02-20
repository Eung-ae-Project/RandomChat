import styled from '@emotion/styled';
import {Link, NavLink} from "react-router-dom";
import {css} from "@emotion/react";


export const Head = styled.ul`
  height: 140px;
    font-weight: 1000;
    font-size: 39px;
    margin:0;
    padding: 0;
    
    font-style: normal;
    & > :first-of-type {
        /* 첫 번째 자식 요소에 대한 스타일 */
        flex-basis: 170%;
        justify-content: start;
        padding-left: 50px;
    }
		display: flex;
    justify-content: space-between; /* 가로 방향으로 가운데 정렬 */
    align-items: center;
    text-decoration:none;
    border-bottom: 2px solid #A4D3FF; // 테두리 스타일 설정
    
`;
export const StyledLink = styled(NavLink)`
	color: rgba(135, 135, 135, 100);
    width: 100%;
    height: 100%;
	text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const NavBar = styled(NavLink)`
	
    width: 100%;
    height: 100%;
	text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const FocusedLink = styled(Link)`
	color:white;
    width: 100%;
    height: 100%;
    
	text-decoration: none;
    background: #A4D3FF;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


/* 도키도키 랜덤채팅 */

// position: absolute;
// width: 441px;
// height: 148px;
// left: 0px;
// top: 2px;
//
// font-family: 'BM HANNA_TTF';
// font-style: normal;
// font-weight: 400;
// font-size: 48px;
// line-height: 48px;
// display: flex;
// align-items: center;
// text-align: center;
// text-transform: capitalize;
//
// color: #878787;

