import styled from '@emotion/styled';

export const Form = styled.form` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh; 
    text-align: center;
    margin-top:-100px;
`;
export const Button = styled.button` 
    width: 300px;
    padding:5px;
    margin-top: 10px;
    ${({id})=>
    id === 'login' &&`
    border:2px solid #A4D3FF;
    border-radius: 10px;
    background-color: #A4D3FF;
    color:white;
    margin-top: 20px
    `}
    ${({id})=>
    id === 'speclogin' &&`
    border-radius: 10px;
    width: 183px;
    height: 45px;
    border:0px;
    background-color: white;
    `}
    
`;
export const Img = styled.img` 
    margin: auto;
    margin-bottom: -20px;
    display: block;
    ${({id})=>
    id === 'kn' &&`
    border-radius: 10px;
    position:relative;
    top:-10px;
    left:-7px;
    `}
`;

export const Input = styled.input`
    ${({id})=>
    (id === 'id' || id ==='password') &&`
    width: 300px;
    border:2px solid #D9D9D9;
    border-radius: 10px;
    padding:5px;    
    margin-top: 10px;
    background-color: #D9D9D9;
    `}
    ${({id})=>
    id === 'islogoin' &&`
    position: relative;
    left: -5px;
    margin-left: 5px;
    `}
`;

export const Label = styled.label`
     
    ${({id})=>
    id === 'islogoin' &&`
    display:flex;
    align-items: flex-start;
    margin-left: -10px;
    `}
`
