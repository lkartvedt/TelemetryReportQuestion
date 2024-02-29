# Demo Starlink Telemetry Report - Possible Interview Solution

This program is a simple web application that allows users to view fake satellite data for fake launch dates. This project is split into two main parts: a static webpage for displaying the data and a Node.js API that serves the satellite data from a Python script.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/))
- [Python](https://www.python.org/) (required to run the backend script)

Ensure you have the above tools installed on your system before proceeding.

### Installation

First, clone the repository to your local machine and navigate to the correct directory:

```bash
git clone https://github.com/yourusername/StarlinkTelemetryReport.git
cd StarlinkTelemetryReport
```
For **macOS/Linux**, use the open command:
```bash
open StarlinkTelemetryReport.html
```
For **Windows**, use the start command:
```bash
start StarlinkTelemetryReport.html
```
Alternatively, manually open the StarlinkTelemetryReport.html file in your preferred web browser. 

Next, navigate to the correct directory and start the API:
```bash
cd starlink-report-api
node app.js
```

You should see a message indicating that the server is running:

```bash
Starlink Telemetry Report API running at http://localhost:${port}
```
To shut down the API, run the following command:
```bash
ctrl+c
```

### Exploring the Webpage
With the API server running, you can return to the Starlink Telemetry Report webpage in your browser. Here's how you can interact with it:

**Select a Launch Date:** Click on one of the launch dates listed on the page. The selected date will be highlighted.

**Run Report:** Click the "Run Report" button to fetch and display the satellite data for the selected launch date.

**Clear Report:** To clear the displayed data, click the "Clear Report" button.

**Experiment:** Feel free to select different launch dates and run reports to explore the satellite data provided by the API.

**Alerts:** You will see a browser alert if you attemt to run the report without a launch date selected or if the api isn't running.

### Troubleshooting
**API Not Responding:** Ensure the Node.js API server is running as described in the "Setting Up the API" section. If you encounter errors, check the terminal where node app.js was executed for error messages. You can also view logger information here even when the API is working. 

**Webpage Not Displaying Data:** Check your browser's developer console for any errors that might indicate issues with fetching the data.






