export default class SwapiService {
    _hostname = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(url);

        if (!res.ok)
            throw new Error(`Can't fetch: ${url}, status code: ${res.status}`);

        return res.json();
    }

    getFilm(id) {
        return this.getResource(`${this._hostname}/films/${id}/`);
    }

    async getAllFilms() {
        const res = await this.getResource(`${this._hostname}/films/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`${this._hostname}/people/${id}/`);
    }

    async getAllPeople() {
        const res = await this.getResource(`${this._hostname}/people/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`${this._hostname}/planets/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`${this._hostname}/planets/`);
        return res.results;
    }

    getSpecies(id) {
        return this.getResource(`${this._hostname}/species/${id}/`);
    }

    async getAllSpecies() {
        const res = await this.getResource(`${this._hostname}/species/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`${this._hostname}/starships/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`${this._hostname}/starships/`);
        return res.results;
    }

    getVehicle(id) {
        return this.getResource(`${this._hostname}/vehicles/${id}/`);
    }

    async getAllVehicles() {
        const res = await this.getResource(`${this._hostname}/vehicles/`);
        return res.results;
    }
}
