class AppController{
    constructor() {
        this.slidePanel = false;
    }

    togglePanel() {
        this.slidePanel = !this.slidePanel;
    }
}

export default AppController;