import React from 'react'
import './styles.css';

const Footer = () => {
    return (
        <footer>
            <section id="contact">
                <div className='About-text'>
                    <h2 className='Footer-title'>About Us</h2>
                    <p>Esta es una página dedicada a mis juegos favoritos.</p>
                </div>
                <div className="Contact-text">
                    <h2 className='Footer-title'>Contact Us</h2>
                    <p>Destiny Cisternas Rojas</p>
                    <p>+5692367828</p>
                    <p>Ubicación: 1234 Gamer Street, Video City, VG 56789</p>
                </div>
                <div className="map-container">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.184873061365!2d-122.08424968468143!3d37.42199977982507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb87e5a5645f%3A0x1b1d6a5b94edb7!2sGoogleplex!5e0!3m2!1ses!2sus!4v1632982907974!5m2!1ses!2sus"
                        width="300"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </footer>
    )
}

export default Footer