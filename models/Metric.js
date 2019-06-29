module.exports = function (sequelize, DataTypes) {
    var Metric = sequelize.define("Metric", {
        metric: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        period: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Metric.associate = function (models) {
        models.Metric.belongsTo(models.TickerMetric, {
            foreignKey: {
                allowNull: false
            }
        });
        models.Metric.belongsTo(models.TemplateMetric, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Metric;
}