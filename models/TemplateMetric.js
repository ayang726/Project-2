module.exports = function (sequelize, DataTypes) {

    var TemplateMetric = sequelize.define("TemplateMetric", {
        templateid: {
            type: DataTypes.INT,
            allowNull: false
        },
        metricid: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

    TickerMetric.associate = function (models) {
        TickerMetric.hasMany(models.TemplateUser);
        TickerMetric.hasMany(models.Metric);
    };

    return TemplateMetric;
}
