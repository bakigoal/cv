import React, { Component } from 'react';
import About from './section/About';
import Experience from './section/Experience';
import Skills from './section/Skills';
import Education from './section/Education';
import Interests from './section/Interests';
import resume from '../../../static/resume.json';
import './Resume.css';

class Resume extends Component {

    render() {
        return (
            <div>
                <About userInfo={resume.user} />
                <Experience experienceList={resume.experience} />
                <Skills />
                <Education />
                <Interests />
            </div>
        );
    }
}

export default Resume;