import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'http://localhost:3000/api';
  loading = signal(false);

  constructor() {}

  sendMessage(message: string): Observable<string> {
    this.loading.set(true);
    return new Observable<string>((observer) => {
      fetch(`${this.apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
        .then((response) => {
          if (!response.body) {
            observer.error('Response body is null');
            return;
          }
          const reader = response.body.getReader();
          const decoder = new TextDecoder('utf-8');

          const read = () => {
            reader.read().then(({ done, value }) => {
              if (done) {
                this.loading.set(false);
                observer.complete();
                return;
              }

              const chunk = decoder.decode(value, { stream: true });
              const lines = chunk.split('\n\n').filter(Boolean);
              for (const line of lines) {
                const data = line.replace(/^data:\s*/, '').trim();
                if (data === '[DONE]') {
                  this.loading.set(false);
                  observer.complete();
                  // Break the loop and stop reading after [DONE]
                  return;
                } else if (data) {
                  try {
                    const parsed = JSON.parse(data);
                    if (parsed.content) {
                       observer.next(parsed.content);
                    }
                  } catch(e) {
                    // This can happen if the data is not valid JSON.
                    // You might want to handle this case, e.g. by logging or ignoring.
                    console.error("Could not parse stream data:", data);
                  }
                }
              }

              read();
            });
          };

          read();
        })
        .catch((err) => {
          this.loading.set(false);
          observer.error(err)
        });
    });
  }
} 