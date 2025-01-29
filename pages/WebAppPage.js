class WebAppPage {
  constructor(page) {
    this.page = page;

    this.implementUserAuth = '//h3[contains(text(),"Implement user authentication")]'
    this.featureTag = '(//span[contains(text(),"Feature")])[1]'
    this.highPriorityTag = '(//span[contains(text(),"High Priority")])[1]'
    this.fixNavigationBug = '//h3[contains(text(),"Fix navigation bug")]'
    this.bugTag = '//span[contains(text(),"Bug")]'
    this.designSystemUpdates = '//h3[contains(text(),"Design system updates")]'
    this.designTag = '//span[contains(text(),"Design")]'
  }

  async navigateTo(pageName) {
    await this.page.click(`text=${pageName}`);
  }

  async implementUserAuthVisible() {
    return await this.page.isVisible(this.implementUserAuth);
  }

  async featureHighPriorityVisible() {
    const featureTagVisible = await this.page.isVisible(this.featureTag);
    const highPriorityVisible = await this.page.isVisible(this.highPriorityTag);
    return featureTagVisible && highPriorityVisible;
  }

  async fixNavigationBugVisible() {
    return await this.page.isVisible(this.fixNavigationBug);
  }

  async bugTagVisible() {
    return await this.page.isVisible(this.bugTag);
  }

  async designSystemUpdatesVisible() {
    return await this.page.isVisible(this.designSystemUpdates);
  }

  async designTagVisible() {
    return await this.page.isVisible(this.designTag);
  }

}

module.exports = { WebAppPage };