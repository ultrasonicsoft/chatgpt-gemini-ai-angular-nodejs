# ChatGPT-Gemini AI Chat Application

A modern chat application built with Angular 19 and Node.js, powered by Google's Gemini AI. Features a sleek ChatGPT-like interface with real-time messaging capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API key

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key for the next step

### 2. Setup API Server
```bash
# Navigate to the API server directory
cd api-server

# Install dependencies
npm install

# Create environment file
cp .env .env.local  # or create a new .env file

# Add your API key to .env
echo "GEMINI_API_KEY=your_api_key_here" > .env
echo "PORT=3000" >> .env
```

### 3. Setup Frontend
```bash
# Navigate back to root directory
cd ..

# Install dependencies
npm install
```

### 4. Start Development Servers

**Terminal 1 - Start API Server:**
```bash
cd api-server
npm run dev
```
The API server will run on `http://localhost:3000`

**Terminal 2 - Start Frontend:**
```bash
# From root directory
ng serve
```
The frontend will run on `http://localhost:4200`

### 5. Open Your Browser
Navigate to `http://localhost:4200` and start chatting with Gemini AI!

## 📺 Video Tutorial

**Want to see this project in action?** Check out my comprehensive video tutorial where I walk through building this entire ChatGPT-Gemini AI application from scratch!

[![Watch the Tutorial](https://img.shields.io/badge/▶️_Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/MYVvB_hAeFk)

**[🎥 Building ChatGPT Clone with Angular 19 & Gemini AI](https://youtu.be/MYVvB_hAeFk)**

In this tutorial, you'll learn:
- 🚀 How to set up Angular 19 with the latest features
- 🤖 Integrating Google Gemini AI API
- 💬 Building a modern chat interface
- 🎨 Creating ChatGPT-like UI components
- 🔧 Setting up Node.js backend server
- 🔐 Secure API key management

👍 **If this project helped you, please give the video a thumbs up and subscribe to my channel for more Angular and AI tutorials!**

## 📁 Project Structure

```
├── src/                    # Angular frontend application
│   ├── app/
│   │   ├── chat-container/     # Main chat interface
│   │   ├── services/           # Angular services
│   │   └── @models/           # TypeScript models
├── api-server/            # Node.js backend server
│   ├── src/               # Server source code
│   ├── .env               # Environment variables (add your API key here)
│   └── package.json       # Backend dependencies
└── package.json           # Frontend dependencies
```

## 🔧 Configuration

### Environment Variables (api-server/.env)
```bash
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

## 🛠 Development

### Frontend Development
```bash
# Start development server with hot reload
ng serve

# Build for production
ng build

# Run tests
ng test
```

### Backend Development
```bash
cd api-server

# Start development server with hot reload
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start
```

## 🔑 API Key Security

- ⚠️ **Never commit your API key to version control**
- The `.env` file is already included in `.gitignore`
- Keep your API key secure and don't share it publicly
- Consider using environment-specific `.env` files for different deployments

## 🌟 Features

- **Modern UI**: ChatGPT-inspired interface with dark theme
- **Real-time Chat**: Instant messaging with Gemini AI
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for new lines
- **Auto-scroll**: Automatic scrolling to latest messages
- **Loading States**: Visual feedback during API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [🎥 YouTube Tutorial - Building this Project](https://youtu.be/MYVvB_hAeFk)
- [Angular Documentation](https://angular.dev)
- [Google Gemini AI](https://ai.google.dev)
- [Node.js Documentation](https://nodejs.org)

## 👨‍💻 About the Creator

This project was created as part of my YouTube tutorial series on modern web development. If you found this helpful:

- 📺 **[Subscribe to my YouTube channel](https://youtu.be/MYVvB_hAeFk)** for more Angular, AI, and web development tutorials
- 👍 **Like the video** if this project helped you learn something new
- 💬 **Leave a comment** on the video with your questions or suggestions
- 🔔 **Turn on notifications** to stay updated with new tutorials

**More tutorials coming soon:**
- Advanced Angular 19 features
- AI integration patterns
- Modern UI/UX development
- Full-stack development with Node.js
