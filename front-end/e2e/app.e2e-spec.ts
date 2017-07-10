import { LanguagebuddyPage } from './app.po';

describe('languagebuddy App', () => {
  let page: LanguagebuddyPage;

  beforeEach(() => {
    page = new LanguagebuddyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
