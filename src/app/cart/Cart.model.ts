export class CartModel{
    constructor( 
        public name: String | null,
        public type: String | null,
        public price: String |null,
        public email: String |null,
        public image: String | null,
        public prodID: String | null,
        public qty: String | null
        ){}
}