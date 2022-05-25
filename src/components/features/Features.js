import React from "react";

import image from "../../assets/robot.png";

export default function Features() {
    return(
        <div>
            <section>
            <div className="container" >
                <div className="row">
                <div className="col-lg-8">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                        <div>
                            <i className="bi bi-calendar2-day icon-feature text-gradient d-block mb-3" />
                            <h3>Gestion du planning</h3>
                            <p>A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer votre planning en toute aisance!</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div>
                            <i className="bi bi-envelope icon-feature text-gradient d-block mb-3" />
                            <h3>Gestion des e-mails</h3>
                            <p>A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer vos e-mails facilement!</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="text-center">
                            <i className="bi bi-list-check icon-feature text-gradient d-block mb-3" />
                            <h3>Gestion de votre to-do list</h3>
                            <p>A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer votre planning en toute aisance!</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="text-center">
                            <i className="bi bi-graph-up icon-feature text-gradient d-block mb-3" />
                            <h3>Affichage des nouveautés économiques</h3>
                            <p>A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer vos e-mails facilement!</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div>
                            <i className="bi bi-people-fill icon-feature text-gradient d-block mb-3" />
                            <h3>Prise de rendez-vous et plannification des réunions</h3>
                            <p>En un seul simple clic, votre rendez-vous est ajouté à votre planning! Y a pas plus facile que ça!</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div>
                            <i className="bi bi-files icon-feature text-gradient d-block mb-3" />
                            <h3>Traduction de vos documents</h3>
                            <p>En une commande vocale, votre réunion avec les membres de votre équipe est plannifié!</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img src={image} className="img-fluid" alt="Responsive image" />
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}
