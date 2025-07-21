#!/bin/bash

# Kill server running on port 3001
SERVER_PID=$(lsof -ti:3001)
if [ -n "$SERVER_PID" ]; then
  echo "Killing server on port 3001 (PID: $SERVER_PID)"
  kill -9 $SERVER_PID
else
  echo "No server running on port 3001"
fi

# Kill client running on port 5173
CLIENT_PID=$(lsof -ti:5173)
if [ -n "$CLIENT_PID" ]; then
  echo "Killing client on port 5173 (PID: $CLIENT_PID)"
  kill -9 $CLIENT_PID
else
  echo "No client running on port 5173"
fi

# Stop Docker containers
echo "Running docker-compose down..."
docker-compose down
