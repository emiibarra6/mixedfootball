import  {App}  from './app';


class Main {
  private readonly app: App;
  private readonly db: any;
  constructor() {
    this.app = new App();
   
  }
  async init() {
    this.app.listen();
   
  }
}

new Main().init();