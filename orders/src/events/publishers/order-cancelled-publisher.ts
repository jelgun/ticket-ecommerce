import { Publisher, OrderCancelledEvent, Subjects } from "@jelgunorg/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
