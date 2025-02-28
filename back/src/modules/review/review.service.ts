import { Injectable } from "@nestjs/common";

@Injectable()
export class ReviewService {
    getReview() {
        return 'Get all reviews'
    }
}