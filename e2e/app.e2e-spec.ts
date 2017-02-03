import { BuildingConduitPage } from './app.po';

describe('building-conduit App', function() {
  let page: BuildingConduitPage;

  beforeEach(() => {
    page = new BuildingConduitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
