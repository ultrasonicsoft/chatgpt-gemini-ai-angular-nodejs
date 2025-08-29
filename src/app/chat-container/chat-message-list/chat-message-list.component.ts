import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { AssistantMessageComponent } from './assistant-message/assistant-message.component';
import { UserMessageComponent } from './user-message/user-message.component';

@Component({
  selector: 'app-chat-message-list',
  imports: [UserMessageComponent, AssistantMessageComponent],
  templateUrl: './chat-message-list.component.html',
  styleUrl: './chat-message-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListComponent {

  private readonly messagesService = inject(MessagesService);

  public messages = this.messagesService.getMessages();

 }
