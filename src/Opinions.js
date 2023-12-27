export default function Opinions() {

    return (
        <section className="Opinions">

            <h1>Opinie naszych kursantów</h1>

            <div className="ReviewHolder">

                <div className="OpinionsContent2">
                    <img src="./fb.png" alt="cos" />

                    <div className="OpinionsText">
                        <span className="OpinionsUserName">Michał Michałchałlik</span>
                        <p className="OpinionsUserClass">
                            Klasa 2 szkoły średniej
                        </p>
                        <p className="OpinionsUserComment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                    </div>
                </div>

                <div className="OpinionsContent">
                    <img src="./fb.png" alt="cos" />

                    <div className="OpinionsText">
                        <span className="OpinionsUserName">Michał Michałchałlik</span>
                        <p className="OpinionsUserClass">
                            Klasa 2 szkoły średniej
                        </p>
                        <p className="OpinionsUserComment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                    </div>

                </div>


                <div className="OpinionsContent3">
                    <img src="./fb.png" alt="cos" />

                    <div className="OpinionsText">
                        <span className="OpinionsUserName">Michał Michałchałlik</span>
                        <p className="OpinionsUserClass">
                            Klasa 2 szkoły średniej
                        </p>
                        <p className="OpinionsUserComment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>
                    </div>
                </div>


            </div>


            <div className="OpinionsControls">
                <button className="OpinionsIdButton">&lt;</button>
                <div className="OpinionsProgressBarActive"></div>
                <div className="OpinionsProgressBar"></div>
                <div className="OpinionsProgressBar"></div>
                <button className="OpinionsIdButton">&gt;</button>
            </div>

            <a href="" className="OpinionsRedirect">Zobacz wszystkie opinie</a>

        </section>
    );
}