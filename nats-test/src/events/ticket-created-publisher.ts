import { Publisher, Subjects, TicketCreatedEvent } from '@emitsianis-gittix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
