import React from 'react';
import Typography from "@material-ui/core/Typography";

const Contact = ({isRu}) => {
    return (
        <>
            <Typography variant='h3' className="resume-section-title">
                {isRu ? 'Интересы' : 'Contact'}
            </Typography>
            <p>В свободное от работы время стараюсь вести активный образ жизни. Играю в футбол, бегаю, катаюсь на
                велосипеде.</p>
            <p className="mb-0">Нравится читать книги, изучать новые технологии, тестировать различные дистрибутивы
                Linux.</p>
        </>
    );
};

export default Contact;