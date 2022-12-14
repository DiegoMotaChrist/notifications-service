export class NotificationContent {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid: boolean = this.validateContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }

  get contentValue(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
