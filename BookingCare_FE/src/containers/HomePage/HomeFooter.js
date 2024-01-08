import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2023 Tuấn Linh.
                    More information visit my Facebook
                    &#8594; <a target='_blank' href='https://www.facebook.com/huynhvo.tuanlinh.353/'> Click here!</a> &#8592;
                </p>
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
