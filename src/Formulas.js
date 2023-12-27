export default function Formulas() {

    return (
        <section className="Formulas">

            <div className="FormulasForm">
                <h1>Nie wierzysz, że takie to proste?</h1>
                <p>Podaj email i odbierz darmowe karty z matematycznymi wzorami!</p>

                <form>
                    <input type="email" id="email" name="email" className="FormulasEmail" placeholder="E-mail" required />
                    <input type="submit" value="Pobierz" className="FormulasDownload" />
                </form>
            </div>

            <div className="FormulasLogosContainer">

                <h1>Sprawdź nas na innych platformach</h1>
                <p>Odwiedź nasze social media, jeśli chcesz pozostawać w świetnej matematycznej formie i otrzymywać regularnie przydatne wskazówki oraz interesujące zadania matematyczne!</p>

                <div className="FormulasLogos">
                    <img src="./fb.png" alt="korepetycje logo" />
                    <img src="./yt.png" alt="korepetycje logo" />
                    <img src="./insta.png" alt="korepetycje logo" />
                    <img src="./tiktok.png" alt="korepetycje logo" />
                </div>
                <img src="./korki.png" alt="korepetycje logo" />
            </div>

        </section>
    );
}