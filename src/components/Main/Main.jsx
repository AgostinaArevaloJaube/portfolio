import styled from "styled-components";
import Hero from "./Hero";
function Main() {
	return (
		<MainContainer>
			<Hero />
		</MainContainer>
	);
}

const MainContainer = styled.main`
	margin-top: 8vh;
`;

export default Main;
