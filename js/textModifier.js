// textModifier.js
import Resources from "./resources.js";

export default class TextModifier {
    #resources;
    #resourceElements;

    /**
     * Constructeur de la classe TextModifier
     * @param resources {Resources} Instance de Resources à utiliser
     */
    constructor(resources) {
        this.#resources = resources;
    }

    /**
     * Met à jour le document avec les ressources textuelles
     * @returns {Promise<void>}
     * @constructor
     */
    async UpdateDocument() {
        this.#resourceElements = document.querySelectorAll("[stringres]");

        document.documentElement.setAttribute("lang", this.#resources.LanguageCode);

        this.#resourceElements.forEach((element) => {
            const resourceKey = element.getAttribute("stringres");
            element.innerText = this.#resources.getResource(resourceKey);
        });
    }
}