import { ProductPage } from './app.po';

describe('product App', () => {
  let page: ProductPage;

  beforeEach(() => {
    page = new ProductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
