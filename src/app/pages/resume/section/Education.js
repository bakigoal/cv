import React from 'react';
import Typography from "@material-ui/core/Typography";

const Education = ({isRu}) => {
    return (
        <>
            <Typography variant='h3' className="resume-section-title">
                {isRu ? 'Образование' : 'Education'}
            </Typography>
            <h2 className="mb-4">Университет</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h4 className="mb-1">Башкирский Государственный Университет</h4>
                    <div className="subheading mb-0">
                        факультет математики и информационных технологий
                    </div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Сентябрь 2009 - Май 2013</span>
                </div>
            </div>
            <h2 className="mb-4">Курсы</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h4 className="mb-1">Разработка Веб и Корпоративных приложений на Java</h4>
                    <div className="subheading">Datateh.ru</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">October 2014 - May 2015</span>
                </div>
            </div>
            <h2 className="mb-4">Электронные сертификаты</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-3">
                <div className="resume-content mr-auto">
                    <h5 className="mb-0">
                        <a href="https://stepik.org/cert/109641" target="_blank" rel="noopener noreferrer">Программирование
                            на Python</a>
                    </h5>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Июнь 2018</span>
                </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-3">
                <div className="resume-content mr-auto">
                    <h5 className="mb-0">
                        <a href="https://stepik.org/cert/108513" target="_blank" rel="noopener noreferrer">Введение
                            в
                            Linux</a>
                    </h5>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Май 2018</span>
                </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-3">
                <div className="resume-content mr-auto">
                    <h5 className="mb-0">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/RYNEZA4XKXSC"
                           target="_blank" rel="noopener noreferrer">HTML,
                            CSS, and Javascript for Web Developers</a>
                    </h5>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Декабрь 2016</span>
                </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-3">
                <div className="resume-content mr-auto">
                    <h5 className="mb-0">
                        <a href="https://www.intuit.ru/verifydiplomas/100944634" target="_blank"
                           rel="noopener noreferrer">Углубленное программирование на
                            Java</a>
                    </h5>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">Март 2016</span>
                </div>
            </div>
        </>
    );
};

export default Education;