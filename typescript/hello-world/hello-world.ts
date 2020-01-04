export default class HelloWorld {
  static hello(input?: string): string {
    return `Hello, ${input || 'World'}!`;
  }
}
