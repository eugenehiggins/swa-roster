import { SwaRostPage } from './app.po';

describe('swa-rost App', () => {
  let page: SwaRostPage;

  beforeEach(() => {
    page = new SwaRostPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
