
import {Head,
  StyledLink
} from "@layouts/Header/styles"

const Header =()=>{
  console.log("헤더!!")
    return(
      <>
        <Head>
          <StyledLink to="/src/pages/Group">도키도키 랜덤채팅</StyledLink>
          <StyledLink to="/src/pages/Private">1:1 채팅</StyledLink>
          <StyledLink to="/src/pages/Group">단체 채팅</StyledLink>
          <StyledLink to="/src/pages/MyChat">내 채팅</StyledLink>
          <StyledLink to="/src/pages/MyProfile">내 프로필</StyledLink>
        </Head>

      </>
    )
};


export default Header;
