
import {Head,
  StyledLink
} from "@layouts/Header/styles"

const Header =(location:string)=>{
  console.log("헤더!!")
    return(
      <>
        <Head>
          <StyledLink to="/group">이런저런 랜덤채팅</StyledLink>
          <StyledLink to="/private">1:1 채팅</StyledLink>
          <StyledLink to="/group">단체 채팅</StyledLink>
          <StyledLink to="/MyChat">내 채팅</StyledLink>
          <StyledLink to="/MyProfile">내 프로필</StyledLink>
        </Head>
      </>
    )
};


export default Header;
