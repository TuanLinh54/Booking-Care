const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('booking_care', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối đã được thiết lập thành công.');
    } catch (error) {
        console.error('Không thể kết nối với cơ sở dữ liệu:', error);
    }
}

module.exports = connectDB;
