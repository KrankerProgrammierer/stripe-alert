# Stripe Alert

Quick and dirty app to receive payment notifications from stripe.

## How to use

1. Register a stripe webhook of type `payment_intent.succeeded` to call `http://localhost:8080/webhooks/stripe`

2. Start the app `npm start`

3. Open your browser and go to `http://localhost:8080/`

## Environment variables

| Key  | Description                      | Default |
| ---- | -------------------------------- | ------- |
| PORT | The port to run the webserver on | 8080    |

## Roadmap

- Verify the signature of the stripe event to prevent third parties from triggering the webhook.

## Dependencies

- body-parser
- express
- socket.io

## Copyright Notice

The sound at `public/sound.mp3` is taken from:
| | |
| ---- | --------------------- |
| Title | Here Comes the Money |
| Artist | Jim Johnston |
| Album |WWE: Here Comes the Money (Shane McMahon) |
| Writers | Jim Johnston |
| Source | https://www.youtube.com/watch?v=TeXatquVqAc |

## Author

Paul von Allwörden
