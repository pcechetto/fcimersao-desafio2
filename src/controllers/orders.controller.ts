import { Controller, Get, Post, Body } from '@nestjs/common';
import { Order } from '@prisma/client';
//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();

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

  // @Get()
  // async findAll() {
  //   const orders = await prisma.order.findMany({
  //     include: {
  //       asset: true,
  //     },
  //   });
  //   return orders;
  // }

  //@Get()
  //async findAll(): Promise<Order[]> {
  //  const orders = await prisma.order.findMany({
  //    include: {
  //      asset: true,
  //    },
  //  });
  //  return orders;
  //}
}
