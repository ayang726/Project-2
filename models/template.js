module.exports = function (sequelize, DataTypes) {
    var UserTable = sequelize.define("UserTable", {
        userid: DataTypes.INT,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        useractive: DataTypes.BOOLEAN
    });
    var TemplateUserTable = sequelize.define("TemplateUserTable", {
        templateid: DataTypes.INT,
        userid: DataTypes.INT,
        templatename: DataTypes.STRING,
        templateactive: DataTypes.BOOLEAN
    });
    var TemplateTickerMetrics = sequelize.define("TemplateTickerMetrics", {
        id: DataTypes.INT,
        templateid: DataTypes.INT,
        metricid: DataTypes.STRING,
        tickerid: DataTypes.BOOLEAN,
        tickeractive: DataTypes.BOOLEAN,
        metricactive: DataTypes.BOOLEAN
    });
    var TickerLOV = sequelize.define("TickerLOV", {
        tickerid: DataTypes.INT,
        ticker: DataTypes.STRING
    });
    var MetricsLOV = sequelize.define("MetricsLOV", {
        metricid: DataTypes.INT,
        metricname: DataTypes.STRING
    });
};
