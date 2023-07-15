# Puppeteer-Code-for-Token-Swap

This repository contains a Puppeteer code snippet that automates certain tasks on the website swap.defillama.com. The code launches a headful browser, navigates to the website, fills a form, selects tokens, and performs a swap. This README file provides a step-by-step procedure for running the code and understanding its functionality.

## Prerequisites

Before running the code, ensure you have the following prerequisites installed on your system:

1. [Node.js](https://nodejs.org) (version 14 or later)
2. [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone the repository to your local machine or download the code as a ZIP archive.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

npm install

## Usage

Follow the steps below to run the code:

1. Open the `index.ts` file in a text editor of your choice.
2. Optional: Modify the code according to your specific requirements. Refer to the comments in the code for guidance.
3. Save the file after making any changes.

## To execute the code, run the following command in the terminal:

node index.ts


This command will launch a headful browser, navigate to swap.defillama.com, fill the form, select tokens, perform a swap, and click on the second second option in the section "Select a route to perform a swap" and capture a screenshot.

## The code contains multiple steps, each serving a specific purpose. 

Here's a breakdown of what each step does:

1. Launches a headful browser using Puppeteer.
2. Opens a new page and navigates to https://swap.defillama.com.
3. Sets the viewport size to 1000x900 pixels.
4. Waits for a specific component on the page to load.
5. Fill the form by selecting "Arbitrum One" and entering the value "12" in the “You Sell” section.
6. Select the "USDC" token from a popup menu in the right side of the “You Sell” section.
7. Performs a swap using the "Swap" button.
8. Select the "WBTC" token from another popup menu.
9. Performs additional steps related to the "WBTC" token (specific actions may vary based on the website's UI).
10. Waits for a specified duration (12 seconds) to allow for the completion of an asynchronous process of clicking on the second second option in the section "Select a route to perform a swap".
11. Captures a screenshot of the page and saves it as "screenshot.png".
12. Keeps the browser window open indefinitely to prevent the program from terminating.

## Customization

You can customize the code according to your specific needs. Here are a few points to consider:

- Modify the URL in the `page.goto` function to navigate to a different website.
- Adjust the form filling and token selection steps based on the website's UI.
- Change the timeout values (`page.waitForTimeout`) as per your requirements.
- Explore Puppeteer's documentation (https://pptr.dev) to learn more about its capabilities and find additional customization options.

## Known Limitations

- This code assumes that the website's UI remains unchanged. If the website's structure or CSS classes change, some code modifications may be required.
- The code provided only covers a specific use case for swap.defillama.com. To adapt it for a different website or scenario, you may need to make significant modifications.

## Troubleshooting

If you encounter any issues while running the code, please ensure that:

- Your system meets the prerequisites mentioned earlier.
- You have a stable internet connection.
- The target website (swap.defillama.com) is accessible.
- Any firewalls or security software on your system are not blocking the Puppeteer process.

If problems persist, please refer to the Puppeteer documentation or seek assistance from the Puppeteer community.

Feel free to add or modify the README file as needed, based on your preferences and the specific requirements of your project.
