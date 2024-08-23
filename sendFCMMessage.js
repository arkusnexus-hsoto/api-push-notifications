const axios = require('axios');

/**
 * Sends a Firebase Cloud Message to a specific device
 * @param {string} accessToken - The access token for authentication
 * @param {string} projectId - The Firebase project ID
 * @param {string} deviceToken - The token of the target device
 */
async function sendFCMMessage(accessToken, projectId, deviceToken) {
    const message = {
        message: {
            token: deviceToken,
            notification: {
                title: "Manual PUSH",
                body: "This is a manual push notification sent from a node project"
            }
        }
    };

    try {
        const response = await axios.post(`https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`, message, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Success message:', response.data);
    } catch (error) {
        console.error('Error message:', error.response ? error.response.data : error.message);
    }
}

module.exports = sendFCMMessage;
