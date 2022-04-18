import React from "react";

export default function Feedback() {
    return(
        <div>
            {/* Feedback Modal*/}
            <div className="modal fade" id="feedbackModal" tabIndex={-1} aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header bg-gradient-primary-to-secondary p-4">
                    <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Contactez nous</h5>
                    <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body border-0 p-4">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    {/* Name input*/}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label htmlFor="name">Nom complet</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">Ce champ est obligatoire.</div>
                    </div>
                    {/* Email address input*/}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label htmlFor="email">Adresse electronique</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">Ce champ est obligatoire.</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">L'adresse introduite n'est pas valide.</div>
                    </div>
                    {/* Phone number input*/}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                        <label htmlFor="phone">Numéro de téléphone</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">Ce champ est obligatoire.</div>
                    </div>
                    {/* Message input*/}
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                        <label htmlFor="message">Votre message</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">Ce champ est obligatoire.</div>
                    </div>
                    {/* Submit success message*/}
                    {/**/}
                    {/* This is what your users will see when the form*/}
                    {/* has successfully submitted*/}
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                        <div className="fw-bolder">Votre message a été envoyé avec succès! Merci de nous avoir contacté!</div>
                        </div>
                    </div>
                    {/* Submit error message*/}
                    {/**/}
                    {/* This is what your users will see when there is*/}
                    {/* an error submitting the form*/}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Erreur d'envoi de votre message!</div></div>
                    {/* Submit Button*/}
                    <div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Envoyer</button></div>
                    </form>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
