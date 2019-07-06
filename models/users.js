
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User",
        {
            name: { type: DataTypes.STRING },
            uid: { type: DataTypes.STRING },
            email: { type: DataTypes.STRING },
            password: { type: DataTypes.STRING }
        });

    User.associate = function (models) {
        User.hasMany(models.TemplateUser,
            {
                onDelete: "cascade"
            })

        User.hasMany(models.UserTicker,
            {
                onDelete: "cascade"
            })
        User.hasMany(models.RecentSearch,
            {
                onDelete: "cascade"
            })
    };


    return User;
}
