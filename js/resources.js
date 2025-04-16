export default class Resources {
    #languageCode;
    #resources;

    /**
     * Constructeur de la classe Resources
     */
    constructor() {
        this.#languageCode = navigator.language;
        this.#resources = {};
    }

    get LanguageCode() {
        return this.#languageCode;
    }

    /**
     * Charge les ressources en fonction de la langue du navigateur
     * @param path
     * @returns {Promise<void>}
     */
    async loadResources(path) {
        let data = null;
        const langPath = `${path}/${this.LanguageCode.slice(0, 2)}.json`;
        const defaultPath = `${path}/default.json`;

        try {
            const response = await fetch(langPath);
            if (!response.ok) {
                console.error("Lang file not found");
                throw new Error();
            }
            data = await response.json();
        } catch (e) {
            const response = await fetch(defaultPath);
            data = await response.json();
        }

        for (const item of data) {
            this.#resources[item.name] = item.value;
        }
    }

    /**
     * Permet de récupéer une ressource par son nom
     * @param name {String}
     * @returns {*|string} La string de la ressource demandée
     */
    getResource(name) {
        return this.#resources[name] ?? `??${name}??`;
    }
}