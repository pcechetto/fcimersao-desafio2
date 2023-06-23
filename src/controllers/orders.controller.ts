import { Controller, Get, Post, Body } from '@nestjs/common';
import { Order } from '../models/order.model';

@Controller('api/orders')
export class OrdersController {
  private orders: Order[] = [];

  @Get()
  getOrders(): Order[] {
    return this.orders;
  }

  @Post()
  createOrder(@Body() order: Order): Order {
    this.orders.push(order);
    return order;
  }
}
