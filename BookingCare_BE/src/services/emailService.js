require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"TL Medic" <tetto05042002@gmail.com>',
        to: dataSend.reciverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên TL Medic</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin trên là đúng, vui lòng click vào đường link bên dưới
        để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>
        <div>
            <a href=${dataSend.redirectLink} target="_blank">Nhấn vào đây</a>
        </div>

        <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
    <h3>Dear ${dataSend.patientName}!</h3>
    <p>You received this email because you booked an online medical appointment on TL Medic</p>
    <p>Information to schedule an appointment:</p>
    <div><b>Time: ${dataSend.time}</b></div>
    <div><b>Doctor: ${dataSend.doctorName}</b></div>

    <p>If the above information is correct, please click on the link below to confirm and complete the medical appointment booking procedure.</p>
    <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
    </div>

    <div>Sincerely thank!</div>
    `
    }

    return result;
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên TL Medic</p>
        <p>Thông tin đơn thuốc/ hóa đơn được gửi trong file đính kèm:</p>
        
        <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
    <h3>Dear ${dataSend.patientName}!</h3>
    <p>You received this email because you booked an online medical appointment on TL Medic</p>
    <p>Information on prescriptions/bills has been sent as an attached file:</p

    <div>Sincerely thank!</div>
    `
    }

    return result;
}

let sendAttachment = async (dataSend) => {
    return new Promise(async (resolve, reject) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_APP,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            //send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"TL Medic" <bookingtlmedic@gmail.com',
                to: dataSend.email,
                subject: 'Kết quả đặt lịch khám',
                html: getBodyHTMLEmailRemedy(dataSend),
                attachments: [
                    {
                        filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
                        content: dataSend.imgBase64.split("base64")[1],
                        encoding: 'base64'
                    },
                ],
            });

            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment,
}