
module.exports = function (sequelize, DataTypes) {
    const RecentSearch = sequelize.define("RecentSearch",
        {
            symbol: { type: DataTypes.STRING },
            name: { type: DataTypes.STRING },
            uid: { type: DataTypes.STRING }
        });
    return RecentSearch;
}