#!/bin/bash

set -e

args=("$@")
open_browser=false

# Handle SIGINT and SIGTERM
cleanup() {
    echo "Stopping server..."
    kill $UVICORN_PID 2>/dev/null || true
    exit
}
trap cleanup SIGINT SIGTERM

# Parse arguments: available options are "i" for installation, and "o" for opening the browser.
while ((${#args[@]})); do
    arg="${args[0]}"
    case "$arg" in
        o)
            open_browser=true
            ;;
        *)
            echo "Unknown argument: $arg"
            ;;
    esac
    args=("${args[@]:1}")
done


# start the FastAPI + check if uvicorn has active process
echo "Starting the FastAPI application..."
uvicorn app.main:app --reload 

if $open_browser; then
    echo "Opening the application in the web browser..."
    xdg-open http://127.0.0.1:8000
fi
