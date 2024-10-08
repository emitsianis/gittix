import { ExpirationCompleteEvent, Publisher, Subjects } from '@emitsianis-gittix/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
