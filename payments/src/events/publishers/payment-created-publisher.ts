import { PaymentCreatedEvent, Publisher, Subjects } from '@emitsianis-gittix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
