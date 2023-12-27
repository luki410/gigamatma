export default function Hero() {

    return (
        <section className="Hero">
            <div className="HeroIntroduction">
                <h1>Zobacz jak łatwo możesz zrozumieć Matematykę!</h1>
                <p>Ucz się rozwiązując zadania w formie nowoczesnych Quizów, doskonal się przy filmikach z pełnymi rozwiązaniami i monitoruj swoje postępy!
                    Osiągnij sukces na każdym sprawdzianie!</p>

                <div className="HeroLinks">
                    <a href="" className="HeroBuy"><img src="./HeroCart.png" alt="img" />Zakup kurs</a>
                    <a href="" className="HeroCreateAcc"><img src="./HeroAccount.png" alt="img" />Stwórz konto</a>
                </div>
            </div>

            <img src="./HeroMobile.png" alt="img" className="HeroImgMobile" />
            <img src="./HeroDesktop.png" alt="img" className="HeroImgDesktop" />

        </section>
    )
}