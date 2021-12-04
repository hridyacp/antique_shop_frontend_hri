export class CheckoutModel{
    constructor( 
        public address:String | null,
        public email:String | null,
         public payment: String |null ,
        public pstatus:String | null 
      ){}
 }