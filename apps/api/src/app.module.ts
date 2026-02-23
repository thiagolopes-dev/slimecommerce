import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, ProductsModule, OrdersModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}