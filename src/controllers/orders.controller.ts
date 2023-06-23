import { Controller, Get, Post, Body } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

  @Get()
  async findAll() {
    const orders = await prisma.order.findMany({
      select: {
        id: true,
        assetId: true,
        price: true,
        status: true,
      },
    });
    return orders;
  }
}
