import { useState } from "react";

//każdy topics niech ma tyle indexów ile ma indexów topic z ich największą liczbą nawet jeśli są puste
const egzamin = [
    {
        id: 1,
        title: "Kurs dla klasy 7",
        val: "egzamin",
        img: "./Book.png",
        price: 1337,
        topics: ["Procenty", "Figury geometryczne", "Wyrażenia algebraiczne", "Równania", "Potęgi", "Pierwiastki"],
    },
    {
        id: 2,
        title: "Kurs dla klasy 8",
        val: "egzamin",
        img: "./logo192.png",
        price: 1338,
        topics: ["Procenty", "Figury geometryczne", "Wyrażenia algebraiczne", "Równania", "Potęgi", ""],
    }

];

//każdy topics niech ma tyle indexów ile ma indexów topic z ich największą liczbą nawet jeśli są puste
const matura = [
    {
        id: 1,
        title: "Matura z matematyki",
        val: "matura",
        img: "./Book.png",
        price: 1339,
        topics: ["Procenty", "Figury geometryczne", "Wyrażenia algebraiczne", "Równania", "", ""],
    },
    {
        id: 2,
        title: "Matura z chemii",
        val: "matura",
        img: "./logo192.png",
        price: 6969,
        topics: ["Procenty", "Figury geometryczne", "Wyrażenia algebraiczne", "", "", ""],
    }
];




export default function Bestsellers() {

    const [whatId, setWhatId] = useState(1);
    const [testType, setTestType] = useState("egzamin");

    const [desktopId, setDesktopId] = useState(1);

    function DesktopId1() {
        return setDesktopId(1);
    }


    function DesktopId2() {
        return setDesktopId(2);
    }





    //przechowuje wartości o kursach podstawy
    let dataEgz = egzamin.find(obj => {
        return (obj.id === whatId);
    });

    //przechowuje wartosći o kursach podstawy
    let dataMat = matura.find(obj => {
        return (obj.id === whatId);
    });


    //zmiana id - dodanie - 1 || dodatkowo sprawdza jaki jest zapisany testType w state i na jego podstawie renderuje poprawne dane
    function leftButtonClick() {

        if (whatId > 1) {
            setWhatId((id) => id - 1);

            if (testType === "egzamin" && whatId > 1) {
                dataEgz = egzamin.find(obj => {
                    return (obj.id === whatId);
                });
            }
            else if (testType === "matura" && whatId > 1) {
                dataMat = matura.find(obj => {
                    return (obj.id === whatId);
                });
            }

        }
    };

    //zmiana id - dodanie + 1 || dodatkowo sprawdza jaki jest zapisany testType w state i na jego podstawie renderuje poprawne dane
    function rightButtonClick() {

        if (whatId < 2) {
            setWhatId((id) => id + 1);

            if (testType === "egzamin" && whatId < 2) {
                dataEgz = egzamin.find(obj => {
                    return (obj.id === whatId);
                });
            }
            else if (testType === "matura" && whatId < 2) {
                dataMat = matura.find(obj => {
                    return (obj.id === whatId);
                });
            }
        }


    };

    //funkcja sprawdza cz w tablicach z danymi są wartości jeśli tak to generuje ich liste || dodatkowo sprawdza czy id nie jest poza zasięgiem możliwyc obiektów jeśli tak to sie nie wysypuje, należy zmienić jeśli dodamy więcej obiektów z danymi 
    function Check(a) {

        if (testType === "egzamin" && (whatId === 1 || whatId === 2)) {
            if (dataEgz.topics[a].length > 0) {
                return <li>{dataEgz.topics[a]}</li>
            }
            else
                return
        }

        if (testType === "matura" && (whatId === 1 || whatId === 2)) {
            if (dataMat.topics[a].length > 0) {
                return <li>{dataMat.topics[a]}</li>
            }
            else
                return
        }


    }

    console.log(desktopId);

    return (
        <section className="Bestseller">

            <div className="BestsellerMobile">
                <div className="BestsellerTitle">
                    <h1>Bestsellery w tym miesiącu</h1>
                    <p>Wybierz odpowiedzni kurs dla poziomu klasy, w której teraz jesteś.</p>

                    <select className="BestsellerSelect" name="choice" id="choice" onChange={(e) => setTestType(e.target.value)}>
                        <option value="egzamin">Gimnazjum</option>
                        <option value="matura">Matura</option>
                    </select>
                </div>

                <div className="BestsellerContentContainer">

                    <h1>{testType === "egzamin" ? dataEgz.title : dataMat.title}</h1>
                    <img className="BestsellerImg" src={testType === "egzamin" ? dataEgz.img : dataMat.img} alt="Zdjęcie kursu" />

                    <p>Tematyka działów</p>
                    <hr className="LineBestseller" />

                </div>

                <div className="BestsellerControlsContainer">
                    <ul className="ListBestsellers">
                        {Check(0)}
                        {Check(1)}
                        {Check(2)}
                        {Check(3)}
                        {Check(4)}
                        {Check(5)}
                    </ul>

                    <div className="BestsellerBuy">
                        <span>{testType === "egzamin" ? dataEgz.price : dataMat.price} zl</span>
                        <button className="BestsellerBuyButton">Dodaj do koszyka</button>

                    </div>

                    <div className="BestsellerControls">
                        <div className="BestsellerControlsContent">
                            <button className="BestsellerIdButton" onClick={leftButtonClick}>&lt;</button>
                            <div className={whatId === 1 ? "BestsellerProgressBarActive" : "BestsellerProgressBar"}></div>
                            <div className={whatId === 2 ? "BestsellerProgressBarActive" : "BestsellerProgressBar"}></div>
                            <button className="BestsellerIdButton" onClick={rightButtonClick}>&gt;</button>
                        </div>
                    </div>
                </div>
                <a className="BestsellerShopRedirection" href="#Bestseller">Zobacz wszystkie kursy</a>
            </div>

            <div className="BestsellerDesktopHolder">
                <h1>Bestsellery w tym miesiącu</h1>
                <p>Wybierz odpowiedzni kurs dla poziomu klasy, w której teraz jesteś.</p>

                <div className="BestsellerDesktopButtonsHolder">
                    <button className="BestsellerDesktopButtons" onClick={DesktopId1}>Szkoła podstawowa</button>
                    <button className="BestsellerDesktopButtons" onClick={DesktopId2}>Pakiety szkoły podstawowej</button>
                    <button className="BestsellerDesktopButtons">Szkoła średnia</button>
                    <button className="BestsellerDesktopButtons">Pakiety szkoły średniej</button>
                </div>
            </div>

            {desktopId === 1 ? <BestsellerDesktop /> : <BestsellerDesktopPacket />}



        </section>
    );


}

