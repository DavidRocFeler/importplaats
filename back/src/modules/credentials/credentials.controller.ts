import { Controller, Get } from "@nestjs/common";
import { CredentialsService } from "./credentials.service";

@Controller('credentials')
export class CredentialsController {
    constructor(private readonly credentialsService: CredentialsService) {}

    @Get()
    getCredentials() {
        return this.credentialsService.getCredentials();
    }
}