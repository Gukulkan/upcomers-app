const React = require('react');

import Header from "./Header.jsx";
import Moment from 'react-moment/dist/index';

import {connect} from "react-redux";
import {getCurrentPost} from "../../actions/index.jsx";

class BlogPost extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentPost('/admin/api/post/get/' + this.props.match.params.postId);
    }

    createMarkup(text) {
        if(text) {
            return {
                __html: text.replace("=============================================", '')
            };
        }
        return {__html: ''};
    }

    render() {

        if (this.props.currentPost) {
            return (
                <div>
                    <Header/>
                    <article className="blog-single">

                        <div className="page-header page-header--single page-hero"
                             style={{backgroundImage: 'url(/public/images/blog/blog-bg-02.jpg)'}}>

                            <div className="row page-header__content narrow">
                                <article className="col-full">
                                    <div className="page-header__info">
                                        {/*<div className="page-header__cat">*/}
                                        {/*<a href="#0">Branding</a><a href="#0">Design</a>*/}
                                        {/*</div>*/}
                                    </div>
                                    <h1 className="page-header__title">
                                        <a href="#0" title="">
                                            {this.props.currentPost.title}
                                        </a>
                                    </h1>
                                    <ul className="page-header__meta">
                                        <li className="date"><Moment
                                            format="DD/MM/YYYY HH:mm">{this.props.currentPost.date}</Moment></li>
                                        <li className="author">
                                        <span>Gukulkan</span>
                                        </li>
                                    </ul>

                                </article>
                            </div>

                        </div>



                    </article>
                </div>
            )
        } else {
            return <div></div>
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentPost: (url) => dispatch(getCurrentPost(url)),
    };
};

const mapStateToProps = (state) => {
    return {
        currentPost: state.currentPost,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);