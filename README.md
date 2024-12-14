## README.md

### Prerequisites
Before you start, ensure you have the following:
* **Node.js and a package manager:** Node.js and npm (or yarn, pnpm, or bun) installed on your system. Download from https://nodejs.org/.
* **Google Cloud Platform service account key:** A JSON file containing the credentials for your Google Cloud Platform service account.

### Setup
1. **Place Service Account Key:**
   * Create a JSON file containing your Google Cloud Platform service account key.
   * Place this file in the root directory of your project and name it `serviceAccountKey.json`.
2. **Create .env file:**
   * Create a `.env` file in the root of your project.
   * Copy the contents from the provided `env.example` file and replace the placeholders with your actual values.

### Running the Application
To start the development server, use one of the following commands in your terminal:
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev