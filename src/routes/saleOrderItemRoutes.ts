import { Router } from 'express';
import {
    getSaleOrderItems,
    createSaleOrderItem,
    updateSaleOrderItem,
    deleteSaleOrderItem,
    getSaleOrderItemById,
} from '../controllers/saleOrderItemController';

const router = Router();

router.get('/sale-order-items', getSaleOrderItems);
router.get('/sale-order-items/:id', getSaleOrderItemById);
router.post('/sale-order-items', createSaleOrderItem);
router.put('/sale-order-items/:id', updateSaleOrderItem);
router.delete('/sale-order-items/:id', deleteSaleOrderItem);

export default router;
