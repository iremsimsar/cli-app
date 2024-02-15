import envConfig from "./envConfig";
import { Sequelize } from "sequelize";
import subscriptionModel from "../model/subscriptionModel";
import addressModel from "../model/addressModel";
import userModel from "../model/userModel";
import creditCardModel from "../model/creditCardModel";
import employmentModel from "../model/employmentModel";
import subscriptionUserModel from "../model/subscriptionUserModel";

const sequelize = new Sequelize(
    envConfig.dbName,
    envConfig.dbUsername,
    envConfig.dbPassword, {
    host: envConfig.dbHost,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1
    },
});

const db: any = {};

db.subscriptions = subscriptionModel(sequelize, Sequelize);
db.addresses = addressModel(sequelize, Sequelize);
db.users = userModel(sequelize, Sequelize);
db.creditCards = creditCardModel(sequelize, Sequelize);
db.employments = employmentModel(sequelize, Sequelize);
db.subscriptionUsers = subscriptionUserModel(sequelize, Sequelize);

db.subscriptions.hasMany(db.subscriptionUsers, { foreignKey: 'subscriptionId' });
db.subscriptionUsers.belongsTo(db.subscriptions, { foreignKey: 'subscriptionId' });
db.users.hasMany(db.subscriptionUsers, { foreignKey: 'user_id' });
db.subscriptionUsers.belongsTo(db.users, { foreignKey: 'user_id' });
db.users.hasMany(db.employments, { foreignKey: 'user_id' });
db.employments.belongsTo(db.users, { foreignKey: 'user_id' });
db.users.hasMany(db.creditCards, { foreignKey: 'user_id' });
db.creditCards.belongsTo(db.users, { foreignKey: 'user_id' });
db.users.hasMany(db.addresses, { foreignKey: 'user_id' });
db.addresses.belongsTo(db.users, { foreignKey: 'user_id' });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;