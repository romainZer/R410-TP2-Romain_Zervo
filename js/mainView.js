import TextModifier from "./textModifier.js";

export default class MainView {
    #path;
    #textModifier;

    /**
     * Constructeur de la classe Main
     * @param path {String} Chemin des ressources de langues
     */
    constructor(path) {
        this.#path = path;
        this.setLanguage()
            .then();
    }

    /**
     * Permet de set la langue (méthode privée)
     * @returns {Promise<void>}
     */
    async setLanguage() {
        this.#textModifier = new TextModifier(this.#path);
        await this.#textModifier.UpdateDocument();
    }
}
