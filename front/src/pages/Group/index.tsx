import Header from "@layouts/Header";
import { ChatList, ChatSection, HotChat, LeftBar, RightBar, Search } from "@pages/Group/styles";
import React from "react";
import { NavLink } from "react-router-dom";


const Group =()=>{
	const loadChat=()=>{

	}

	return(
		<>
			<Header/>
			<Search>
				<form>
					<input type="text"/>
					<button></button>
				</form>
			</Search>
			<HotChat>
				<h2>실시간 인기 채팅방</h2>
				<div></div>
			</HotChat>
			<ChatSection>
				<ChatList>
					<LeftBar>
						<ul>
							<li onClick={loadChat}>전체 채팅방</li>
							<li>일반</li>
							<li>스터디</li>
							<li>운동</li>
							<li>게임</li>
							<li>음식</li>
							<li>지역</li>
							<li>기타</li>
						</ul>
					</LeftBar>
					<RightBar>
						채팅방 리스트
					</RightBar>
				</ChatList>
			</ChatSection>

		</>
	)
}

export default Group;
