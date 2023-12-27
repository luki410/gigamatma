import { useState } from "react";

const faqs = [
    {
        title: "Czy muszę mieć konto na platformie aby korzystać z kursów?",
        text: "Tak głupi chuju musisz, dawaj hajs."
    },
    {
        title: "Czy forma online może zastąpić korepetytora?",
        text: "Tak, może, ucham ci matke."
    },
    {
        title: "Czy oferowane kursy zapewniają kompletną pomoc w nauce według aktualnego programu nauczania?",
        text: "Nie wiem cipcioszku spytaj się facetki"
    },
    {
        title: "Czy oferowane kursy przygotowywują do egzaminu ósmoklasisty?",
        text: "To zależy czy jesteś debilem czy nie"
    },
    {
        title: "Czy uzyskam rabat na zakup kolejnych kursów od gigamatma?",
        text: "HAHAHA po moim trupie frajerze"
    }
];

export default function Faq() {


    return (

        <section className="FAQ">

            <h1>Najczęściej zdawane <br />pytania</h1>
            <img src="./FAQ.png" alt="faq" />

            <div>
                <Accordion data={faqs} />
            </div>

        </section>

    );

}

function Accordion({ data }) {
    return (
        <div className="Accordion">
            {data.map((el) => (
                <AccordionItem title={el.title} text={el.text} key={el.title} />
            ))}
        </div>
    );
}


function AccordionItem({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="AccordionBox" onClick={handleToggle}>
            <div className="AccordionContentBox">
                <p className="title">{title}</p>
                <p className="PlusMinus">{isOpen ? "-" : "+"}</p>
            </div>

            {isOpen && <div className="content-box">{text}</div>}
            <hr className="AccordionLine" />
        </div>
    );
}