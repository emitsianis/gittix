import { Publisher, Subjects, TicketUpdatedEvent } from '@emitsianis-gittix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
