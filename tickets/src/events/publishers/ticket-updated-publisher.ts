import { Publisher, Subjects, TicketUpdatedEvent } from "@jelgunorg/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
