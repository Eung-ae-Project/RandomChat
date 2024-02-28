import React from "react";
import {HotChat} from "@pages/Group/styles";
import ChatSlider from "@components/Slider/ChatSlider";



const HotChatSect=()=> {

    return (
        <HotChat>
            <h2>실시간 인기 채팅방</h2>
            <div>
                <ChatSlider>

                </ChatSlider>
            </div>
        </HotChat>

    )
}
export default HotChatSect;