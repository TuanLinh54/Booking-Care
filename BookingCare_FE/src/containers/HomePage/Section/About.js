import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    <FormattedMessage id='homepage.media-say' />
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/OASGscJQXp0"
                            title="BookingCare: Hệ thống đặt khám trực tuyến"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            TL Medic là một dịch vụ đặt lịch khám bệnh tiện lợi và hiệu quả,
                            giúp người dùng dễ dàng đặt hẹn khám với các bác sĩ uy tín và các cơ sở y tế chất lượng.
                            Với nền tảng trực tuyến thông minh, TL Medic cung cấp trải nghiệm đặt lịch linh hoạt,
                            cho phép người dùng lựa chọn thời gian, bác sĩ, cũng như địa điểm khám phù hợp với họ.
                            Dịch vụ này không chỉ giúp tiết kiệm thời gian mà còn tối ưu hóa quá trình chuẩn bị trước khi đến khám bệnh.
                            Người dùng có thể dễ dàng xem thông tin về bác sĩ, chuyên khoa,
                            và các lịch trình khám bệnh trên ứng dụng di động hoặc trên trang web của TL Medic.
                            Điều này giúp họ tự tin hơn khi chọn lựa dịch vụ y tế phù hợp với nhu cầu cụ thể của mình.
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
