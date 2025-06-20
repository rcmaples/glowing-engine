# GROQ Assistant - Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   cd apps/studio && pnpm install
   cd ../web && pnpm install
   ```

2. **Add environment variables** in `apps/web/.env.local`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   SANITY_PROJECT_ID=uhpaa149
   ```

3. **Optional: Configure Studio API URL** in `apps/studio/.env.local`:
   ```env
   SANITY_STUDIO_API_URL=http://localhost:3000
   ```

4. **Start both applications:**
   ```bash
   # From project root
   pnpm dev
   ```

5. **Use it:** Navigate to the **"GROQ Assistant"** tool in the studio sidebar!

## 💡 How to Use

1. Open Sanity Studio (http://localhost:3333)
2. Click on **"GROQ Assistant"** in the sidebar (next to Structure and Vision)
3. Type a natural language description: *"Get all published posts with their authors"*
4. Click **"Generate GROQ Query"**
5. Copy the generated query
6. Go to the **Vision** tool and paste the query to test it

## 🏗️ Architecture

- **Custom Studio Tool**: Standalone tool built using Sanity's custom tool API
- **Web App API**: Securely handles OpenAI integration at `/api/groq-inference`
- **Workflow**: Type description → Generate query → Copy to Vision tool
- **UI Components**: Uses `@sanity/ui` for consistent Studio styling

## 🔒 Security

- ✅ OpenAI API key stays on web app server
- ✅ Studio only sends user prompts
- ✅ No sensitive data exposed to browser

## 🛠️ What's Correct Now

This implementation follows **Sanity's official documentation**:
- Uses `definePlugin()` to create a proper plugin
- Creates a **custom tool** using the tools API
- Uses `@sanity/ui` components for consistent styling
- Separates concerns: assistant tool for generation, Vision tool for testing
- No dependency on non-existent Vision hooks

## 🎨 User Experience

- Clean, native Studio UI using Sanity's design system
- Proper loading states and error handling
- Copy-to-clipboard functionality
- Clear instructions for next steps
- Works alongside existing Studio tools

## 🌍 Development vs Production

### Development
- Studio: `http://localhost:3333`
- Web App: `http://localhost:3000` 
- Studio calls web app API via localhost

### Production
- Studio: `https://your-studio.sanity.studio`
- Web App: `https://your-app.vercel.app`
- Set `SANITY_STUDIO_API_URL` to point to production web app

Your OpenAI key remains secure on the web app server! 🔒
