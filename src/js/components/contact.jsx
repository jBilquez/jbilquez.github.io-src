/* contact.jsx */

import React from 'react';

export default React.createClass({

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
                            au <span className='tel'>+33(0)6 82 73 75 20</span>.
                        </p>
                    </article>
                
                </div>
                <div className='content-right'>
                    <form method='POST' action='http://localhost:4567/'>
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
                            <input className='button' type='submit' value='Envoyer' />
                        </p>
                    </form>
                </div>
            </div>
        );
    },


});
