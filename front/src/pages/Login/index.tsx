import React,{useCallback,useState} from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import {Button, Img, Form, Input, Label} from './styles';
import useSWR from "swr";
import fetcher from "@utils/fetcher";
const Login =()=>{
	const {data,error,mutate}:any = useSWR("/api/users/login",fetcher,);
	const [logInError, setLogInError] = useState(false);
	const[id,onchangeId] = useInput('');
	const[password,onchangePassword] = useInput('');
	const onSubmit = useCallback(
		(e:any) =>{
			e.preventDefault();
			setLogInError(false);
			axios
			.post(
				'/api/users/login',
				{id,password},
				{withCredentials:true,}
			)
			.then((response)=>{
				mutate(response.data,false);
			})
			.catch((error)=>{
				console.dir(error);
				setLogInError(error.response?.status === 401);
			})
		},[id,password],
	);


	return(
		<div id ='container'>
			<Img src="src/assets/logo.png" alt="logo" />
			<Form onSubmit={onSubmit}>
				<label id = 'id-label'>
				<Input type ='id' id='id' name = 'id' value={id} onChange={onchangeId}/>
				{/* {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>} */}
				</label>
				<label id = 'password-label'>
				<Input type ='password' id='password' name = 'password' value={password} onChange={onchangePassword}/>
				</label>
				<Label id='islogin'>
				<Input type='checkbox' id='islogin'/>로그인 유지하기
				</Label>
				<Button id='login' type='submit'>로그인</Button>
				<Button id ='speclogin'><Img id='kn' src ="src/assets/kakao.png"></Img></Button>
				<Button id ='speclogin'><Img id='kn' src ="src/assets/naver.png"></Img></Button>
			</Form>
			<a href='./signup' id = 'tologin'>회원가입</a>
			<a href=''id = 'tolookfor'>아이디 /비밀번호 찾기</a>
		</div>
	)
}

export default Login;
