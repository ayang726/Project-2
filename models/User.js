module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        uid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });

    User.associate = function (models) {
        models.User.belongsTo(models.UserTicker, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.TemplateUser, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.RecentSearch, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.Ticker, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return User;
}







