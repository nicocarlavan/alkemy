module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_id: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        concept: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        },
        record_date: {
            type: DataTypes.DATE
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }

    };

    let config = {
        tableName: "records",
        timestamps: false
    };

    const Record = sequelize.define("Record", cols, config);

    Record.associate = function (models) {
        Record.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        });

        Record.belongsTo(models.Type, {
            as: "type",
            foreignKey: "type_id"
        });
    }


    return Record;
};