<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
    <title>Simplicity OS (sOS)</title>
    <link rel="stylesheet" href="css/desktop.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Desktop Environment -->
    <div id="desktop">
        <!-- Taskbar -->
        <div id="taskbar">
            <div id="start-menu">
                <button id="start-button">
                    <i class="fas fa-th-large"></i> sOS
                </button>
                <div id="start-menu-content" class="hidden">
                    <div class="menu-item" data-app="terminal">
                        <i class="fas fa-terminal"></i> Terminal
                    </div>
                    <div class="menu-item" data-app="file-explorer">
                        <i class="fas fa-folder"></i> File Explorer
                    </div>
                    <div class="menu-item" data-app="ai-assistant">
                        <i class="fas fa-robot"></i> AI Assistant
                    </div>
                    <div class="menu-item" data-app="browser">
                        <i class="fas fa-globe"></i> Web Browser
                    </div>
                    <div class="menu-item" data-app="system-info">
                        <i class="fas fa-info-circle"></i> System Info
                    </div>
                </div>
            </div>
            <div id="taskbar-items"></div>
            <div id="system-tray">
                <span id="clock"></span>
            </div>
        </div>

        <!-- Desktop Icons -->
        <div id="desktop-icons">
            <div class="desktop-icon" data-app="file-explorer">
                <i class="fas fa-folder fa-2x"></i>
                <span>Files</span>
            </div>
            <div class="desktop-icon" data-app="terminal">
                <i class="fas fa-terminal fa-2x"></i>
                <span>Terminal</span>
            </div>
            <div class="desktop-icon" data-app="ai-assistant">
                <i class="fas fa-robot fa-2x"></i>
                <span>AI Guide</span>
            </div>
            <div class="desktop-icon" data-app="browser">
                <i class="fas fa-globe fa-2x"></i>
                <span>Browser</span>
            </div>
        </div>

        <!-- Windows Container -->
        <div id="windows-container"></div>
    </div>

    <!-- Window Templates -->
    <template id="window-template">
        <div class="window">
            <div class="window-header">
                <div class="window-title"></div>
                <div class="window-controls">
                    <button class="minimize-btn"><i class="fas fa-minus"></i></button>
                    <button class="maximize-btn"><i class="fas fa-square"></i></button>
                    <button class="close-btn"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="window-content"></div>
        </div>
    </template>

    <!-- Terminal Template -->
    <template id="terminal-template">
        <div class="terminal">
            <div class="terminal-header">
                <span>sOS Terminal v1.0</span>
            </div>
            <div class="terminal-output"></div>
            <div class="terminal-input-line">
                <span class="terminal-prompt">sOS@user:~$ </span>
                <input type="text" class="terminal-input" autocomplete="off" spellcheck="false">
            </div>
        </div>
    </template>

    <!-- File Explorer Template -->
    <template id="file-explorer-template">
        <div class="file-explorer">
            <div class="file-explorer-header">
                <div class="address-bar">
                    <button class="back-btn"><i class="fas fa-arrow-left"></i></button>
                    <button class="forward-btn"><i class="fas fa-arrow-right"></i></button>
                    <button class="up-btn"><i class="fas fa-arrow-up"></i></button>
                    <input type="text" class="address-input" value="/">
                    <button class="refresh-btn"><i class="fas fa-sync"></i></button>
                </div>
            </div>
            <div class="file-explorer-content">
                <div class="file-list"></div>
            </div>
        </div>
    </template>

    <!-- AI Assistant Template -->
    <template id="ai-assistant-template">
        <div class="ai-assistant">
            <div class="ai-header">
                <div class="ai-header-info">
                    <i class="fas fa-robot"></i>
                    <div>
                        <span>sOS AI Assistant</span>
                        <small>Non-restrictive guidance system</small>
                    </div>
                </div>
                <button class="ai-settings-btn" title="Customize AI Personality">
                    <i class="fas fa-cog"></i>
                </button>
            </div>
            <div class="ai-chat">
                <div class="ai-messages"></div>
                <div class="ai-input-container">
                    <input type="text" class="ai-input" placeholder="Ask for guidance or describe what you want to do...">
                    <button class="ai-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>

            <!-- Personality Editor Modal -->
            <div class="personality-modal" style="display: none;">
                <div class="personality-modal-content">
                    <div class="personality-modal-header">
                        <h3><i class="fas fa-brain"></i> Customize AI Personality</h3>
                        <button class="personality-close-btn"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="personality-modal-body">
                        <div class="personality-section">
                            <label for="personality-name">Personality Name:</label>
                            <input type="text" id="personality-name" class="personality-input" placeholder="e.g., Helpful Assistant, Strict Advisor, etc.">
                        </div>

                        <div class="personality-section">
                            <label for="personality-tone">Response Tone:</label>
                            <select id="personality-tone" class="personality-select">
                                <option value="friendly">Friendly & Supportive</option>
                                <option value="professional">Professional & Formal</option>
                                <option value="casual">Casual & Relaxed</option>
                                <option value="serious">Serious & Direct</option>
                                <option value="humorous">Humorous & Light</option>
                            </select>
                        </div>

                        <div class="personality-section">
                            <label for="personality-strictness">Safety Strictness:</label>
                            <select id="personality-strictness" class="personality-select">
                                <option value="minimal">Minimal warnings (current default)</option>
                                <option value="moderate">Moderate warnings</option>
                                <option value="strict">Strict warnings</option>
                                <option value="paranoid">Maximum warnings</option>
                            </select>
                        </div>

                        <div class="personality-section">
                            <label for="personality-expertise">Expertise Level:</label>
                            <select id="personality-expertise" class="personality-select">
                                <option value="beginner">Beginner-friendly explanations</option>
                                <option value="intermediate">Intermediate user</option>
                                <option value="advanced">Advanced user</option>
                                <option value="expert">Expert level</option>
                            </select>
                        </div>

                        <div class="personality-section">
                            <label for="personality-custom">Custom Instructions:</label>
                            <textarea id="personality-custom" class="personality-textarea" 
                                placeholder="Add any specific instructions for how the AI should behave..."
                                rows="4"></textarea>
                        </div>

                        <div class="personality-presets">
                            <h4>Quick Presets:</h4>
                            <div class="preset-buttons">
                                <button class="preset-btn" data-preset="default">Default sOS</button>
                                <button class="preset-btn" data-preset="cautious">Cautious Advisor</button>
                                <button class="preset-btn" data-preset="minimal">Minimal Guidance</button>
                                <button class="preset-btn" data-preset="teacher">Teaching Mode</button>
                            </div>
                        </div>
                    </div>
                    <div class="personality-modal-footer">
                        <button class="personality-reset-btn">Reset to Default</button>
                        <div>
                            <button class="personality-cancel-btn">Cancel</button>
                            <button class="personality-save-btn">Save Personality</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <!-- Browser Template -->
    <template id="browser-template">
        <div class="browser-app">
            <div class="browser-toolbar">
                <div class="browser-nav">
                    <button class="nav-btn back-btn" title="Back"><i class="fas fa-arrow-left"></i></button>
                    <button class="nav-btn forward-btn" title="Forward"><i class="fas fa-arrow-right"></i></button>
                    <button class="nav-btn refresh-btn" title="Refresh"><i class="fas fa-redo"></i></button>
                    <button class="nav-btn home-btn" title="Home"><i class="fas fa-home"></i></button>
                </div>
                <div class="browser-address-bar">
                    <div class="address-container">
                        <i class="fas fa-lock secure-icon"></i>
                        <input type="text" class="address-input" placeholder="Enter URL or search term..." value="https://example.com">
                        <button class="go-btn"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="browser-menu">
                    <button class="menu-btn bookmark-btn" title="Bookmark"><i class="fas fa-star"></i></button>
                    <button class="menu-btn settings-btn" title="Settings"><i class="fas fa-ellipsis-v"></i></button>
                </div>
            </div>
            <div class="browser-bookmarks">
                <div class="bookmark-item" data-url="https://example.com">
                    <i class="fas fa-globe"></i> Example.com
                </div>
                <div class="bookmark-item" data-url="https://httpbin.org">
                    <i class="fas fa-code"></i> HTTPBin
                </div>
                <div class="bookmark-item" data-url="https://jsonplaceholder.typicode.com">
                    <i class="fas fa-database"></i> JSONPlaceholder
                </div>
                <div class="bookmark-item" data-url="https://picsum.photos">
                    <i class="fas fa-image"></i> Lorem Picsum
                </div>
                <div class="bookmark-item" data-url="https://docs.replit.com">
                    <i class="fas fa-book"></i> Replit Docs
                </div>
            </div>
            <div class="browser-content">
                <iframe class="browser-iframe" src="https://example.com" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"></iframe>
                <div class="browser-loading" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    </template>

    <script src="js/filesystem.js"></script>
    <script src="js/windowmanager.js"></script>
    <script src="js/ai-assistant.js"></script>
    <script src="js/terminal.js"></script>
    <script src="js/browser.js"></script>
    <script src="js/desktop.js"></script>
</body>
</html>
