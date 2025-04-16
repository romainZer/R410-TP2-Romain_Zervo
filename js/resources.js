export default class Resources {
    #languageCode;

    /**
     * Constructeur de la classe Resources
     */
    constructor() {
        this.#languageCode = navigator.language;
    }

    get LanguageCode() {
        return this.#languageCode;
    }
}