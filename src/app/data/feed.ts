
export class Feed {

    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public image_alt: string;
    public user_ratings: number;


    constructor(
        private type: string,
        public recipe_json: any
    ) {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.image = "";
        this.image_alt = "";
        this.user_ratings = 0;

        if (type == "food") {
            this.createRecipeFood(recipe_json);
        }
        else if (type == "cocktail") {
            this.createRecipeCocktail(recipe_json);
        }
    }

    createRecipeFood(recipe_json: any) {
        this.id = recipe_json.id;
        this.name = recipe_json.name;
        this.description = recipe_json.description;
        this.image = recipe_json.thumbnail_url;
        this.image_alt = recipe_json.thumbnail_alt_text;
        this.user_ratings = recipe_json.user_ratings;
        }


    createRecipeCocktail(recipe_json: any) {
        this.id = recipe_json.idDrink;
        this.name = recipe_json.strDrink;
        this.description = "";
        this.image = recipe_json.strDrinkThumb;
        this.image_alt = recipe_json.thumbnail_alt_text;        
    }
}
    
