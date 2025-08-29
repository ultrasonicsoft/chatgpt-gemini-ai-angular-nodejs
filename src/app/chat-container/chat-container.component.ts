import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';

@Component({
  selector: 'app-chat-container',
  imports: [ChatMessageListComponent, ChatInputComponent],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatContainerComponent { }
