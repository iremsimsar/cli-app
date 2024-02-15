export default (sequelize: any, DataTypes: any) => {
    return sequelize.define('addresses', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coordinates: {
            type: DataTypes.JSON,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        tableName: 'addresses'
    });
}