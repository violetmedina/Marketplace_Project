
# sequelize model:generate --name users --attributes username:string,email:string,fullName:string,password:string

# sequelize model:generate --name items --attributes category:string,listingName:string,listingDescription:string,listingPrice:integer,inCart:boolean,userID:integer

# sequelize model:generate --name transactions --attributes inCart:boolean,itemID:integer,userID:integer