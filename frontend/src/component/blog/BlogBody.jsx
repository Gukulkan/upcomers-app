import React from 'react'
import Moment from 'react-moment/dist/index';

import {connect} from "react-redux";
import {postsActivePage, postsCountFetchData, postsFetchData} from "../../actions/index.jsx";

class BlogBody extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.fetchData('/public/api/post/get/page/0/count/8');
        this.props.fetchCountData('/public/api/post/get/count');
    }

    createMarkup(text) {
        if(text.includes("=============================================")) {
            return {
                __html: text.substring(0, text.indexOf("=============================================") - 45)
            };
        }
        return {__html: text.replace(new RegExp('<p>', 'g'), '').replace(new RegExp('</p>', 'g'), '').substring(0,50)};
    }

    handlePageChange(pageNumber) {
        this.props.fetchData('/public/api/post/get/page/' + (pageNumber - 1) + '/count/8');
        this.props.setActivePage(pageNumber);
    }

    renderArticle(post){
        return (
            <article className="col-block" key={'key-post-' + post.id}>

                <div className="blog-date">
                    <a href={'/post/' + post.id}><Moment format="DD-MM-YYYY HH:mm">{post.date} asdasdasda</Moment></a>
                </div>

                <h2 className="h01"><a href={'/post/' + post.id}>{post.title}</a></h2>

                <p dangerouslySetInnerHTML={this.createMarkup(post.text)} />


                {/*TODO: Add categories for posts*/}
                {/*<div className="blog-cat">*/}
                {/*<a href="blog.html">Branding</a><a href="blog.html">Design</a>*/}
                {/*</div>*/}
                <div className="blog-cat">
                    <a href={'/post/' + post.id}>Continue...</a>
                </div>

            </article>
        )
    }

    render() {
        const shiftedPost = this.props.posts;
        if (shiftedPost && this.props.posts[0]) {
            return (
                <div>
                    <section className="page-header page-hero" style={{backgroundImage: 'url(public/images/blog/blog-bg-01.jpg)'}}>

                        <div className="row page-header__content">
                            <article className="col-full">

                                <div className="page-header__info">
                                    <div className="page-header__cat">
                                        {/*<a href="#0">Branding</a><a href="#0">Design</a>*/}
                                    </div>
                                    <div className="page-header__date">
                                        {<Moment format="DD-MM-YYYY HH:mm">{this.props.posts[0].date}</Moment>}
                                    </div>
                                </div>

                                <h1 className="page-header__title">
                                    <a href="#0" title="">
                                        {this.props.posts[0].title}
                                    </a>
                                </h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(this.props.posts[0].text)} />
                                <p>
                                    <a href={'/post/' + this.props.posts[0].id} className="btn btn--stroke page-header__btn">Read More</a>
                                </p>
                            </article>
                        </div>

                    </section>

                    <section className="blog-content-wrap">

                        <div className="row blog-content">
                            <div className="col-full">

                                <div className="blog-list block-1-2 block-tab-full">
                                    {shiftedPost.map(post => this.renderArticle(post))}
                                </div>

                            </div>
                        </div>

                        <div className="row blog-entries-nav">
                            <div className="col-full pagination-blog">

                            </div>
                        </div>

                    </section>
                </div>
            )
        }else {
            return <div></div>;
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(postsFetchData(url)),
        fetchCountData: (url) => dispatch(postsCountFetchData(url)),
        setActivePage: (page) => dispatch(postsActivePage(page)),
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        postsCount: state.postsCount,
        postsActivePage: state.postsActivePage,
        hasErrored: state.postsHasErrored,
        isLoading: state.postsIsLoading
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);