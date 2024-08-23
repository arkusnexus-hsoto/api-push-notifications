const { JWT } = require('google-auth-library');
const path = require('path');
require('dotenv').config();

// Load the service account file
const serviceAccount = require(path.join(__dirname, 'firebase-credentials', process.env.SERVICE_ACCOUNT_FILE));

/**
 * Generates an access token for Firebase Cloud Messaging
 * @returns {Promise<string>} The generated access token
 */
async function generateToken() {
    const jwtClient = new JWT({
        email: serviceAccount.client_email,
        key: serviceAccount.private_key,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    try {
        const token = await jwtClient.authorize();
        return token.access_token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw error;
    }
}

module.exports = generateToken;
