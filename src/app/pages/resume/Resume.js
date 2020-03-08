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
            fontSize: 16,
        }
    });
    theme = responsiveFontSizes(theme);

    const sections = isRu() ? navigation.sectionsRu : navigation.sectionsEn;
    const resume = isRu() ? resumeRu : resumeEn;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div>
                <NavBar sections={sections} isRu={isRu()} onLangChange={setLang}/>
                <section id="profile" className="resume-section">
                    <Profile userInfo={resume.user} isRu={isRu()}/>
                </section>
                <section id="experience" className="resume-section resume-section-even">
                    <Experience experienceList={resume.experience} isRu={isRu()}/>
                </section>
                <section id="skills" className="resume-section">
                    <Skills/>
                </section>
                <section id="education" className="resume-section resume-section-even">
                    <Education isRu={isRu()}/>
                </section>
                <section id="contact" className="resume-section">
                    <Contact isRu={isRu()}/>
                </section>
            </div>
        </ThemeProvider>
    )
};

export default Resume;