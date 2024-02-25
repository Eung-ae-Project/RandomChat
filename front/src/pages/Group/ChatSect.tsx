import React, {useState} from "react";
import {ChatList, ChatSection, LeftBar, Li, RightBar} from "@pages/Group/styles";

const ChatSect=()=>{

    const [chatList,setChatList] = useState([]);
    const [select,setSelect] = useState('all');
    const category = [
        {value:"all" , text:"전체채팅방"},
        {value:"normal" , text:"일반"},
        {value:"study" , text:"스터디"},
        {value:"exercise" , text:"운동"},
        {value:"game" , text:"게임"},
        {value:"food" , text:"음식"},
        {value:"location" , text:"지역"},
        {value:"etc" , text:"기타"},
    ]
    const loadChat=(e:any)=>{
        // 벨류값 참고해서 벨류 값에 따라 db에 가져올 데이터가 달라짐
        // 채팅 목록을 state로 만들고 가져온 벨류에 따라서 스테이트 변경
        // 변경 과정은 벨류에 따라 백에 보내는 api가 달라지고 요청후 받는
        // 데이터를 state에 반영한다.
        setSelect(e.target.getAttribute('value'));
        console.log(e.target.getAttribute('value'));

    }
    const activateStyle=()=>{
        //1. nth-chile, map 사용,

    }
    const activeStyle={
        color: 'white',
        background: '#A4D3FF',
    }
    const deActiveStyle = {
        color: 'rgba(135, 135, 135, 100)',
    }
    const CategoryList=()=>{
        return(
            <>{category.map(({value,text})=>(
                <Li key={value} onClick={loadChat} value={value} style={select==value ? activeStyle:deActiveStyle} >{text}</Li>
            )) }
        </>
        )

    }

    return(
        <ChatSection>
            <ChatList className="ChatList">
                <LeftBar className="LeftBar">
                    <ul >
                        <CategoryList/>
                    </ul>
                </LeftBar>
                <RightBar>
                    채팅방 리스트
                </RightBar>
            </ChatList>
        </ChatSection>
    )
}


export default ChatSect