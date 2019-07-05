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
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        period: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Metric.associate = function (models) {
        Metric.hasMany(models.TickerMetric,
            {
                onDelete: "cascade"
            })
        Metric.hasMany(models.TemplateMetric,
            {
                onDelete: "cascade"
            })
    };

    // Metric.hasMany(TickerMetric, {
    //     foreignKey: 'id'
    // })

    // Metric.hasMany(TemplateMetric, {
    //     foreignKey: 'id'
    // })

    return Metric;
}