import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageEntry } from '../../@models/message-entry';
import { MessagesService } from '../../services/messages.service';
import { AssistantMessageComponent } from './assistant-message/assistant-message.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@Component({
  selector: 'app-chat-message-list',
  imports: [UserMessageComponent, AssistantMessageComponent, WelcomeScreenComponent],
  templateUrl: './chat-message-list.component.html',
  styleUrl: './chat-message-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListComponent {

  private readonly messagesService = inject(MessagesService);

  public messages = this.messagesService.getMessages();

  onQuestionSelected(question: string) {
    const userMessage: MessageEntry = {
      id: crypto.randomUUID(),
      content: question,
      role: 'user',
      createdAt: new Date()
    };
    this.messagesService.sendMessage(userMessage);
  }

}
