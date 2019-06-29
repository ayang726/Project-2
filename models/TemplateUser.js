module.exports = function (sequelize, DataTypes) {

    var TemplateUser = sequelize.define("TemplateUser", {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        templatename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });

    TemplateUser.associate = function (models) {
        TemplateUser.hasMany(models.User);
    };

    TemplateUser.associate = function (models) {
        models.TemplateUser.belongsTo(models.TemplateMetric, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TemplateUser;
}