import styled from "styled-components";
import theme from "../../styles/theme";
import SectionContainer from "../../styles/SectionContainer";
import FotoAgos from "../../assets/foto-agos-perfiles.png";

function AboutMe() {
	return (
		<AboutContainer id="about">
			<InfoContainer>
				<Avatar src={FotoAgos} alt="Foto de Agostina Arevalo Jaube" />
				<Title>Agostina Arevalo Jaube</Title>
				<Subtitle>Frontend Web Devoleper | React Js</Subtitle>

				<LocationContainer>
					<i className="fas fa-map-marker-alt icon" />
					<Paragraph>Córdoba, Argentina</Paragraph>
				</LocationContainer>
			</InfoContainer>
			<Line />
			<ParagraphContainer>
				<Paragraph>
					Trabajé más de 5 años como Productora Audiovisual freelance
					desempeñando distintos roles: Coordinadora, Jefa o Asistente de
					Producción, hasta que me interesé por el Desarrollo Web.
				</Paragraph>
				<Paragraph>
					Hoy estoy buscando mi primera oportunidad laboral como Frontend Web
					Developer.
				</Paragraph>
				<Paragraph>
					Me encantaría ser parte de
					<b>proyectos desafiantes</b>, donde se pueda{" "}
					<b>crecer profesionalmente</b>, <b>trabajar en equipo</b> con{" "}
					<b>tecnologías de vanguardia</b> , donde puedar colaborar en
					propuestas innovadoras y aprender constantemente.
				</Paragraph>
			</ParagraphContainer>
		</AboutContainer>
	);
}

const AboutContainer = styled(SectionContainer)`
	margin-top: 3rem;
	text-align: center;
`;
const InfoContainer = styled.article`
	margin: 3rem 0rem 0.5rem 0rem;
`;

const Avatar = styled.img`
	width: 120px;
	border-radius: 100%;
`;

const Title = styled.h2`
	margin: 0.5rem 0 0 0;
	font-size: ${theme.fonts.titleMobile};
`;

const Subtitle = styled.h3`
	font-size: ${theme.fonts.subtitleMobile};
	background: ${theme.colors.desktopGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const LocationContainer = styled.div`
	margin: 0.5rem 0 0 0;
	display: flex;
	align-content: center;
	justify-content: center;

	.icon {
		padding: 2px;
		margin: 0px 8px;
		background: ${theme.colors.desktopGradient};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

const Line = styled.hr`
	margin: 0.8rem;
	width: 80%;
	height: 2px;
	border: none;
	border-radius: 2px;
	background: ${theme.colors.desktopGradient};
`;

const ParagraphContainer = styled.div`
	margin: 0.5rem 0rem;
`;

const Paragraph = styled.p`
	font-size: ${theme.fonts.subtitleMobile};
`;

export default AboutMe;
