# Slack QR Guest Notification App

A simple web application that allows office guests to notify team members of their arrival by scanning a QR code and filling out a form. The app sends an instant notification to a specified Slack channel.

## Features

- Mobile-friendly form for guests
- Instant Slack notifications when guests arrive
- Configurable team list and visit purposes
- Simple, easy-to-use interface

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- A Slack workspace with permissions to create webhooks

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/allesgood-receptionist.git
   cd allesgood-receptionist
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a Slack webhook:
   - Go to your Slack workspace → Settings & administration → Manage apps
   - Search for "Incoming Webhooks" and add it to your workspace
   - Create a new webhook and select the channel where notifications should appear
   - Copy the webhook URL

4. Set up environment variables:
   - Create a `.env.local` file (or modify the existing one) with:
   ```
   SLACK_WEBHOOK_URL=your_slack_webhook_url_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app

### Creating a QR Code

1. Navigate to your deployed app's URL
2. Use any QR code generator (like [QR Code Generator](https://www.qr-code-generator.com/)) to create a QR code for the URL
3. Print and place the QR code at your office entrance

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fallesgood-receptionist)

Make sure to set the `SLACK_WEBHOOK_URL` environment variable in your Vercel project settings.

## Customization

### Modifying Teams

Edit the `teams` array in `components/GuestForm.tsx` to customize the list of available teams.

### Changing Purposes

Edit the `purposes` array in `components/GuestForm.tsx` to customize the list of available visit purposes.

## License

MIT 