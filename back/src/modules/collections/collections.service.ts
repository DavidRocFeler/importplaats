import { Injectable } from "@nestjs/common";

@Injectable()
export class CollectionsService {
    getCollections() {
        return 'get all collections'
    }
}