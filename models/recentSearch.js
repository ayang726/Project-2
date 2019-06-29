
module.exports = function (sequelize, DataTypes) {
    const RecentSearch = sequelize.define("RecentSearch",
        {
            symbol: { type: DataTypes.STRING },
            name: { type: DataTypes.STRING },
            uid: { type: DataTypes.STRING }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ["uid", "symbol"]
                }
            ]
        });
    return RecentSearch;
}