// mainView.js
import TextModifier from "./textModifier.js";
import Resources from "./resources.js";

export default class MainView {
    #resources;
    #textModifier;

    /**
     * Constructeur de la classe Main
     * @param resources {Resources} Ressources de langues
     */
    constructor(resources) {
        this.#resources = resources;
        this.setLanguage()
            .then();

        const button = document.querySelector("button");
        button.addEventListener("click", () => {
            alert(this.#resources.getResource("message"));
        });
    }

    /**
     * Permet de set la langue (méthode privée)
     * @returns {Promise<void>}
     */
    async setLanguage() {
        this.#textModifier = new TextModifier(this.#resources);
        await this.#textModifier.UpdateDocument();
    }
}