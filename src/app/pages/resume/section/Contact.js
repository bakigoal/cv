import React from 'react';
import {Container} from "@material-ui/core";

const Contact = ({isRu}) => {
    return (
        <Container>
            <h2 className="mb-5">{isRu?'Интересы':'Contact'}</h2>
            <p>В свободное от работы время стараюсь вести активный образ жизни. Играю в футбол, бегаю, катаюсь на
                велосипеде.</p>
            <p className="mb-0">Нравится читать книги, изучать новые технологии, тестировать различные дистрибутивы
                Linux.</p>
        </Container>
    );
};

export default Contact;