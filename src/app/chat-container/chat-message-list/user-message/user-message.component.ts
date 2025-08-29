import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MessageEntry } from '../../../@models/message-entry';

@Component({
  selector: 'app-user-message',
  imports: [],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMessageComponent { 
  message = input<MessageEntry>();
}
