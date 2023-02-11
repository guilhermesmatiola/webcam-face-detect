import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../topBar/TopBar";


export default function Home(props) {
	const navigate = useNavigate();
	useEffect(() => {

	}, []);

	return (
		<>
			<TopBar />
			<Box>
				{/* <Container>
					{props.children ? (
						props.children
					) : (
						<>
							<Bottom onClick={goToSignup}>
							o	Crie sua conta para usar nosso serviç!
							</Bottom>
						</>
					)}
				</Container> */}
			</Box>
		</>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

