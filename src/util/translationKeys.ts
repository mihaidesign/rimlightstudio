const descriptionKey = "description";
const constructionKey = "construction";
const menuKey = "menu";

export namespace Translation {
  export enum Description {
    "we-are" = `${descriptionKey}.we-are`,
  }
  export enum Construction {
    title = `${constructionKey}.title`,
    description = `${constructionKey}.description`,
  }
  export enum Menu {
    home = `${menuKey}.home`,
    about = `${menuKey}.about`,
    contact = `${menuKey}.contact`,
    portfolio = `${menuKey}.portfolio`,
  }
}

