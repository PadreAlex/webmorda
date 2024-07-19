import styled from "styled-components";
import { selectColor, subColor } from "../../const-colors";

export const LoginForm = styled.form`
        overflow: hidden;
        background-color: white;
        padding: 40px 30px 30px 30px;
        border-radius: 10px;
        border: 2px solid ${subColor}
        top: 50%;
        left: 50%;
        width: 400px;
        box-shadow: 5px 10px 10px;
        & > input {
            display: block;
            border-radius: 5px;
            font-size: 16px;
            background: white;
            width: 100%;
            border: 0;
            padding: 10px 10px;
            margin: 15px -10px;
        }
        & > button {
            cursor: pointer;
            color: #fff;
            font-size: 16px;
            text-transform: uppercase;
            width: 80px;
            border: 0;
            padding: 10px 0;
            margin-top: 10px;
            margin-left: -5px;
            border-radius: 5px;
            background-color: ${subColor};
        }
        & > button:hover {
            background-color: ${selectColor};
        }
        & > input:hover {
            background-color: ${subColor}40
        }
        & > input:focus {
            outline: none;
            background-color: ${subColor}40
        } 
  `;