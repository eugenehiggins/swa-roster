import { SwaRosterPage } from './app.po';

describe('swa-roster App', () => {
  let page: SwaRosterPage;

  beforeEach(() => {
    page = new SwaRosterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
