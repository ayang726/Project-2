module.exports = function (sequelize, DataTypes) {
    var Metric = sequelize.define("Metric", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metricDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        period: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "daily"
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