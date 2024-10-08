import { OrderCreatedEvent, Publisher, Subjects } from '@emitsianis-gittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
