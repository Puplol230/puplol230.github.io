# Overview

Simplicity OS (sOS) is a web-based operating system simulation that provides a desktop environment with familiar OS features like a taskbar, start menu, windows, file system, terminal, and web browser. The system emphasizes user autonomy with an AI assistant that provides guidance and warnings but never restricts user actions. Built as a client-side application with Express.js backend support for AI integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Desktop Environment**: Pure JavaScript class-based architecture with modular components
- **Window Management**: Custom window manager handling creation, focus, minimize/maximize operations with drag-and-drop support
- **File System**: Browser localStorage-based virtual file system with hierarchical directory structure
- **Terminal Emulator**: Command-line interface with history, auto-completion, and file system navigation
- **Component Structure**: Separate classes for DesktopManager, WindowManager, FileSystem, Terminal, and AIAssistant

## Backend Architecture
- **Server Framework**: Express.js with static file serving and JSON middleware
- **API Design**: RESTful endpoints under `/api/ai/` namespace
- **Request Handling**: Standard Express routing with error handling and CORS considerations

## Data Storage Solutions
- **Local Storage**: Browser localStorage for persistent file system state
- **Session Management**: In-memory conversation history for AI chat sessions
- **File System Schema**: JSON-based hierarchical structure with file/directory types and content storage

## Authentication and Authorization
- **Security Model**: No authentication layer - open system emphasizing user freedom
- **Permission System**: AI provides warnings but enforces no restrictions on user actions
- **Access Control**: Full user autonomy over all system operations

## External Dependencies
- **UI Framework**: Vanilla JavaScript with Font Awesome icons
- **Styling**: Custom CSS with CSS Grid/Flexbox layouts and backdrop filters
- **Module Loading**: ES6-style class imports without bundlers

# External Dependencies

## Third-Party Services
- **OpenAI API**: GPT-4o model integration for AI assistant functionality
- **Font Awesome**: Icon library via CDN for UI components

## Development Dependencies
- **Express.js**: Web server framework for API routing and static file serving
- **OpenAI SDK**: Official Node.js client library for OpenAI API integration

## Runtime Requirements
- **Node.js Environment**: Server-side JavaScript execution
- **Modern Browser**: Client-side support for ES6 classes, localStorage, and CSS backdrop filters
- **API Key Management**: Environment variable configuration for OpenAI API access