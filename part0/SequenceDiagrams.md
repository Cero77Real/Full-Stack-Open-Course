# Exercice 0.4

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server

    Note over U,B: User writes a note and clicks "Save"

    U->>B: Submit form
    Note over B: Browser sends form data

    B->>S: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    S-->>B: 302 Redirect Location: https://studies.cs.helsinki.fi/exampleapp/notes
    Note over B: Browser follows the redirect automatically

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/notes
    S-->>B: Notes page HTML

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    S-->>B: CSS file

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    S-->>B: JavaScript file

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    S-->>B: Notes data (including the new one)

    Note over B: Browser renders the updated page
```

# Exercise 0.5

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Access /exampleapp/spa
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: JavaScript file 
    deactivate Server

    Note right of Browser: Browser starts executing spa.js<br/>and requests notes data from the server.

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: JSON with the notes
    deactivate Server

    Note right of Browser: Browser executes callback function,<br/>manipulates the DOM API, and renders<br/>the notes on the screen.
```

# Exercise 0.6

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Clicks the "Save" button
    Note right of Browser: JavaScript intercepts the submit event
    Note right of Browser: New note is added to the local list and redrawn on screen

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server

    Server-->>Browser: HTTP 201 Created
    deactivate Server
```