import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const Head = styled.header`
  height: 120px;
    font-weight: 1000;
    font-size: 29px;
    padding: 0 50px 0;
    font-style: normal;
    & > :first-of-type {
        /* 첫 번째 자식 요소에 대한 스타일 */
        margin-right: 75px;
    }
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-decoration:none;
    border-bottom: 2px solid #A4D3FF; // 테두리 스타일 설정
    
  text-align: center;
`;
export const StyledLink = styled(Link)`
	color: rgba(135, 135, 135, 100);;
	text-decoration: none;


    @font-face {
        font-family: 'BMHANNAPro';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
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

