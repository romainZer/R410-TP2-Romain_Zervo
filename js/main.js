import MainView from "./mainView.js";
import Resources from "./resources.js";

window.onload = async () => {
    const res = new Resources();
    await res.loadResources("/res");
    const view = new MainView(res);
};