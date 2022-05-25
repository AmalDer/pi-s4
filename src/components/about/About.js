import React from "react";

import image from "../../assets/robot.png";
import './About.css';
export default function About() {
    return(
        <div>
            <section id="about">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-5">
                    <h2 className="display-4 lh-1 mb-4">Découvrez plus notre assistant virtuel!</h2>
                    <h6 align="justify" className="lead fw-normal mb-5 mb-lg-0">
                    Entreprise, Start-Up, ou juste porteur d'idées innovantes, notre assistant virtuel est le meilleur assistant pour vous!<br />
                    Nous vous avons préparé plusieurs fonctionnalités qui pourront vous intéresser!<br />
                    En une simple commande vocale ou un seul simple clic, notre assistant va vous automatiser toutes vos tâches.<br />
                    Vous souhaitez envoyer un mail, plannifier des réunions, prendre des rendez-vous ou même connaître les actualités économiques qui vous intéressent?
                    Ne vous en faîtes pas, la tâche est devenue facile!<br />
                    Si vous voulez même vous divertir, regarder une vidéo ou écouter une musique, une simple commande vocale vous fera la tâche!
                    </h6>
                </div>
                <div className="col-sm-8 col-md-5">
                    <div className="px-5 px-sm-0">
                    <img src={image} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}
