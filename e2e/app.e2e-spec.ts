import { DemandsupplyPage } from './app.po';

describe('demandsupply App', () => {
  let page: DemandsupplyPage;

  beforeEach(() => {
    page = new DemandsupplyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
