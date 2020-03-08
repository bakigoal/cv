import React from 'react';
import Typography from "@material-ui/core/Typography";

const Skills = ({isRu}) => {
    return (
        <>
            <Typography variant='h3' className="resume-section-title">
                {isRu ? 'Навыки' : 'Skills'}
            </Typography>
            <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>ТЕХНОЛОГИИ &amp; ФРЕЙМВОРКИ:</b> Java EE, JSP, Servlet, JAX-RS, SOAP, REST, Spring (Core,
                    MVC,
                    Security),
                    JDBC, ORM (Hibernate), Vaadin, BIRT, SWING, JavaFX
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>ВЕБ:</b> HTML, CSS, JavaScript, AngularJS
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>СУБД:</b> PostgreSQL, MySQL
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>DEVELOPMENT TOOLS:</b> Gradle, Maven, Git, Jira, Redmine
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>IDE:</b> IntelliJ IDEA, Netbeans, Eclipse , Android Studio
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    <b>ОС:</b> Windows, Linux
                </li>
            </ul>
        </>
    );
};

export default Skills;