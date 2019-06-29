module.exports = function (sequelize, DataTypes) {
    var TickerMetric = sequelize.define("TickerMetric", {
        tickerid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metricid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

    TickerMetric.associate = function (models) {
        TickerMetric.hasMany(models.Ticker);
        TickerMetric.hasMany(models.Metric);
    };

    return TickerMetric;
}