import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-tradicional.png"

export default function TopBar() {
	const navigate = useNavigate();

	// function goToSignup() {
	// 	navigate("/");
	// }

	// function goToSignin() {
	// 	navigate("/signin");
	// }

	return (
		<Top>
			<a href="//www.google.com/search?q=hasar+brasil/" target="_blank" >
			<img src={logo} ></img>
			</a>
			
			
		</Top>
	);
}
const Top = styled.div`
	display: flex;
	justify-content: center;
	img{
		height: 100px;
	}
`

const Box = styled.span`
	display: flex;
	justify-content: right;
	margin: 60px 60px 0 0;

	div {
		margin-left: 20px;
		font-size: 14px;
		color: #4D88D7;
		font-weight: 400;
		font-weight: bold;
	}
`;

