import Header from "@layouts/Header";
import SearchSect from "@pages/Group/SearchSect"
import { ChatList, ChatSection, HotChat, LeftBar, RightBar} from "@pages/Group/styles";
import React, {ChangeEvent, ReactEventHandler, useState} from "react";
import { NavLink } from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import loadedData = Simulate.loadedData;
import HotChatSect from "@pages/Group/HotChatSect";
import ChatSect from "@pages/Group/ChatSect";


const Group =()=>{


	return(
		<>
			<Header/>
			<SearchSect/>
			<HotChatSect/>
			<ChatSect/>
		</>
	)
}

export default Group;
