import React from 'react'

export class Footer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-full">

                        <div className="footer-logo">
                            <a className="footer-site-logo" href="/">
                                <img src="/public/images/logo.png"
                                     alt="Homepage"/>
                            </a>
                        </div>

                        <ul className="footer-social">
                            <li><a href="https://www.facebook.com/gukulkan">
                                <i className="im im-facebook" aria-hidden="true"></i>
                                <span>Facebook</span>
                            </a></li>
                            <li><a href="https://twitter.com/Gukulkan">
                                <i className="im im-twitter" aria-hidden="true"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="https://www.instagram.com/gukulkan/">
                                <i className="im im-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </a></li>
                            <li><a href="https://t.me/Gukulkan">
                                <i className="im im-cursor" aria-hidden="true"></i>
                                <span>Telegram</span>
                            </a></li>
                            <li><a href="https://www.youtube.com/user/Gukulkan">
                                <i className="im im-youtube" aria-hidden="true"></i>
                                <span>Youtube</span>
                            </a></li>
                        </ul>

                    </div>
                </div>

                <div className="row footer-bottom">

                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright Gukulkan 2018</span>
                            <span>Created by <a href="https://www.creativehub.pro/">Creative Hub</a></span>
                        </div>

                        <div className="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top"><i
                                className="im im-arrow-up" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>

            </footer>
        )
    }
}
