const configs = {
    port: process.env.PORT || 6000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://rosepinky:roseumutesi123@cluster0.j1y3rqv.mongodb.net/myFirstDatabase1',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;