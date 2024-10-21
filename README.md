# WebSocket with Express and TypeScript

This project demonstrates how to set up a simple Node.js application using WebSocket, Express, and TypeScript. It includes a WebSocket server that communicates with a client, showcasing real-time messaging capabilities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing the WebSocket Connection](#testing-the-websocket-connection)
- [License](#license)

## Features

- Basic WebSocket server functionality
- Express server setup
- Real-time message exchange between client and server
- TypeScript for type safety and modern JavaScript features

## Technologies Used

- Node.js
- Express
- WebSocket (`ws`)
- TypeScript
- Nodemon (for development)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-websocket-project.git
   cd my-websocket-project

2. **Install the dependencies:**

   ```bash
   npm install

3. **Initialize TypeScript:**

   ```bash
   npm run dev

## Usage

1. **Compile TypeScript and start the server:**
***You can run the server in development mode using nodemon:***
   
   ```bash
   npm run dev

***This will start the server and watch for file changes.***

2. **Access the server:**

   ```bash
   [npm run dev](http://localhost:3000)

## Testing the WebSocket Connection
***To test the WebSocket server, you can use the provided HTML client. Follow these steps:***

1. **Create an HTML file:**
***Create a file named index.html in the project root with the following content:***

   ```bash
     <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>WebSocket Test</title>
      </head>
      <body>
          <h1>WebSocket Client</h1>
          <input id="message" type="text" placeholder="Type a message...">
          <button id="send">Send</button>
          <div id="output"></div>
      
          <script>
              const output = document.getElementById('output');
              const ws = new WebSocket('ws://localhost:3000');
      
              ws.onmessage = (event) => {
                  const message = document.createElement('div');
                  message.textContent = `Server: ${event.data}`;
                  output.appendChild(message);
              };
      
              document.getElementById('send').onclick = () => {
                  const messageInput = document.getElementById('message');
                  const message = messageInput.value;
                  ws.send(message);
                  messageInput.value = '';
              };
          </script>
      </body>
      </html>

2. **Open the HTML file:**
   ***Open index.html in your web browser.***

3. **Send messages:**
   ***Type a message and click "Send". You should see the messages exchanged between the client and server in real time.***

## License

***This project is licensed under the MIT License - see the LICENSE file for details.***

### Instructions

1. Replace `yourusername` in the clone URL with your actual GitHub username.
2. Save this content in a file named `README.md` at the root of your project directory.
3. You can customize the license section based on your project's licensing preferences.

This `README.md` provides a clear overview of the project, how to install it, use it, and test the WebSocket connection. Feel free to modify it further according to your needs!
