import {connect} from "../../helper db/connect.js"

export class movies extends connect{
    static instance;
    constructor(){
        if(typeof movies.instance === "object"){
            return movies.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movies.instance = this;
    }
    async getAllMovies(){
        let res = await this.collection.aggregate([
            {
                $project: {
                    name:1
                }
            }
        ]).toArray();
        return res;
    }
//1. **Buscar películas del género "Accion":**
    async getAllMoviesOfAction(){
        let res = await this.collection.find(
            {genre: {$elemMatch: {$eq: "Accion"}}},
            {_id: 0, name: 1, genre:1}).toArray();
        return res;
    }

//2. **Buscar películas con más de 200 copias en formato "Bluray":**
//12. **Buscar películas con más de 200 copias en formato "Bluray":**

    async getAllMoviesByQuantityInFormatBluray(){
        let res = await this.collection.find(
            {format: 
            {$elemMatch: {name: {$eq: "Bluray"}, copies: {$gt: 200}}}
            },
              {name: 1, format: 1});
        return res;
    }

//3. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**
//13. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**
    async getAllMoviesByPriceOfDVD(){
        let res = await this.collection.find(
            {format: 
            {$elemMatch: {name: {$eq: "dvd"}, value: {$lt: 10}}  }
            },
            {name: 1, format:1});
        return res;
    }

//4. **Buscar películas con un personaje apodado "Cobb":**
//11. **Buscar películas con un personaje principal apodado "Cobb":**
    async getAllMoviesByCharactherCobb(){
        let res = await this.collection.find(
            {character:
            {$elemMatch: {apodo: {$eq: "Cobb"}}}},
            {name: 1, character:1});
        return res;
    }

//5. **Buscar películas con actores de id 2 y 3:**
    async getAllMoviesWithActoresById(){
        let res = await this.collection.find(
            {character: {$elemMatch:{id_actor : {$in: [2,3]}}}},
              {name: 1, character: 1});
        return res;
    }

//6. **Buscar películas que tengan el formato "Bluray":**
    async getAllMoviesWithFormatBluray(){
        let res = await this.collection.find(
            {format: 
            {$elemMatch: {name: {$eq: "Bluray"}}}
            },
              {name: 1, format: 1});
        return res;
    }

//7. **Buscar películas con el género "Ciencia Ficción":**
    async getAllMoviesWithGenderScienceFiction(){
        let res = await this.collection.find(
            {genre: {$elemMatch: {$eq: "Ciencia Ficción"}}},
            {_id: 0, name: 1, genre:1});
        return res;
    }

//8. **Buscar películas con un rol principal llamado "Miguel":**
//15. **Buscar películas con un rol principal y un apodo "Miguel":**
    async getAllMoviesPrincipalRolMiguel(){
        let res = await this.collection.find(
            {character:
            {$elemMatch: {rol: {$eq: "principal"}, apodo: {$eq: "Miguel"}}}},
            {name: 1, character:1});
        return res;
    }

//9. **Buscar películas que tengan al menos un formato con más de 100 copias:**
    async getAllMoviesByQuantityOfCopiesFormat(){
        let res = await this.collection.find(
            {format: 
            {$elemMatch: {copies: {$gt: 100}}}},    
            {name: 1, format:1});
        return res;
    }

//10. **Buscar películas con un actor con id_actor 1:**
    async getAllMoviesByActorId(){
        let res = await this.collection.find(
            {character: 
            {$elemMatch: {id_actor: {$eq: 1}}}},    
            {name: 1, character:1});
        return res;
    }


//14. **Buscar películas con un personaje secundario apodado "Arthur":**
    async getAllMoviesSecundaryCharactherArthur(){
        let res = await this.collection.find(
            {character:
            {$elemMatch: {rol: {$eq: "secundario"}, apodo: {$eq: "Arthur"}}}},
            {name: 1, character:1});
        return res;
    }
}