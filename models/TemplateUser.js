module.exports = function (sequelize, DataTypes) {

    var TemplateUser = sequelize.define("TemplateUser", {
        // uid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
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

    // TemplateUser.associate = function (models) {
    //     TemplateUser.hasMany(models.TemplateMetric);
    // };



    TemplateUser.associate = function (models) {
        TemplateUser.hasMany(models.TemplateMetric);
        models.TemplateUser.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TemplateUser;
}