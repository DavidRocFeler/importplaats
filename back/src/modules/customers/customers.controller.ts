import { Controller, Get } from "@nestjs/common";
import { CustomersService } from "./customers.service";

@Controller('customers')
export class CustomersController{
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    getCustomer() {
        this.customersService.getCustomers();
    }
}