import { Injectable } from "@nestjs/common";

@Injectable()
export class CredentialsService {
    getCredentials() {
        return 'get all credentials'
    }
}