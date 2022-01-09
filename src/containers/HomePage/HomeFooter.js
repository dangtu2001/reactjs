import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2022 Nguyễn Đăng Tú. More information, please visit my github.
                    <a target='_blank' href='https://github.com/dangtu2001'> &#8594; Click here &#8594; </a></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
