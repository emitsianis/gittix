import { Publisher, Subjects, TicketCreatedEvent } from '@emitsianis-gittix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
