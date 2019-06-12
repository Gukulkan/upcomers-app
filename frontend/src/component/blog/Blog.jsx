const React = require('react');

import Header from "./Header.jsx";
import BlogBody from "./BlogBody.jsx";

export class Blog extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <BlogBody/>
            </div>
        )
    }
}
