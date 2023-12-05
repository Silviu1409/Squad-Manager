import React from "react";
import './Home.css';


function Home(){
    return (
        <div className="home">

            <svg viewBox="0 0 1320 300">
                <text x="50%" y="30%" dy=".35em" textAnchor="middle">
                    SQUAD 
                </text>
                <text x="50%" y="80%" dy=".35em" textAnchor="middle">
                    MANAGER
                </text>
            </svg> 
            
            <div className="divHome">
                <div>
                    <center> <h1> Despre aplicație </h1> </center>

                    <p>“Squad Manager” este o aplicație web pentru gestionarea unui club sportiv. Aceasta este adresată în mod special cluburilor care își desfășoară activitatea în campionatele de fotbal.</p>
                    <p>Aplicația a fost dezvoltată special pentru a ușura munca cluburilor sportive, ajutându-i pe oamenii ce activează în industria sportivă să gestioneze mai facil clubul, să aibă acces oricând la toate informațiile echipei.</p>
                    <p>Squad Manager, după cum sugerează și denumirea, preia din atribuțiile managerului clubului. Memorând toate datele importante de la nivelul clubului, aplicația este oricând pregătită să îți ofere orice informație ai nevoie referitoare la echipa ta.</p>
                    <p>Cu aplicația Squad Manager ai un asistent pregătit în permanență să răspundă căutărilor tale.</p>
                </div>

                <div >
                    <center> <h1> Echipă developeri </h1> </center>
                    
                    <ol>
                        <li><span className="text-wrapper">Avian Silviu</span></li>
                        <li><span className="text-wrapper">Dijmărescu Cristina</span></li>
                        <li><span className="text-wrapper">Ionescu Alexandru</span></li>
                        <li><span className="text-wrapper">Stan Ana</span></li>
                    </ol>
                </div>
            </div>
        </div> 
    );
}

export default Home;