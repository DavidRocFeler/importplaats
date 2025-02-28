import { Injectable } from "@nestjs/common";

@Injectable()
export class CartsService {
    getCarts() {
        return 'get all carts'
    }
}