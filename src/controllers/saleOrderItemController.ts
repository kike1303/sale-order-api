import { Request, Response } from 'express';
import { SaleOrderItem } from '../models';
import { saleOrderItemSchema } from '../validators/salesOrderItemValidator';

export const getSaleOrderItems = async (req: Request, res: Response) => {
    try {
        const saleOrderItems = await SaleOrderItem.findAll();
        return res.status(200).json(saleOrderItems);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        } else {
            return res.status(500).send('An unexpected error occurred');
        }
    }
};

export const getSaleOrderItemById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const saleOrderItem = await SaleOrderItem.findOne({ where: { id: id } });

        if (!saleOrderItem) {
            return res.status(404).send('SaleOrderItem not found');
        }

        return res.status(200).json(saleOrderItem);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        } else {
            return res.status(500).send('An unexpected error occurred');
        }
    }
};

export const createSaleOrderItem = async (req: Request, res: Response) => {
    try {
        const { error } = saleOrderItemSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const saleOrderItem = await SaleOrderItem.create(req.body);
        return res.status(201).json(saleOrderItem);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        } else {
            return res.status(500).send('An unexpected error occurred');
        }
    }
};

export const updateSaleOrderItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const { error } = saleOrderItemSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const [updated] = await SaleOrderItem.update(req.body, {
            where: { id: id },
        });

        if (updated) {
            const updatedSaleOrderItem = await SaleOrderItem.findOne({ where: { id: id } });
            return res.status(200).json({ saleOrderItem: updatedSaleOrderItem });
        }
        throw new Error('SaleOrderItem not found');
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        } else {
            return res.status(500).send('An unexpected error occurred');
        }
    }
};

export const deleteSaleOrderItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await SaleOrderItem.destroy({
            where: { id: id },
        });

        if (deleted) {
            return res.status(204).send('SaleOrderItem deleted');
        }
        throw new Error('SaleOrderItem not found');
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        } else {
            return res.status(500).send('An unexpected error occurred');
        }
    }
};
