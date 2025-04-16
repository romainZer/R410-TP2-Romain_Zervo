import Resources from "./resources.js";

export default class TextModifier {
    #resources;

    /**
     * Constructeur de la classe TextModifier
     */
    constructor() {
        this.#resources = new Resources();
        this.UpdateDocument();
    }

    UpdateDocument() {
        document.documentElement.setAttribute("lang", this.#resources.LanguageCode);
    }
}

