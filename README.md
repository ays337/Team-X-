## ⚙️ Prerequisites

Before starting, ensure you have Node JS and Git installed:

### Node.js

- **With Admin Access**: [Download from Node.js official site](https://nodejs.org/en/download)
- **Without Admin Access**: Refer to the [**Node Workaround Doc**](https://swcompany-my.sharepoint.com/:w:/g/personal/anthony_safo_sherwin_com/EbqwQyEKVRlCvxZqwBiJBfYBs-xyz1Zj9tBUDAXhmdMB1g?e=acuDhB)

### Git

- **With Admin Access**: [Download from Git official site](https://git-scm.com/downloads)
- **Without Admin Access**: Refer to the [**Git Workaround Doc**](https://swcompany-my.sharepoint.com/:w:/g/personal/anthony_safo_sherwin_com/EXtNbBNhsJ1IuJnHRrrljJIBeqpZ1EkQ4fs-_hXa3EFR_w?e=pbz6y1)

### Backend
This Repo is meant to be used as a front end app for the backend server here:

https://github.com/jcs388/rdp-hackathon-team-4-backend/tree/main
> Please ensure you have both repos cloned and have both this frontend app and the server in the other repo running.
<br/>

## 🧭 Project Setup

### 1. Open in VSCode

- Open the project folder in Visual Studio Code.
- Open a new **Integrated Terminal** (preferably Command Prompt on Windows).

### 2. Navigate to the Project Directory

Make sure you're inside the `hackathon_struct` directory:
```bash
cd path\to\your\repo\hackathon_struct
```
### 3. Install Dependencies

Run the following command to install all required packages, including Vite:
```bash
npm install
```
<br/>

## 👟 Running the Project
⚠️ Important: The backend python server MUST be running for this project to work 

### 1. Start the API Server
Make sure you are running the backend python server found here. 
https://github.com/jcs388/rdp-hackathon-team-4-backend.
Follow the instructions in the readme to install needed python dependancies 

### 2. Start the React App
- Open another new terminal.
- Navigate to the `hackathon_struct` folder:
```bash
cd hackathon_struct
npm run dev
```

### 3. Open the App
- Once both the server and app are running, open your browser and go to:
```bash
http://localhost:5173/
```
>Or whatever your local development server address is

- You should now see the app running.

<br/>
