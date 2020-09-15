import {
  Subjects,
  Publisher,
  ExpirationCompeleteEvent,
} from "@jelgunorg/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompeleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
