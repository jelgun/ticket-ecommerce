import { Subjects, Publisher, PaymentCreatedEvent } from "@jelgunorg/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
