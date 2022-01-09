import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from "react-slick";


class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-medical-facilty section-share'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='button-section'> Xem thêm </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image'></div>
                                <div>Hệ thống Y tế Thu Cúc 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
