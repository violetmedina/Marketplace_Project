
# sequelize model:generate --name users --attributes username:string,email:string,fName:string,lName:string,password:string

# sequelize model:generate --name items --attributes userID:integer,category:string,listingName:string,listingDescription:string,imageURL:string,listingPrice:integer,total:integer,buyerID:integer,qty:integer,available:boolean

# sequelize model:generate --name transactions --attributes itemID:integer,userID:integer,sellerID:integer,buyerID:integer,qty:integer,price:integer,total:integer

# sequelize model:generate --name carts --attributes userID:integer,itemID:integer,qty:integer

# sequelize model:generate --name payments --attributes transactionID:integer,address:string

# sequelize migration:create --name create_items_transactions_join

# sequelize migration:create --name create_users_transactions_join

sequelize migration:create --name create_item_cart_join
