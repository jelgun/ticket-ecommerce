import { Publisher, Subjects, TicketCreatedEvent } from "@jelgunorg/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
