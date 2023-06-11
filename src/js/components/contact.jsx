/* contact.jsx */

import React from 'react';

export default React.createClass({
        
    getInitialState() {
        return {
          processing: false,
          feedback: '',
          feedbackType: 'feedback'
        };
    },
    
    getButtonLabel(isProcessing) {
        if (isProcessing === undefined) {
            isProcessing = this.state.processing;
        }
        
        if (isProcessing) {
            return 'Envoi en cours...';
        }
        
        return 'Envoyer';
    },
        
    handleSubmit(event) {
        
        event.preventDefault();
        
        console.log('try to send...');
        
        if (this.state.processing) {
            console.log('already sending, aborting');
            return;
        }
        
        this.setState({
            processing: true,
            feedback: '',
            feedbackType: 'feedback'
        });
        
        let form = event.target,
            xhr  = new XMLHttpRequest()
        ;
        
        xhr.onload = () => {

            if (xhr.status === 200) {
                //Message envoyé
                this.setState({
                    processing: false,
                    feedback: 'Message envoyé',
                    feedbackType: 'feedback success'
                });
                form.reset();
            } else {
                //Oops :/
                this.setState({
                    processing: false,
                    feedback: '<strong>Une erreur est survenue</strong><br />Désolé, votre message n\'a pas été envoyé.<br />Si le problème persiste, contactez moi<br />par téléphone au +33(0)6 82 73 75 20.',
                    feedbackType: 'feedback error'
                });
            }
        };
        
        xhr.open("post", form.action);
        xhr.send(new FormData(form));
        
    },

    render() {

        return (
            <div id='contact-page'>
                <div className='page-content not-background content-left'>
                    <article>
                        <header>
                            <h1>Contact</h1>
                        </header>
                        <p>
                            Pour toute information, merci de me contacter en
                            utilisant le formulaire de contact ci-contre. Je
                            vous répondrai dans les plus brefs délais. Vous
                            pouvez également me contacter par téléphone ou SMS
                            au <span className='tel'>+33(0)7 72 39 58 90</span>.
                        </p>
                    </article>
                
                </div>
                <div className='content-right'>
                    <form action="https://jbilquez-email-receiver.osc-fr1.scalingo.io/" onSubmit={this.handleSubmit} id="contact-form">
                        <p>
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='Nom *'
                                required
                                />
                        </p>
                        <p>
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='Email *'
                                required
                                />
                        </p>
                        <p>
                            <input 
                                type='text' 
                                name='company' 
                                placeholder='Société'
                                />
                        </p>
                        <p>
                            <textarea 
                                name='message' 
                                placeholder='Votre message' 
                                rows='10'
                                required>
                            </textarea>
                        </p>
                        <p>
                            <span className={this.state.feedbackType} dangerouslySetInnerHTML={{__html: this.state.feedback}} />
                            <input 
                                className='button' 
                                type='submit' 
                                value={this.getButtonLabel(this.state.processing)} 
                                disabled={this.state.processing} 
                                />
                        </p>
                    </form>
                </div>
            </div>
        );
    },


});
