import { Dialect } from 'sequelize';

export interface EnvironmentConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

export interface Config {
    [key: string]: EnvironmentConfig;
}

export interface SaleOrderItemAttributes {
    id?: number;
    name: string;
    quantity: number;
    price: number;
    description: string;
    image: string;
}
