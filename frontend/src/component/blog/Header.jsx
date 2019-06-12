import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    changeLanguage() {
        const language = this.props.currentLanguage == 'ru' ? 'en' : 'ru';
        this.props.setActiveLanguage(language)
    }

    render() {
        return (
           <div></div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setActiveLanguage: order => {
            dispatch((order) => {})
        }
    };
};

const mapStateToProps = (state) => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);