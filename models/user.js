module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_id: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return Users;
};