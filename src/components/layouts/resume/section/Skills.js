import React from 'react';

const Skills = () => {
    return (

        <section className="resume-section" id="skills">
            <div className="my-auto">
                <h2 className="mb-5">Навыки</h2>
                <ul className="list-inline list-icons">
                    <li className="list-inline-item">
                        <i className="devicons devicons-java"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-git"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-github"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-intellij"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-javascript"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-bootstrap"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-linux"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-android"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-postgresql"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicons devicons-mysql"></i>
                    </li>
                </ul>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-check"></i>
                        <b>ТЕХНОЛОГИИ &amp; ФРЕЙМВОРКИ:</b> Java EE, JSP, Servlet, JAX-RS, SOAP, REST, Spring (Core, MVC,
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
            </div>
        </section>
    );
}

export default Skills;