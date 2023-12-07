
export class Recipe {

    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public image_alt: string;
    public creation_date_int: string;
    public creation_date: string;



    constructor(
        public type: string,
        public recipe_json: any
    ) {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.image = "";
        this.image_alt = "";
        this.creation_date_int = "";
        this.creation_date = "";

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
        this.creation_date_int = recipe_json.created_at;

        let date: Date = new Date(Number(this.creation_date_int) * 1000);
        this.creation_date = date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString();
    }


    createRecipeCocktail(recipe_json: any) {
        this.id = recipe_json.idDrink;
        this.name = recipe_json.strDrink;
        this.description = "";
        this.image = recipe_json.strDrinkThumb;
        this.image_alt = recipe_json.thumbnail_alt_text;
    
        const dateModified = recipe_json.dateModified;
    
        if (dateModified) {
            const date = new Date(dateModified);
            if (!isNaN(date.getTime())) {
                this.creation_date_int = date.getTime().toString();
                this.creation_date = date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString();
            }
        } 
        
    }
}
    
