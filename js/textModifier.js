import Resources from "./resources.js";

export default class TextModifier {
    #resources;
    #resourcesPath;
    #resourceElements;

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
        this.#resourceElements = document.querySelectorAll("[stringres]"); //Evite un chargement trop tot en code

        document.documentElement.setAttribute("lang", this.#resources.LanguageCode);
        await this.#resources.loadResources(this.#resourcesPath);

        this.#resourceElements.forEach((element) => {
            const resourceKey = element.getAttribute("stringres"); // Récupère la clé de la ressource
            element.innerText = this.#resources.getResource(resourceKey);
        });
    }

}

