
export class cocktailRecipe {

    public idDrink: number;
    public strDrink: string;
    public strDrinkThumb: string;
    public thumbnail_alt_text: string;


    constructor(
        private type: string,
        public recipe_json: any
    ) {
        this.idDrink = 0;
        this.strDrink = "";
        this.strDrinkThumb = "";
        this.thumbnail_alt_text = ""; 

        if (type == "cocktail") {
            this.createRecipeCocktail(recipe_json);
        }
    }


    createRecipeCocktail(recipe_json: any) {
        this.idDrink = recipe_json.idDrink;
        this.strDrink = recipe_json.strDrink;
        this.strDrink = "";
        this.strDrinkThumb = recipe_json.strDrinkThumb;
        this.thumbnail_alt_text = recipe_json.thumbnail_alt_text;        
    }
}
    
