/**
 *  
 */
class Resources {
    #languageCode;
    
    get LanguageCode () {
        return this.#languageCode;
    }

    /**
     * Constructeur de la classe Resources
     * @param {String} languageCode 
     */
    constructor() {
        this.#languageCode = navigator.language;
        console.log(this.LanguageCode);
    }
}
