# React Console UI

![Your_Image_Here](https://uploads-ssl.webflow.com/63c6e835dc1c7763baa585f4/650bd176933cd3d346643790_react-console-ui.png)

## Description

`react-console-ui` is a simple console UI component for displaying logs in React applications. It handles various types of logs such as info, warning, error, and success, and offers features like expandable rows for duplicate logs.

## Installation

```bash
npm install react-console-ui
```

## How to Use

First, import ConsoleUI into your React component.

```javascript
import ConsoleUI from 'react-console-ui';
```

Then, use it in your component by passing an array of log objects to the logs prop.

```javascript
const logs = [
  { type: 'info', message: 'Info message', details: 'More details' },
  { type: 'warning', message: 'Warning message', details: 'Some warning details' },
  { type: 'error', message: 'Error occurred', details: 'Error details here' },
  { type: 'success', message: 'Success!', details: 'Action was successful' },
];

<ConsoleUI logs={logs} />
```

## Log Object
Each log object should contain:
* type: The type of log ("info", "warning", "error", "success").
* message: The main log message.
* details: Additional details for the log.

