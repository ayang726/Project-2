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

    Ticker.associate = function (models) {
        models.Ticker.belongsTo(models.UserTicker, {
            foreignKey: {
                allowNull: false
            }
        });
        models.Ticker.belongsTo(models.TickerMetric, {
            foreignKey: {
                allowNull: false
            }
        });
        models.Ticker.belongsTo(models.RecentSearch, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Ticker;
}