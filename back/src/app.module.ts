import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { ReviewModule } from './modules/review/review.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomerModule } from './modules/customers/customers.module';
import { ColeectionModule } from './modules/collections/collections.module';
import { CartsModule } from './modules/carts/carts.module';
import { CredentialsModule } from './modules/credentials/credentials.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule, 
    ProductsModule, 
    ReviewModule, 
    OrdersModule, 
    CustomerModule, 
    ColeectionModule, 
    CartsModule, 
    CredentialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
