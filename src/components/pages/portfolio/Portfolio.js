import React from "react";
import NavBar from "../../navbar/NavBar";
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles";
import styleVariables from "../../../shared/style/variables.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import About from "../resume/section/About";
import resume from "../../../static/resume";
import Experience from "../resume/section/Experience";

const Portfolio = () => {
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
    const sections = [{path: "/", name: "Resume"}, {path: "#experience", name: "Experience"}];
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar sections={sections}/>
            <section id="about" className="resume-section">
                <About userInfo={resume.user}/>
            </section>
            <section id="experience" className="resume-section resume-section-even">
                <Experience experienceList={resume.experience}/>
            </section>
        </ThemeProvider>
    );
};

export default Portfolio;