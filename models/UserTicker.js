module.exports = function (sequelize, DataTypes) {
    var UserTicker = sequelize.define("UserTicker", {
        // uid: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // tickerid: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }

    }, {
            indexes: [
                {
                    unique: true,
                    fields: ["UserUid", "TickerId"]
                }
            ]
        });

    UserTicker.associate = function (models) {
        models.UserTicker.belongsTo(models.Ticker, {
            foreignKey: {
                allowNull: false
            }
        });
        models.UserTicker.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return UserTicker;
};