# Express TypeScript Server with Gemini AI

A Node.js Express server built with TypeScript that integrates with Google's Gemini AI for chat functionality.

## 🚀 Features

- **Express TypeScript Server** - Modern web server with type safety
- **Gemini AI Integration** - Chat endpoint powered by Google's Gemini AI
- **Environment Configuration** - Secure API key management with dotenv
- **CORS Support** - Cross-origin resource sharing enabled
- **Health Check** - Built-in health monitoring endpoint
- **Development & Production Modes** - Optimized for both environments

## 📋 Prerequisites

- **Node.js** v16 or higher
- **npm** package manager
- **Gemini API Key** - Get one from [Google AI Studio](https://aistudio.google.com/app/apikey)

## 🛠️ Installation

1. **Clone and navigate to the project:**
   ```bash
   cd node-express-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   # Edit .env file and add your actual API key
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=3000
   ```

## 🏃‍♂️ Running the Project

### Development Mode (Recommended)
```bash
npm run dev
```
- ✅ Runs TypeScript directly with `ts-node`
- ✅ Hot reload on file changes
- ✅ Real-time console logs
- ✅ Uses latest code without compilation

### Production Mode
```bash
npm run build    # Compile TypeScript first
npm run start    # Run compiled JavaScript
```

### Expected Output
```
[dotenv@17.2.1] injecting env (2) from .env
🚀 Server is running on port 3000
📝 API available at http://localhost:3000/api/chat
🔍 Health check at http://localhost:3000/health
🔑 GEMINI_API_KEY is set
```

## 📡 API Endpoints

### 🏠 Home
- **URL:** `GET /`
- **Description:** Server information and available endpoints
- **Response:**
  ```json
  {
    "message": "Express TypeScript Server is running!",
    "endpoints": {
      "chat": "POST /api/chat",
      "health": "GET /health"
    }
  }
  ```

### 💬 Chat with Gemini AI
- **URL:** `POST /api/chat`
- **Description:** Send messages to Gemini AI and get responses
- **Request Body:**
  ```json
  {
    "message": "Hello, how are you?"
  }
  ```
- **Response:**
  ```json
  {
    "response": "AI response from Gemini",
    "timestamp": "2024-01-01T12:00:00.000Z",
    "received_message": "Hello, how are you?"
  }
  ```

### ❤️ Health Check
- **URL:** `GET /health`
- **Description:** Server health status
- **Response:**
  ```json
  {
    "status": "OK",
    "timestamp": "2024-01-01T12:00:00.000Z",
    "uptime": 123.456
  }
  ```

## 🧪 Testing the API

### Using curl

**Health Check:**
```bash
curl http://localhost:3000/health
```

**Chat with Gemini:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

### Using a REST client
- **Postman**, **Insomnia**, or **VS Code REST Client**
- Import the endpoints above

## 📁 Project Structure

```
node-express-app/
├── src/
│   └── server.ts          # Main server file
├── dist/                  # Compiled JavaScript (generated)
├── node_modules/          # Dependencies
├── .env                   # Environment variables (not in git)
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🔧 npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start` | Run compiled production version |
| `npm test` | Run tests (not implemented yet) |

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
lsof -ti:3000 | xargs kill
```

### Environment Variables Not Loading

**Problem:** Server shows `🔑 GEMINI_API_KEY is NOT set`

**Solutions:**
1. **Check .env file exists** in project root
2. **Verify API key** is set correctly (no quotes needed)
3. **Use development mode:** `npm run dev` instead of `npm run start`
4. **If using production:** Run `npm run build` first to update compiled version

### Different Behavior Between Commands

| Issue | Cause | Solution |
|-------|-------|----------|
| `npm run start` - API key not found | Using old compiled version | Run `npm run build` then `npm run start` |
| `npm run dev` - API key found | Using latest TypeScript source | ✅ This is correct |

### Common Console Messages

- ✅ `🔑 GEMINI_API_KEY is set` - Environment configured correctly
- ❌ `🔑 GEMINI_API_KEY is NOT set` - Check your .env file
- ✅ `[dotenv@17.2.1] injecting env (2) from .env` - dotenv working correctly

## 🔒 Security Notes

- **Never commit `.env` file** to version control
- **Use different API keys** for development and production
- **Validate all inputs** before sending to Gemini API
- **Rate limit** API calls in production

## 🚀 Deployment

For production deployment:

1. **Set environment variables** on your hosting platform
2. **Build the project:** `npm run build`
3. **Start the server:** `npm run start`
4. **Use a process manager** like PM2 for production

## 📚 Dependencies

### Runtime Dependencies
- **express** - Web framework
- **@google/genai** - Gemini AI SDK
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable loading

### Development Dependencies
- **typescript** - TypeScript compiler
- **ts-node** - Run TypeScript directly
- **@types/** - Type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License - See package.json for details

---

**Happy coding! 🎉**

For issues or questions, refer to this README or check the console logs for detailed error messages.
