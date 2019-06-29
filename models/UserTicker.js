module.exports = function (sequelize, DataTypes) {
    var UserTicker = sequelize.define("UserTicker", {
        uid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tickerid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }

    });

    UserTicker.associate = function (models) {
        UserTicker.hasMany(models.User);
        UserTicker.hasMany(models.Ticker);
    };

    return UserTicker;
};