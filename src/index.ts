import express from "express";
import { Server } from "ws";
import http from "http";

const app = express();
const PORT = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server
const wss = new Server({ server });

wss.on("connection", (ws) => {
  console.log("New client connected");

  // Send a welcome message to the new client
  ws.send("Welcome to the WebSocket server!");

  // Handle messages from the client
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    // Echo the received message back to the client
    ws.send(`You said: ${message}`);
  });

  // Handle client disconnect
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Set up an Express route
app.get("/", (req, res) => {
  res.send("Hello World! This is the Express server.");
});

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
