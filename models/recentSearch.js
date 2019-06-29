
// module.exports = function (sequelize, DataTypes) {
//     const RecentSearch = sequelize.define("RecentSearch",
//         {
//             symbol: { type: DataTypes.STRING },
//             name: { type: DataTypes.STRING },
//             uid: { type: DataTypes.STRING }
//         },
//         {
//             indexes: [
//                 {
//                     unique: true,
//                     fields: ["uid", "symbol"]
//                 }
//             ]
//         });
//     return RecentSearch;
// }

module.exports = function (sequelize, DataTypes) {
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
    return RecentSearch;
}
