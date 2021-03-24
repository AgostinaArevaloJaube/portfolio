import styled from "styled-components";
import AboutMe from "../Main/AboutMe";
import Hero from "./Hero";
import Projects from "./Projects";
import Stack from "./Stack";

function Main() {
	return (
		<MainContainer>
			<Hero />
			<AboutMe />
			<Stack />
			<Projects />
		</MainContainer>
	);
}

const MainContainer = styled.main`
	margin-top: 7vh;
`;

export default Main;
