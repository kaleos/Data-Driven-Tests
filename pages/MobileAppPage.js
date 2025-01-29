class MobileAppPage {
  constructor(page) {
    this.page = page;

    this.pushNotificationSystem = '//h3[contains(text(),"Push notification system")]'
    this.featureTag = '(//span[contains(text(),"Feature")])[1]'
    this.highPriorityTag = '(//span[contains(text(),"High Priority")])[1]'
    this.offlineMode = '//h3[contains(text(),"Offline mode")]'
    this.appIconDesign = '//h3[contains(text(),"App icon design")]'
    this.designTag = '//span[contains(text(),"Design")]'
  }

  async navigateTo(pageName) {
    await this.page.click(`text=${pageName}`);
  }

  async pushNotificationSystemVisible() {
    return await this.page.isVisible(this.pushNotificationSystem);
  }

  async featureTagVisible() {
    return await this.page.isVisible(this.featureTag);
  }

  async offlineModeVisible() {
    return await this.page.isVisible(this.offlineMode);
  }

  async featureHighPriorityVisible() {
    const featureTagVisible = await this.page.isVisible(this.featureTag);
    const highPriorityVisible = await this.page.isVisible(this.highPriorityTag);
    return featureTagVisible && highPriorityVisible;
  }

  async appIconDesignVisible() {
    return await this.page.isVisible(this.appIconDesign);
  }

  async designTagVisible() {
    return await this.page.isVisible(this.designTag);
  }

}

module.exports = { MobileAppPage };