function BestsellerDesktop() {




    return (
        <div className="BestsellerDesktop">

            <div className="BestsellerDesktopContentHolder">

                <div className="BestsellerDesktopContent1">

                    <div className="BestsellerDesktopContentLeft">
                        <h1>Kurs dla klasy 7</h1>
                        <img className="BestsellerImgDesktop" src="./Book.png" alt="Zdjęcie kursu" />
                    </div>

                    <div className="BestsellerDesktopContentRight">

                        <p>Tematyka działów</p>
                        <ul className="ListBestsellersDesktop">
                            <li>Figury geometryczne</li>
                            <li>Równania</li>
                            <li>Graniastosłupy</li>
                            <li>Potęgi, notacja wykładnicza, pierwiastki</li>
                            <li>Obliczenia procentowe</li>
                            <li>wyrażenia algebraiczne</li>
                        </ul>
                        <span className="BestsellerDesktopPrice"><b>00.00 zł</b></span>
                        <button className="BestsellerBuyButton">Dodaj do koszyka</button>

                    </div>
                </div>

                <div className="BestsellerDesktopContent2">
                    <div className="BestsellerDesktopContentLeft">
                        <h1>Kurs dla klasy 8</h1>
                        <img className="BestsellerImgDesktop" src="./Book.png" alt="Zdjęcie kursu" />
                    </div>
                    <div className="BestsellerDesktopContentRight">

                        <p>Tematyka działów</p>
                        <ul className="ListBestsellersDesktop">
                            <li>Figury geometryczne na płaszczyźnie</li>
                            <li>Wyrażenia algebraiczne i równania</li>
                            <li>Graniastosłupy i ostrosłupy</li>
                            <li>Liczby i działania</li>
                            <li>Procenty, lokaty i wykresy</li>
                        </ul>
                        <span className="BestsellerDesktopPrice"><b>00.00 zł</b></span>
                        <button className="BestsellerBuyButton">Dodaj do koszyka</button>

                    </div>
                </div>

            </div>
            <a className="BestsellerShopRedirection" href="#Bestseller">Zobacz wszystkie kursy</a>
        </div>
    );
}


function BestsellerDesktopPacket() {



    return (
        <div className="BestsellerDesktopPacket">

            <div className="BestsellerDesktopPacketContent">

                <img className="BestsellerImgDesktop" src="./Book.png" alt="Zdjęcie kursu" />

                <div className="BestsellerDesktopPacketSaleHolder">
                    <div className="BestsellerDesktopPacketSale"><span>-20%</span></div>
                    <div className="BestsellerDesktopPacketClass"><span>klasa 7</span></div>
                </div>
                <h1>Figury geometryczne</h1>
                <span><b>00.00 zł</b></span>
                <button className="BestsellerBuyButton">Dodaj do koszyka</button>
            </div>

            <div className="BestsellerDesktopPacketContent">

                <img className="BestsellerImgDesktop" src="./Book.png" alt="Zdjęcie kursu" />

                <div className="BestsellerDesktopPacketSaleHolder">
                    <div className="BestsellerDesktopPacketSale"><span>-20%</span></div>
                    <div className="BestsellerDesktopPacketClass"><span>klasa 7</span></div>
                </div>
                <h1>Obliczenia procentowe</h1>
                <span><b>00.00 zł</b></span>
                <button className="BestsellerBuyButton">Dodaj do koszyka</button>
            </div>

            <div className="BestsellerDesktopPacketContent">

                <img className="BestsellerImgDesktop" src="./Book.png" alt="Zdjęcie kursu" />

                <div className="BestsellerDesktopPacketSaleHolder">
                    <div className="BestsellerDesktopPacketSale"><span>-20%</span></div>
                    <div className="BestsellerDesktopPacketClass"><span>klasa 7</span></div>
                </div>
                <h1>Wyrażenia algebraiczne</h1>
                <span><b>00.00 zł</b></span>
                <button className="BestsellerBuyButton">Dodaj do koszyka</button>
            </div>

        </div>
    );
}




