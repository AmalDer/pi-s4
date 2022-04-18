import React from "react";

import image from "../assets/robot.png";

export default function Features() {
    return(
        <div>
           {/* La section des fonctionnalités */}
            <section id="features">
            <div className="container">
                <div className="row gx-5 align-items-center">
                <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                    <div className="container-fluid px-5">
                    <div className="row gx-5">
                        <div className="col-md-6">
                        {/* Fonctionnalité 1 */}
                        <div className="text-center">
                            <i className="bi bi-calendar2-day icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Gestion du planning</h3>
                            <p className="text-muted mb-0">A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer votre planning en toute aisance!</p>
                        </div>
                        </div>
                        <div className="col-md-6 mb-5">
                        {/* Fonctionnalité 2 */}
                        <div className="text-center">
                            <i className="bi bi-envelope icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Gestion des e-mails</h3>
                            <p className="text-muted mb-0">A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer vos e-mails facilement!</p>
                        </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-md-6 mb-5">
                        {/* Fonctionnalité 1 */}
                        <div className="text-center">
                            <i className="bi bi-list-check icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Gestion de votre to-do list</h3>
                            <p className="text-muted mb-0">A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer votre planning en toute aisance!</p>
                        </div>
                        </div>
                        <div className="col-md-6 mb-5">
                        {/* Fonctionnalité 2 */}
                        <div className="text-center">
                            <i className="bi bi-graph-up icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Affichage des nouveautés économiques</h3>
                            <p className="text-muted mb-0">A partir d'un seul clic, vous pouvez utiliser une commande vocale pour gérer vos e-mails facilement!</p>
                        </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-md-6 mb-5 mb-md-0">
                        {/* Fonctionnalité 3 */}
                        <div className="text-center">
                            <i className="bi bi-people-fill icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Prise de rendez-vous et plannification des réunions</h3>
                            <p className="text-muted mb-0">En un seul simple clic, votre rendez-vous est ajouté à votre planning! Y a pas plus facile que ça!</p>
                        </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-md-0">
                        {/* Feature item*/}
                        <div className="text-center">
                            <i className="bi bi-files icon-feature text-gradient d-block mb-3" />
                            <h3 className="text-muted">Traduction de vos documents</h3>
                            <p className="text-muted mb-0">En une commande vocale, votre réunion avec les membres de votre équipe est plannifié!</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 order-lg-0">
                    <img src={image} className="img-fluid" alt="Responsive image" />
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}
