import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MessageEntry } from '../../../@models/message-entry';

@Component({
  selector: 'app-assistant-message',
  imports: [],
  templateUrl: './assistant-message.component.html',
  styleUrl: './assistant-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantMessageComponent { 
  message = input<MessageEntry>();
}
