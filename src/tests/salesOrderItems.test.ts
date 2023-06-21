import request from 'supertest';
import app from '../app';
import { SaleOrderItem, sequelize } from '../models';

describe('SaleOrderItems Endpoints', () => {
    let saleOrderItemId: number;

    beforeAll(async () => {
        await sequelize.sync();

        try {
            const saleOrderItem = await SaleOrderItem.create({
                name: 'Test Item',
                quantity: 5,
                price: 100,
                description: 'Test description',
                image: 'https://example.com/image.jpg',
            });
            saleOrderItemId = saleOrderItem.id;
        } catch (error) {
            console.error('Error creating saleOrderItem:', error);
        }
    });

    afterAll(async () => {
        await SaleOrderItem.destroy({
            where: { id: saleOrderItemId },
        });

        await sequelize.close();
    });

    it('should get all sale order items', async () => {
        const res = await request(app).get('/api/sale-order-items');
        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should create a new sale order item', async () => {
        const res = await request(app).post('/api/sale-order-items').send({
            name: 'New Item',
            quantity: 10,
            price: 200,
            description: 'New description',
            image: 'https://example.com/new-image.jpg',
        });
        expect(res.status).toEqual(201);
        expect(res.body.name).toEqual('New Item');
        expect(res.body.description).toEqual('New description');
    });

    it('should get a sale order item by id', async () => {
        const res = await request(app).get(`/api/sale-order-items/${saleOrderItemId}`);
        expect(res.status).toEqual(200);
        expect(res.body.id).toEqual(saleOrderItemId);
    });

    it('should update a sale order item', async () => {
        const res = await request(app).put(`/api/sale-order-items/${saleOrderItemId}`).send({
            name: 'Updated Item',
            quantity: 8,
            price: 150,
            description: 'Updated description',
            image: 'https://example.com/updated-image.jpg',
        });
        expect(res.status).toEqual(200);
        expect(res.body.saleOrderItem.name).toEqual('Updated Item');
        expect(res.body.saleOrderItem.description).toEqual('Updated description');
    });

    it('should delete a sale order item', async () => {
        const res = await request(app).delete(`/api/sale-order-items/${saleOrderItemId}`);
        expect(res.status).toEqual(204);
    });
});
