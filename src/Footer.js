export default function Footer() {

    return (
        <footer>

            <div className="FooterContentLeft">
                <img src="./Logo.png" alt="Logo GigaMatmo" />
                <span>Siedziba firmy Giga Matma Sp. z o.o.</span>
                <span>00-000 Kraków, ul. Przykładowa3</span>
                <span>+48 000 000 000</span>
                <span>kontakt@gigamatma.pl</span>
            </div>

            <div className="FooterContentMiddle">
                <a href="">Kursy</a>
                <a href="">Pakiety klasowe</a>
                <a href="">Szkoła podstawowa</a>
                <a href="">Szkoła średnia</a>
            </div>

            <div className="FooterContentRight">

                <a href="">Przydatne linki</a>
                <a href="">Blog matematyczny</a>
                <a href="">Sklep</a>
                <a href=""><img src="./korki.png" alt="korepetycje logo" className="FooterContentRightImg" /></a>

                <div className="FooterContentSocialMedia">
                    <a href=""><img src="./fb.png" alt="korepetycje logo" /></a>
                    <a href=""><img src="./yt.png" alt="korepetycje logo" /></a>
                    <a href=""><img src="./insta.png" alt="korepetycje logo" /></a>
                    <a href=""><img src="./tiktok.png" alt="korepetycje logo" /></a>
                </div>


            </div>



        </footer>
    );
}