import { Sequelize, DataTypes, Model } from 'sequelize';
import config from '../config/config.json';
import { Config, EnvironmentConfig, SaleOrderItemAttributes } from '../shared/interfaces';

const env = process.env.NODE_ENV || 'development';
const dbConfig: EnvironmentConfig = (config as Config)[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

class SaleOrderItem extends Model<SaleOrderItemAttributes> implements SaleOrderItemAttributes {
    public id!: number;
    public name!: string;
    public quantity!: number;
    public price!: number;
    public description!: string;
    public image!: string;
}

SaleOrderItem.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: 'SaleOrderItem' },
);

export { SaleOrderItem, sequelize };
