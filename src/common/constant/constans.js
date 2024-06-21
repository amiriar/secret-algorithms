module.exports = {
    MongoIDPattern : /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
    // MongoIDPattern : /^[0-9a-fA-F]{24}$/,
    ROLES : Object.freeze({
        USER : "USER",
        ADMIN : "ADMIN",
        CONTENT_MANAGER : "CONTENT_MANAGER",
    }),
    PERMISSIONS : Object.freeze({
        USER : ["profile"],
        ADMIN : ["all"],
        CONTENT_MANAGER :["article"],
        ALL : "all"
    }),
    ACCESS_TOKEN_SECRET_KEY:"ADGWSEg23424YGvqa345gVe$%3ef45yuG"
}