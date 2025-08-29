import { inject, Injectable, Signal, signal } from '@angular/core';
import { MessageEntry } from '../@models/message-entry';
import { GeminiService } from './gemini.service';

@Injectable()
export class MessagesService {
  private messages = signal<MessageEntry[]>([]);
  private readonly geminiService = inject(GeminiService);

  public sendMessage(message: MessageEntry) {
    const currentAnswerId = crypto.randomUUID();
    this.messages.update((messages) => [...messages, message]);
    const assistantMessage = {
      id: currentAnswerId,
      content: 'Generating response...',
      role: 'assistant',
      createdAt: new Date(),
    };
    this.messages.update((messages) => [...messages, assistantMessage as MessageEntry]);

    let geminiResponseContent = '';
    this.geminiService.sendMessage(message.content).subscribe({
      next: (response) => {
        console.debug('🔥🔥 response', response);
        geminiResponseContent += response;
        this.messages.update((messages) => {
          const lastMessage = messages[messages.length - 1];
          const updatedLastMessage = { ...lastMessage, content: geminiResponseContent };
          return [...messages.slice(0, -1), updatedLastMessage];
          
        });
        
      },
      complete: () => {
        console.debug('🔥🔥 complete');
      },
      error: (error) => {
        console.error('🔥🔥 error', error);
      }
    });
  }

  public getMessages(): Signal<MessageEntry[]> {
    return this.messages;
  }

}
