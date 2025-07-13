export default class Product {
  constructor(id = null, name = "", description = "", price = 0.0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
