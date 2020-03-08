import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Skills = ({isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Навыки' : 'Skills'}
                          quote={"Life without knowledge is death in disguise."}
                          author={"Talib Kweli"}/>
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