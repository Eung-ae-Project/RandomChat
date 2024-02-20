import Header from "@layouts/Header";
import {Search} from "@pages/Group/styles";

const Group =()=>{

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
		</>
	)
}

export default Group;
