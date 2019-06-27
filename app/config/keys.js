console.log("API keys loaded");

module.exports = {
    firebase: process.env.FIREBASE_API_KEY,
    iex: {
        prod: {
            api: process.env.IEX_PROD_API_KEY,
            secret: process.env.IEX_PROD_SECRET
        },
        test: {
            api: process.env.IEX_TEST_API_KEY,
            secret: process.env.IEX_TEST_SECRET
        }

    }
}