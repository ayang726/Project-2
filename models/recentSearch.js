
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
            type: DataTypes.STRING,
            allowNull: false
        },
        // tickerid: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    });
    RecentSearch.associate = function (models) {
        models.RecentSearch.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    RecentSearch.associate = function (models) {
        models.RecentSearch.belongsTo(models.Ticker, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return RecentSearch;
}
