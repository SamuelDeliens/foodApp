
export class Tag {

    public name: string;
    public display_name: string;

    constructor(
        name: string,
        display_name: string
    ) {
        this.name = name;
        this.display_name = display_name;
    }
}

export class Category {

    public name: string;
    public count: string;
    public tags: Tag[];

    constructor(
        name: string,
        count: string,
        tags: Tag[]
    ) {
        this.name = name;
        this.count = count;
        this.tags = tags;
    }
}