import { useState } from "react";

export default function Header() {

    let cartSum = 0;

    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [dropdownBar, setDropdownBar] = useState(false);

    //przełączanie toggleNavbar na true / false 
    function NavbarToggle() {
        return setToggleNavbar((c) => !c);
    }

    function DropdownEnter() {
        setDropdownBar(true);

    }

    function DropdownLeave() {
        setDropdownBar(false);

    }

    return (


        <header>

            <div className="HeaderMobile">
                <img src="./LogoMobile.png" alt="logo" className="HeaderLogoMobile" />

                <button className="NavbarToggle" onClick={NavbarToggle}><img src={toggleNavbar ? "./Close.png" : "./Hamburger.png"} alt="open navbar" className="NavbarHamburger" /></button>
            </div>
            <div className="NavbarMobileHolder">
                {toggleNavbar ? NavbarMobile() : ""}
            </div>






            <div className="HeaderDesktop">
                <img src="./LogoDesktop.png" alt="logo" className="HeaderLogoDesktop" />

                <div className="HeaderDesktopMiddleSideHolder">
                    <a href="" className="HeaderDesktopNavbarKursy" onMouseEnter={DropdownEnter} onMouseLeave={DropdownLeave}>Kursy</a>
                    <a href="" className="HeaderDesktopNavbarBlog">Blog matematyczny</a>
                </div>

                <div className="HeaderDesktopRightSideHolder">
                    <a href="" className="CreateAccountRedirect">Stwórz konto</a>
                    <a href="" className="LogInRedirect">Zaloguj się</a>
                    <div className="HeaderDesktopCartHolder">
                        <img src="./Cart.png" alt="Cart" className="Cart" />
                        <span><b>{cartSum} zł</b></span>
                    </div>
                </div>
            </div>
            <div className="NavbarDesktopHolder" onMouseEnter={DropdownEnter} onMouseLeave={DropdownLeave}>
                {dropdownBar ? NavbarDesktop() : ""}
            </div>

        </header>


    );
}

function NavbarMobile() {


    return (
        <nav className="NavbarMobile">

            <div className="NavbarMobileContent">
                <img src="./NavbarKursy.png" alt="kursy" />
                <a href="" className="NavbarMobileRedirect">Kursy</a>
            </div>
            <hr className="NavbarMobileLine" />

            <div className="NavbarMobileContent">
                <img src="./NavbarBlog.png" alt="blog" />
                <a href="" className="NavbarMobileRedirect">Blog matematyczny</a>

            </div>
            <hr className="NavbarMobileLine" />

            <div className="NavbarMobileContent">
                <img src="./NavbarRegister.png" alt="register" />
                <a href="" className="NavbarMobileRedirect">Stwórz konto</a>

            </div>
            <hr className="NavbarMobileLine" />

            <div className="NavbarMobileContent">
                <img src="./NavbarLogIn.png" alt="login" />
                <a href="" className="NavbarMobileRedirect">Zaloguj się</a>
            </div>
            <hr className="NavbarMobileLine" />

            <div className="NavbarMobileContent">
                <img src="./NavbarKoszyk.png" alt="koszyk" />
                <a href="" className="NavbarMobileRedirect">Koszyk</a>
            </div>
        </nav>
    );


}


function NavbarDesktop() {

    return (
        <div className="NavbarDesktop" >
            <div className="NavbarDesktopTitle1">
                <h1>Szkoła podstawowa</h1>
            </div>

            <div className="NavbarDesktopContent1">
                <h1 className="NavbarDesktopTitleContent">Klasa 7</h1>
                <ul>
                    <li><a href="">Figury geometryczne</a></li>
                    <li><a href="">Równania</a></li>
                    <li><a href="">Graniastosłupy</a></li>
                    <li><a href="">Potęgi, Notacja Wykładnicza, Pierwiastki</a></li>
                    <li><a href="">Obliczenia procentowe</a></li>
                    <li><a href="">Wyrażenia algebraiczne</a></li>
                </ul>
            </div>

            <div className="NavbarDesktopContent2">
                <h1 className="NavbarDesktopTitleContent">Klasa 8</h1>
                <ul>
                    <li><a href="">Figury geometryczne na płaszczyźnie</a></li>
                    <li><a href="">Wyrażenia algebraiczne i równania</a></li>
                    <li><a href="">Zastosowanie matematyki - Procenty, Lokaty, Wykresy</a></li>
                    <li><a href="">Potęgi, Notacja Wykładnicza, Pierwiastki</a></li>
                    <li><a href="">Liczby i działania</a></li>
                    <li><a href="">Graniastosłupy i ostrosłupy</a></li>
                </ul>
            </div>

            <div className="NavbarDesktopTitle2">
                <h1>Szkoła średnia</h1>
                <h2>Już w krótce...</h2>
            </div>

        </div>
    );
}

