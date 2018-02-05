import { MiniMathsPage } from './app.po';

describe('mini-maths App', function() {
  let page: MiniMathsPage;

  beforeEach(() => {
    page = new MiniMathsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
