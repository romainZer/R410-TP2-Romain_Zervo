import Resources from "./resources.js";

export default class TextModifier {
    #resources;
    #resourcesPath;

    /**
     * Constructeur de la classe TextModifier
     */
    constructor() {
        this.#resources = new Resources();
        this.#resourcesPath = "/res/"
        this.UpdateDocument()
            .then(); //Appel asynchrone dans le constructeur
    }

    /**
     *
     * @returns {Promise<void>}
     * @constructor
     */
    async UpdateDocument() {
        document.documentElement.setAttribute("lang", this.#resources.LanguageCode);
        await this.#resources.loadResources(this.#resourcesPath);
        alert(this.#resources.getResource("title"))
    }
}

