import { Injectable } from "@nestjs/common";

@Injectable()
export class OrdersService {
    getOrders() {
        return 'get all orders'
    }
}