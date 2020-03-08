import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Contact = ({isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Контакты' : 'Contact'}
                          quote={"If I had asked people what they wanted, they would have said faster horses."}
                          author={"Henry Ford"}/>
            <p>В свободное от работы время стараюсь вести активный образ жизни. Играю в футбол, бегаю, катаюсь на
                велосипеде.</p>
            <p className="mb-0">Нравится читать книги, изучать новые технологии, тестировать различные дистрибутивы
                Linux.</p>
        </>
    );
};

export default Contact;