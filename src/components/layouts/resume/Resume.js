import React, {Component} from 'react';
import About from './section/About';
import Experience from './section/Experience';
import Skills from './section/Skills';
import Education from './section/Education';
import Interests from './section/Interests';
import resume from '../../../static/resume.json';
import './Resume.scss';
import NavBar from "../../navbar/NavBar";
import navigation from "../../../static/navigation";

class Resume extends Component {

    render() {
        return (
            <div>
                <NavBar sections={navigation.sections}/>
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
        );
    }
}

export default Resume;