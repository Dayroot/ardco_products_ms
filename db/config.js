
const config = {
    PORT: process.env.PORT || 4000,
    URL: process.env.URL,
    CORS: process.env.CORS,
    PUBLIC_ROUTE: process.env.PUBLIC_ROUTE || '/app',
    FILES_ROUTE: process.env.FILES_ROUTE || '/files',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
}
const MONGO_URI= `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_NAME}?retryWrites=true&w=majority`;
    
module.exports = {
    config,
    MONGO_URI,
}