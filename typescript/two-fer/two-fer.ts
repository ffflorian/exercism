export default class TwoFer {
  public static twoFer(who?: string): string {
    return `One for ${who || 'you'}, one for me.`;
  }
}
