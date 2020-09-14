import { Publisher, OrderCreatedEvent, Subjects } from "@jelgunorg/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
