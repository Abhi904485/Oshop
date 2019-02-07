export class Order {
  datePlaced: number;

  constructor(public shipping: object, public items: any, public userId: string) {
    this.shipping = shipping;
    this.items = items.items;
    this.datePlaced = new Date().getTime();
    this.userId = userId;
  }
}
