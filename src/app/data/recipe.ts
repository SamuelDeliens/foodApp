export class Recipe {

    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public image_alt: string;
    public creation_date_int: string;
    public creation_date: string;

    constructor(
        public recipe_json: any
    ) {

        this.id = recipe_json.id;
        this.name = recipe_json.name;
        this.description = recipe_json.description;
        this.image = recipe_json.thumbnail_url;
        this.image_alt = recipe_json.thumbnail_alt_text;
        this.creation_date_int = recipe_json.created_at;

        let date: Date = new Date(Number(this.creation_date_int) * 1000);
        this.creation_date = date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString();

    }
}