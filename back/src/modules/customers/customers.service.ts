import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomersService {
    getCustomers() {
        return 'get all customers'
    }
}