module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }

    };

    let config = {
        tableName: "types",
        timestamps: false
    };

    const Type = sequelize.define("Type", cols, config);

    Type.associate = function (models) {
        Type.hasMany(models.Record, {
            as: "records",
            foreignKey: "type_id"
        });
    }

    return Type;
};