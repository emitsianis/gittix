import { OrderCancelledEvent, Publisher, Subjects } from '@emitsianis-gittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
