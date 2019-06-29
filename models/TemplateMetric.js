module.exports = function (sequelize, DataTypes) {

    var TemplateMetric = sequelize.define("TemplateMetric", {
        templateid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        metricid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    TemplateMetric.associate = function (models) {
        TickerMetric.hasMany(models.TemplateUser);
        TickerMetric.hasMany(models.Metric);
    };

    return TemplateMetric;
}
