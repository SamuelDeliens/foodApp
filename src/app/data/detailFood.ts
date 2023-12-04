import {Tag} from "./tag";

export class RecipeDetails {

    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public image_alt: string;
    public creation_date_int: string;
    public creation_date: string;
    public video: string;
    public tags: Tag[];
    public portion: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cooking_time: CookingTime;
    public credit: string;
    public nutrition: Nutrition;
    public notes: number;
    public price: number;
    public difficulty: string;
    //compilation: any; => compilation of how is done the recipe

    constructor(
        public recipe_json: any
    ) {
        console.log(recipe_json);

        this.id = 0;
        this.name = "";
        this.description = "";
        this.image = "";
        this.image_alt = "";
        this.video = "";
        this.credit = "";

        this.creation_date_int = "";
        this.creation_date = "";

        this.cooking_time = new CookingTime("", "", "", "");
        this.notes = 0;
        this.price = 0;
        this.difficulty = "";
        this.portion = 0;

        this.tags = [];
        this.ingredients = [];
        this.instructions = [];
        this.nutrition = new Nutrition(0, 0, 0, 0, 0, 0);

        if (recipe_json == "") {
            console.log("Empty recipe");
            return;
        }
        this.createRecipe(recipe_json);
    }

    createRecipe(recipe_json: any) {
        this.id = recipe_json.id;
        this.name = recipe_json.name;
        this.description = recipe_json.description;
        this.image = recipe_json.thumbnail_url;
        this.image_alt = recipe_json.thumbnail_alt_text;
        this.video = recipe_json.video_url;

        if (recipe_json.credits) this.credit = recipe_json.credits.name;

        this.creation_date_int = recipe_json.created_at;
        let date: Date = new Date(Number(this.creation_date_int) * 1000);
        this.creation_date = date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString();

        this.notes = Math.round(recipe_json.user_ratings.score * 500) / 100;
        this.notes = Math.round(this.notes * 2) / 2;
        this.cooking_time = new CookingTime(recipe_json.total_time_minutes, recipe_json.prep_time_minutes, recipe_json.cook_time_minutes, recipe_json.total_time_tier.display_tier);

        if (recipe_json.price.total) this.price = recipe_json.price.total / 100;
        this.difficulty = "Medium";

        //TAGS
        for (let tag of recipe_json.tags) {
            this.tags.push(new Tag(tag.name, tag.display_name));
            if (tag.display_name == "Easy" || tag.display_name == "Medium" || tag.display_name == "Hard" ) this.difficulty = tag.display_name;
        }

        //INGREDIENT
        this.portion = Math.round(recipe_json.price.total / recipe_json.price.portion);
        for (let ingredient of recipe_json.sections[0].components) {
            let name: string = ingredient.ingredient.display_singular;
            for (let measure of ingredient.measurements) {
                let unit: string = measure.unit.display_singular;
                let quantity: number = Number(measure.quantity) / this.portion;
                if (isNaN(quantity)) continue;
                if (quantity > 1) {
                    name = ingredient.ingredient.display_plural;
                    unit = measure.unit.display_plural;
                }
                this.ingredients.push(new Ingredient(name, quantity, unit, ingredient.raw_text));
                break;
            }
        }

        //INSTRUCTION
        for (let instruction of recipe_json.instructions) {
            this.instructions.push(new Instruction(instruction.display_text, instruction.start_time, instruction.end_time, instruction.temperature));
        }
        this.nutrition = new Nutrition(recipe_json.nutrition.fiber, recipe_json.nutrition.calories, recipe_json.nutrition.fat, recipe_json.nutrition.protein, recipe_json.nutrition.carbohydrates, recipe_json.nutrition.sugar);
    }
}

export class Ingredient {
    public name: string;
    public image: string;
    public quantity: number;
    public unit: string;
    public description: string;

    constructor(
        name: string,
        quantity: number,
        unit: string,
        description: string
    ) {
        this.name = name;
        this.image = "";
        this.quantity = quantity;
        this.unit = unit;
        this.description = description;
    }
}
export class Instruction {
    public description: string;
    public start_time: number;
    public end_time: number;
    public temperature: number;

    constructor(
        description: string,
        start_time: number,
        end_time: number,
        temperature: number
    ) {
        this.description = description;
        this.start_time = start_time;
        this.end_time = end_time;
        this.temperature = temperature;
    }
}
export class Nutrition {
    public fiber: number;
    public calories: number;
    public fat: number;
    public protein: number;
    public carbs: number;
    public sugar: number;

    constructor(
        fiber: number,
        calories: number,
        fat: number,
        protein: number,
        carbs: number,
        sugar: number
    ) {
        this.fiber = fiber;
        this.calories = calories;
        this.fat = fat;
        this.protein = protein;
        this.carbs = carbs;
        this.sugar = sugar;
    }
}
export class CookingTime {
    public total: string;
    public prep: string;
    public cook: string;
    public tiers: string;
    public display_time: string;

    constructor(
        total: string,
        prep: string,
        cook: string,
        tiers: string
    ) {
        this.total = total;
        this.prep = prep;
        this.cook = cook;
        this.tiers = tiers;
        this.display_time = "";

        this.displayTime();
    }

    displayTime() {
        if (this.total && this.total != "") {
            console.log(this.total);
            this.display_time = this.total + " min";
        } else if (this.prep && this.cook && this.prep != "" && this.cook != "") {
            console.log(this.prep, this.cook);
            this.display_time = this.prep + " min prep + " + this.cook + " min cook";
        } else if (this.prep && this.prep != "") {
            console.log(this.prep);
            this.display_time = this.prep + " min prep";
        } else if (this.cook && this.cook != "") {
            console.log(this.cook);
            this.display_time = this.cook + " min cook";
        } else if (this.tiers && this.tiers != "") {
            console.log(this.tiers);
            this.display_time = "- " + this.tiers.replace(/[^\d]/g, "") + " min";
        } else {
            this.display_time = "No time";
        }
    }
}
