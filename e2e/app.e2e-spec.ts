import { PowerRankFrontendPage } from './app.po';

describe('power-rank-frontend App', function() {
  let page: PowerRankFrontendPage;

  beforeEach(() => {
    page = new PowerRankFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
