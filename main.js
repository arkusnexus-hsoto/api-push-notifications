require('dotenv').config();
const generateToken = require('./generateToken');
const sendFCMMessage = require('./sendFCMMessage');

/**
 * Main function to generate token and send FCM message
 */
async function main() {
    try {
        const token = await generateToken();
        console.log('Generated token:', token);

        await sendFCMMessage(token, process.env.PROJECT_ID, process.env.DEVICE_TOKEN);
    } catch (error) {
        console.error('Error in operation:', error);
    }
}

main();
