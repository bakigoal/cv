import React from 'react';
import About from './section/About';
import Experience from './section/Experience';
import Skills from './section/Skills';
import Education from './section/Education';
import Interests from './section/Interests';
import resumeEn from '../../../static/resume-en.json';
import resumeRu from '../../../static/resume-ru.json';
import './Resume.scss';
import NavBar from "../../navbar/NavBar";
import navigation from "../../../static/navigation";
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styleVariables from "../../../shared/style/variables.scss";

const Resume = (props) => {
    const isRu = props.match.path.startsWith('/ru');

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
            fontSize: 16,
        }
    });
    theme = responsiveFontSizes(theme);

    const sections = isRu ? navigation.sectionsRu : navigation.sectionsEn;
    const resume = isRu ? resumeRu : resumeEn;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div>
                <NavBar sections={sections} isRu={isRu}/>
                <section id="about" className="resume-section">
                    <About userInfo={resume.user}/>
                </section>
                <section id="experience" className="resume-section resume-section-even">
                    <Experience experienceList={resume.experience}/>
                </section>
                <section id="skills" className="resume-section">
                    <Skills/>
                </section>
                <section id="education" className="resume-section resume-section-even">
                    <Education/>
                </section>
                <section id="interests" className="resume-section">
                    <Interests/>
                </section>
            </div>
        </ThemeProvider>
    )
};

export default Resume;