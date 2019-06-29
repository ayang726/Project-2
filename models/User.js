module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        uid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });

    User.associate = function (models) {
        models.User.belongsTo(models.UserTicker, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.TemplateUser, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.RecentSearch, {
            foreignKey: {
                allowNull: false
            }
        });
        models.User.belongsTo(models.Ticker, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return User;
}

var UserTicker = sequelize.define("UserTicker", {
    uid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tickerid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }

});

UserTicker.associate = function (models) {
    UserTicker.hasMany(models.User);
    UserTicker.hasMany(models.Ticker);
};

return UserTicker;

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

var TemplateUser = sequelize.define("TemplateUser", {
    uid: {
        type: DataTypes.INT,
        allowNull: false
    },
    templatename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
});

TemplateUser.associate = function (models) {
    TemplateUser.hasMany(models.User);
};

TemplateUser.associate = function (models) {
    models.TemplateUser.belongsTo(models.TemplateMetric, {
        foreignKey: {
            allowNull: false
        }
    });
};

var RecentSearch = sequelize.define("RecentSearch", {
    uid: {
        type: DataTypes.INT,
        allowNull: false
    },
    tickerid: {
        type: DataTypes.INT,
        allowNull: false
    }
});

RecentSearch.associate = function (models) {
    RecentSearch.hasMany(models.User);
    RecentSearch.hasMany(models.Ticker);
};


};
