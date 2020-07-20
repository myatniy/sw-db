export default class SwapiService {
    
    _hostname = `https://swapi.dev/api`;

    async getResource(url) {
        const res = await fetch(url);

        if (!res.ok) 
            throw new Error(
                `Can't fetch: ${url},` +
                `status code: ${res.status}`
            );

        return res.json();
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    getFilm = async (id) => {
        const film = await this.getResource(`${this._hostname}/films/${id}/`);
        return this._transformFilmData(film);
    }

    getAllFilms = async () => {
        const res = await this.getResource(`${this._hostname}/films/`);
        return res.results.map(this._transformFilmData);
    }

    _transformFilmData = (film) => {
        return {
            id: this._extractId(film),
            director: film.director,
            openingCrawl: film.opening_crawl,
            producer: film.producer,
            releaseDate: film.release_date,
            title: film.title
        };
    }

    getPerson = async (id) => {
        const person = await this.getResource(`${this._hostname}/people/${id}/`);
        return this._transformPersonData(person);
    }

    getAllPeople = async () => {
        const res = await this.getResource(`${this._hostname}/people/`);
        return res.results.map(this._transformPersonData);
    }
    
    _transformPersonData = (person) => {
        return {
            id: this._extractId(person),
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
            height: person.height,
            mass: person.mass,
            name: person.name,
            skinColor: person.skin_color
        };
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`${this._hostname}/planets/${id}/`);
        return this._transformPlanetData(planet);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`${this._hostname}/planets/`);
        return res.results.map(this._transformPlanetData);
    }

    _transformPlanetData = (planet) => {
        return {
            id: this._extractId(planet),
            climate: planet.climate,
            diameter: planet.diameter,
            gravity: planet.gravity,
            name: planet.name,
            orbitalPeriod: planet.orbital_period,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            surfaceWater: planet.surface_water,
            terrain: planet.terrain
        };
    }

    getSpecies = async (id) => {
        const species = await this.getResource(`${this._hostname}/species/${id}/`);
        return this._transformSpeciesData(species);
    }

    getAllSpecies = async () => {
        const res = await this.getResource(`${this._hostname}/species/`);
        return res.results.map(this._transformSpeciesData);
    }

    _transformSpeciesData = (species) => {
        return {
            id: this._extractId(species),
            averageHeight: species.average_height,
            averageLifespan: species.average_lifespan,
            classification: species.classification,
            designation: species.designation,
            eyeColors: species.eye_colors,
            hairColors: species.hair_colors,
            language: species.language,
            name: species.name,
            skinColor: species.skin_color
        };
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`${this._hostname}/starships/${id}/`);
        return this._transformStarshipData(starship);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`${this._hostname}/starships/`);
        return res.results.map(this._transformStarshipData);
    }

    _transformStarshipData = (starship) => {
        return {
            id: this._extractId(starship),
            MGLT: starship.MGLT,
            cargoCapacity: starship.cargo_capacity,
            consumables: starship.consumables,
            costInCredits: starship.cost_in_credits,
            crew: starship.crew,
            hyperdriveRating: starship.hyperdrive_rating,
            manufacturer: starship.manufacturer,
            maxAtmospheringSpeed: starship.max_atmosphering_speed,
            model: starship.model,
            name: starship.name,
            passengers: starship.passengers,
            starshipClass: starship.starship_class
        };
    }

    getVehicle = async (id) => {
        const vehicle = await this.getResource(`${this._hostname}/vehicles/${id}/`);
        return this._transformVehicleData(vehicle);
    }

    getAllVehicles = async () => {
        const res = await this.getResource(`${this._hostname}/vehicles/`);
        return res.results.map(this._transformVehicleData);
    }

    _transformVehicleData = (vehicle) => {
        return {
            id: this._extractId(vehicle),
            cargoCapacity: vehicle.cargo_capacity,
            consumables: vehicle.consumables,
            costInCredits: vehicle.cost_in_credits,
            crew: vehicle.crew,
            manufacturer: vehicle.manufacturer,
            maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
            model: vehicle.model,
            name: vehicle.name,
            passengers: vehicle.passengers,
            vehicleClass: vehicle.vehicle_class
        };
    }
}
