module.exports = function (sequelize, DataTypes) {

    var TemplateMetric = sequelize.define("TemplateMetric", {
        // templateid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // metricid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
    });

    TemplateMetric.associate = function (models) {
        models.TemplateMetric.belongsTo(models.TemplateUser, {
            foreignKey: {
                allowNull: false
            },
        });
    }

    TemplateMetric.associate = function (models) {
        models.TemplateMetric.belongsTo(models.Metric, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return TemplateMetric;
}
