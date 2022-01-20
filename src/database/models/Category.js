module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        }

    };

    let config = {
        tableName: "categories",
        timestamps: false
    };

    const Category = sequelize.define("Category", cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Record, {
            as: "records",
            foreignKey: "category_id"
        });
    }

    return Category;
};