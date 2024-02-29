import styled from "@emotion/styled";

export const Search =styled.div`
    border-bottom: 2px solid #A4D3FF;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;

    & form {
        display: flex;
        height: 35%;
        width: 50%;

        & input {
            width: 87%;
            border: 2px solid #A4D3FF;
            font-size: 45px;
            padding-left: 10px;
            outline: none;
            color: rgb(0, 0, 0);
        }

        & input::placeholder {
            color: rgba(135, 135, 135, 100);
            font-size: 45px;
            font-weight: 1000;
            text-align: center;


        }

        & button {
            font-size: 80px;
            color: rgba(135, 135, 135, 100);
            background-color: transparent;
            border: none;
            width: 90px;
        }
    }
`;
export const HotChat = styled.div`
    display: flex;
		flex-direction: column;
    justify-content: center;
		align-items: center;
    border-bottom: 2px solid #A4D3FF;
    height: 550px;
    font-size: 23px;
    
`;
export const ChatSection = styled.div`
    display: flex;
    justify-content: center;
`;

export const ChatList = styled.div`
    display: flex;
    height: 100%;
    width: 75%;
		
    
`;
export const LeftBar = styled.div`
    display: flex;
    font-weight: 1000;
		border-left: 2px solid #A4D3FF;
    border-right: 2px solid #A4D3FF;
    width: 25%;
    justify-content: center;
    & ul{
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
        justify-content: center;
        text-align: center;
    }
    & ul:hover{
        cursor: default;
    }
`;
export const Li =styled.li`
    padding: 25px 0;
    color: rgba(135, 135, 135, 100);
`;
export const RightBar = styled.div`
    width: 100%;
    border-right: 2px solid #A4D3FF;
		
`;

export const ChatOption = styled.div`
	width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		& span{
				font-size: 24px;
				font-weight: 800;
				display: flex;
		}
		& span:hover{
        cursor: pointer;
		}
    & svg{
        margin-left: 4px;
        margin-bottom: 1px;
    }
		
`;

export const ChatBoxSect = styled.div`
	margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;

	width: 100%;
`;
export const Box = styled.div`
	margin-bottom: 25px;
		background: #A4D3FF;
	width: 90%;
		border: 1px solid ;
		height: 140px;
		border-radius: 20px;
    color: white;
		& h3{
				font-size: 28px;
				
		}
		& span{
				font-size: 15px;
		}
		& .title{
				display: flex;
				justify-content: center;
		}
		& .sub{
				font-weight: 550;
				margin: 15px;
				display: flex;
				justify-content: space-between;
		}
`;
