# FCM Token Generator and Message Sender

This project allows you to generate authentication tokens for Firebase Cloud Messaging (FCM) and send FCM messages to specific devices.

## Setup

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <directory-name>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root based on `.env.example`:
   ```
   cp .env.example .env
   ```

4. Edit the `.env` file and adjust the variables according to your configuration:
    - `SERVICE_ACCOUNT_FILE`: Name of your Firebase credentials file (must be in the `firebase-credentials` folder)
    - `DEVICE_TOKEN`: Token of the device you want to send messages to
    - `PROJECT_ID`: Your Firebase project ID

5. Place your Firebase credentials file in the `firebase-credentials/` folder. Make sure the filename matches what you specified in `SERVICE_ACCOUNT_FILE` in the `.env` file.

## Usage

To generate a token and send an FCM message, run:

```
npm start
```

This command will execute the `main.js` file, which generates an authentication token and sends a test message to the specified device.

## Project Structure

```
project-folder/
│
├── firebase-credentials/    # Folder for credential files (ignored by git)
│   └── <your-credentials-file>.json
├── generateToken.js         # Script to generate authentication token
├── sendFCMMessage.js        # Script to send FCM messages
├── main.js                  # Main script that runs token generation and message sending
├── .env                     # Environment variables file (not included in repository)
├── .env.example             # Example .env file
├── package.json             # Project configuration and dependencies
└── .gitignore               # Specifies files/folders ignored by git
```

## Important Notes

- Never upload your Firebase credentials file or your `.env` file to the repository.
- The `firebase-credentials/` folder is included in `.gitignore` to prevent accidentally sharing sensitive information.
- Make sure you have the necessary permissions in your Firebase project to generate tokens and send messages.

## Troubleshooting

If you encounter any issues while setting up or running the project, make sure:

1. You have installed all dependencies (`npm install`).
2. You have a correctly configured `.env` file.
3. You have placed the Firebase credentials file in the `firebase-credentials/` folder with the correct name.
4. You have the necessary permissions in your Firebase project.

If problems persist, check the error logs for more details.