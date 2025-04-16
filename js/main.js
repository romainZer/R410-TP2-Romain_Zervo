import Resources from "./resources.js";

window.onload = async () => {
    const res = new Resources();
    await res.loadResources("/res");
    console.log(res.getResource("title"));
};
