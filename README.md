# Rheezon - Startup Website

A beautiful, minimalistic, frontend-only website for Rheezon startup, built with React and inspired by Apple's design aesthetic.

## Features

- 🎨 **Apple-inspired Design** - Clean, minimalistic interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast & Modern** - Built with Vite and React for optimal performance
- 📧 **Direct Email Sending** - Contact form sends emails directly using EmailJS
- 🎭 **Smooth Animations** - Elegant transitions and hover effects

## Sections

1. **Hero Section** - Eye-catching landing with call-to-action
2. **About** - Company overview and mission
3. **Team** - Co-founders profiles with beautiful card designs
4. **Projects** - Showcase of company projects and products
5. **Contact** - Contact information and social links
6. **Footer** - Navigation and copyright information

## Getting Started

### Installation

```bash
npm install
```

### EmailJS Setup (Required for Contact Form)

The contact form uses EmailJS to send emails directly. Follow these steps to set it up:

#### Step 1: Sign up for EmailJS
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Click "Sign Up" and create a free account (free tier includes 200 emails/month)

#### Step 2: Get Your Public Key
1. After logging in, click on your **Account** icon (top right)
2. Go to **"General"** section
3. Find **"Public Key"** - it looks like: `abcdefghijklmnop`
4. Copy this value - you'll need it for `VITE_EMAILJS_PUBLIC_KEY`

#### Step 3: Create an Email Service
1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended for beginners)
4. Follow the setup instructions:
   - For Gmail: You'll need to connect your Gmail account
   - EmailJS will guide you through the OAuth process
5. Once connected, you'll see your service listed
6. **Copy the Service ID** - it's shown next to your service name (e.g., `service_abc123`)
   - This is your `VITE_EMAILJS_SERVICE_ID`

#### Step 4: Create an Email Template
1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Configure your template:
   - **Template Name**: "Contact Form" (or any name you prefer)
   - **Subject**: `{{subject}}` (this will use the subject from the form)
   - **Content**: Use this template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     Reply to: {{reply_to}}
     ```
   - **To Email**: Enter your receiving email (e.g., `rheezon.work@gmail.com`)
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{reply_to}}`
4. Click **"Save"**
5. **Copy the Template ID** - it's shown in the template details (e.g., `template_xyz789`)
   - This is your `VITE_EMAILJS_TEMPLATE_ID`

#### Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory of your project
2. Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```
   Replace the example values with your actual credentials from steps 2, 3, and 4.

3. **Important**: 
   - Never commit your `.env` file to version control (it's already in `.gitignore`)
   - Restart your dev server after creating/updating `.env` file

#### Quick Reference: Where to Find Each Credential

| Credential | Where to Find |
|------------|---------------|
| **Public Key** | Account → General → Public Key |
| **Service ID** | Email Services → Your Service → Service ID |
| **Template ID** | Email Templates → Your Template → Template ID |

**Note**: If you don't set up EmailJS, the form will show an error message when submitted. The form will work once you've configured the environment variables and restarted your dev server.

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Company Information

- Edit content in `/src/components/` to customize:
  - `Hero.jsx` - Main headline and tagline
  - `About.jsx` - Company description
  - `Founders.jsx` - Team member information
  - `Projects.jsx` - Project listings
  - `Contact.jsx` - Contact details

### Styling

- Main styles: `/src/App.css`
- Global styles: `/src/index.css`
- Customize CSS variables in `:root` for quick theme changes

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **JavaScript (ES6+)** - Modern JavaScript features

## Design Principles

- Minimalism first
- Apple-inspired aesthetics
- Smooth, subtle animations
- Clean typography
- Generous whitespace
- Responsive design

## License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for Rheezon
