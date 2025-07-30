## Detoplea

### Environment Setup

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual API keys and configuration:

   - **EmailJS**: Get your service ID, template ID, and public key from [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - **Mailchimp**: Get your API key, server prefix, and list ID from [Mailchimp](https://mailchimp.com/developer/)
   - **WordPress API**: Set your WordPress REST API base URL

3. Never commit the `.env` file to version control - it's already included in `.gitignore`

### Required Environment Variables

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS email template identifier
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key for client-side usage
- `MAILCHIMP_API_KEY` - Mailchimp API key for newsletter subscriptions
- `MAILCHIMP_SERVER_PREFIX` - Mailchimp server prefix (e.g., us8)
- `MAILCHIMP_LIST_ID` - Mailchimp audience/list identifier
- `VITE_WP_API_BASE` - WordPress REST API base URL
