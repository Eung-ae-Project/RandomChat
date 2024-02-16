import './styles.css';
import { useCallback, useState } from 'react';

const Signup = () =>{
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');
  const [passwdcheck, setPasswdcheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [mbti, setMbti] = useState('');

  const onSubmit = useCallback((e:any) => {
    e.preventDefault();
  },[]);

  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href='App.css' />
      </head>
      <img src="src/assets/logo.png" alt="logo" />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <span>이름</span>
            <input type='name' id='name' name='name' onChange={setId} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="id">
            <span>아이디</span>
            <input type='id' id='id' name='id' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="passwd">
            <span>비밀번호</span>
            <input type='passwd' id='passwd' name='passwd' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="passwdcheck">
            <span>비밀번호 확인</span>
            <input type='passwdcheck' id='passwdcheck' name='passwdcheck' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="nickname">
            <span>닉네임</span>
            <input type='nickname' id='nickname' name='nickname' />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="mbti">
            <span>MBTI</span>
            <input type='mbti' id='mbti' name='mbti' />
          </label>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
