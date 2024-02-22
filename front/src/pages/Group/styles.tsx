import styled from "@emotion/styled";

export const Search =styled.div`
    border-bottom: 2px solid #A4D3FF;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    & form{
        display: flex;
        height: 35%;
        width: 50%;
        & input{
            width: 87%;
            border: 2px solid #A4D3FF ;
            
        }
        & button{
            width: 90px;
        }
    }
`;
export const HotChat = styled.div`
		display: flex;
		justify-content: center;
    border-bottom: 2px solid #A4D3FF;
		height: 400px;
		font-size: 23px;
    
`;
export const ChatSection = styled.div`
		display: flex;
		justify-content: center;
		
    
`;

export const ChatList = styled.div`
		display: flex;
		height: 1000px;
		width: 75%;
		
    
`;
export const LeftBar = styled.div`
		display: flex;
		font-weight: 1000;
    border-right: 2px solid #A4D3FF;
		 width: 20%;
		justify-content: center;
		& ul{
				list-style: none;
        margin: 0;
        padding: 0;
        justify-content: center;
		}
		& li{
				
				padding: 25px 0;
        color: rgba(135, 135, 135, 100);
				
		}	
    
`;
export const RightBar = styled.div`
		display: flex;
		justify-content: end;
    width: 100%;
`;
