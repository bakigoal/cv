import React from 'react';
import Profile from './section/Profile';
import Experience from './section/Experience';
import Skills from './section/Skills';
import Education from './section/Education';
import Contact from './section/Contact';
import resumeEn from '../../../static/resume-en.json';
import resumeRu from '../../../static/resume-ru.json';
import './Resume.scss';
import NavBar from "../../components/navbar/NavBar";
import navigation from "../../../static/navigation";
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styleVariables from "../../../shared/style/variables.scss";
import {Container} from "@material-ui/core";

const LANGUAGES = ['RU', 'EN'];

const Resume = () => {

    let [lang, setLang] = React.useState(LANGUAGES[1]);
    const isRu = () => lang.toUpperCase() === LANGUAGES[0];

    let theme = createMuiTheme({
        palette: {
            primary: {
                main: styleVariables.primaryColor
            },
            secondary: {
                main: styleVariables.secondaryColor
            }
        },
        typography: {
            fontFamily: [
                'Open Sans',
                '-apple-system',
                'Raleway',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            h2: {
                color: styleVariables.cyanColor,
                fontWeight: 400,
                fontSize: '3.2rem'
            },
            h3: {
                color: styleVariables.cyanColor,
                fontWeight: 400,
                fontSize: '1.75rem',
                marginBottom: '1.25rem'
            },
            h5: {
                color: 'rgb(67,66,66)',
                fontWeight: 600,
                fontSize: '1.2rem'
            },
            h6: {
                color: 'rgb(67,66,66)',
                fontWeight: 600,
                fontSize: '1rem'
            },
            subtitle1: {
                color: styleVariables.typographyColor,
                fontSize: '1.25rem',
                fontWeight: 300,
            },
            body1: {
                color: styleVariables.typographyColor,
                fontWeight: 300,
            }
        }
    });
    theme = responsiveFontSizes(theme);

    const sections = isRu() ? navigation.sectionsRu : navigation.sectionsEn;
    const resume = isRu() ? resumeRu : resumeEn;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="resume-container">
                <NavBar sections={sections} isRu={isRu()} onLangChange={setLang}/>
                <section id="profile" className="resume-section">
                    <Container maxWidth="md">
                        <Profile userInfo={resume.user} isRu={isRu()}/>
                    </Container>
                </section>
                <section id="experience" className="resume-section resume-section-even">
                    <Container maxWidth="md">
                        <Experience experienceList={resume.experience} isRu={isRu()}/>
                    </Container>
                </section>
                <section id="skills" className="resume-section">
                    <Container maxWidth="md">
                        <Skills isRu={isRu()}/>
                    </Container>
                </section>
                <section id="education" className="resume-section resume-section-even">
                    <Container maxWidth="md">
                        <Education isRu={isRu()}/>
                    </Container>
                </section>
                <section id="contact" className="resume-section resume-section-last">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="60" width="100%" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 L50 100 L100 0 Z" fill={styleVariables.evenSectionColor} stroke={styleVariables.evenSectionColor} />
                    </svg>
                    <Container maxWidth="md" className="resume-section-last-container">
                        <Contact isRu={isRu()}/>
                    </Container>
                </section>
            </div>
        </ThemeProvider>
    )
};

export default Resume;