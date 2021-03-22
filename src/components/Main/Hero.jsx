import styled from "styled-components";
import theme from "../../styles/theme";
import Typewriter from "typewriter-effect";

// Falta responsivear, empezar en mobile

function Hero() {
	return (
		<HeroContainer>
			<Title>
				¡Hola! Soy <strong>Agostina</strong>
			</Title>
			<TyperwriterContianer>
				<Typewriter
					options={{
						autoStart: true,
						loop: true,
						cursorClassName: "cursor"
					}}
					onInit={(typewriter) => {
						typewriter
							.typeString('<span style="color:#fff">React JS Developer</span>')
							.pauseFor(1500)
							.deleteAll()
							.typeString(
								'<span style="color:#fff">Frontend Web Developer</span>'
							)
							.pauseFor(1500)
							.deleteAll()
							.deleteAll()
							.start();
					}}
				/>
			</TyperwriterContianer>

			<IconsContainer>
				{/* faltan los <a></a> */}
				<i className="fab fa-github-square icons"></i>
				<i className="fab fa-linkedin icons"></i>
				<i className="fas fa-envelope-square icons"></i>
				<i className="fas fa-download icons"></i>
			</IconsContainer>
		</HeroContainer>
	);
}
const HeroContainer = styled.div`
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
`;

const Title = styled.p`
	font-size: 1.5em;

	@media ${theme.mediaQueries.above600} {
		font-size: 1.8em;
	}
`;

const TyperwriterContianer = styled.div`
	width: fit-content;
	margin: 0.3rem;
	padding: 0.3em;
	font-size: 1.3em;
	text-align: center;
	background: ${theme.colors.desktopGradient};

	@media ${theme.mediaQueries.above600} {
		font-size: 1.6em;
	}

	.cursor {
		color: #fff;
	}
`;

const IconsContainer = styled.div`
width: fit-content;
display: flex
justify-content: center;
font-size: 2em;
.icons {
	margin: 0.5rem;
	cursor: pointer;
}
`;

export default Hero;
