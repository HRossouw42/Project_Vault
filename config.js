module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT : process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://abc123_:abc123_@wallet-api-shard-00-00-s1niu.mongodb.net:27017,wallet-api-shard-00-01-s1niu.mongodb.net:27017,wallet-api-shard-00-02-s1niu.mongodb.net:27017/test?ssl=true&replicaSet=wallet-api-shard-0&authSource=admin&retryWrites=true'
}