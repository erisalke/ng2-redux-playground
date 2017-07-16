import { Ng2ReduxPlaygroundPage } from './app.po';

describe('ng2-redux-playground App', () => {
  let page: Ng2ReduxPlaygroundPage;

  beforeEach(() => {
    page = new Ng2ReduxPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
