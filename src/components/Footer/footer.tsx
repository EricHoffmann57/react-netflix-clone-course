import * as React from 'react';
import "./styles/footer.css";

const Footer: React.FC = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <>
            <footer className={`footer red`}>
                <div className={`innerFooter`}>
                    <div className="nameText">
                        <a className="customLink hoverLink" href="htthttps://github.com/EricHoffmann57/react-netflix-clone-course.git" title="react-netflix-clone-course"><i className="fab fa-github"></i> | react-netflix-clone-course</a>
                    </div>
                    <a className="customLink hoverLink" href="https://fr.linkedin.com/" title="linkedIn logo"><i className="fab fa-linkedin"></i> | LinkedIn</a>
                    <a className="customLink hoverLink" href="https://twitter.com/?lang=fr" title="twitter logo"><i className="fab fa-twitter"></i> | Twitter</a>
                    <a className="customLink hoverLink" href="https://www.instagram.com/?hl=fr" title="instagram logo"><i className="fab fa-instagram"></i> | Instagram</a>
                    <div className="siteText copyright" title="Copyright">npm
                        <a href="./" className="hoverLink">Copyright <i className="fas fa-copyright"></i> {year}</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
