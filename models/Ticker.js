module.exports = function (sequelize, DataTypes) {
    var Ticker = sequelize.define("Ticker", {
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tickername: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Ticker.associate = function (models) {
    //     models.Ticker.belongsTo(models.UserTicker, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     models.Ticker.belongsTo(models.TickerMetric, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     models.Ticker.belongsTo(models.RecentSearch, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    // Ticker.hasMany(TickerMetric, {
    //     foreignKey: 'id'
    // })

    // Metric.hasMany(TickerMetric, {
    //     foreignKey: 'id'
    // })

    Ticker.associate = function (models) {
        Ticker.hasMany(models.UserTicker,
            {
                onDelete: "cascade"
            })
        Ticker.hasMany(models.RecentSearch,
            {
                onDelete: "cascade"
            })
    };

    return Ticker;
}