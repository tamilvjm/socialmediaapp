import { SocialMediaAppPage } from './app.po';

describe('social-media-app App', () => {
  let page: SocialMediaAppPage;

  beforeEach(() => {
    page = new SocialMediaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
