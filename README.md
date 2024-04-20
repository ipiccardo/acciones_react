Stock Market Application

This is a stock market application where users can filter stocks by name or symbol and view detailed information about individual stocks, including their historical data and real-time price changes.

Technologies Used
HTML: For the structure of the web pages.
CSS: For styling the user interface.
JavaScript: For client-side scripting.
React: A JavaScript library for building user interfaces.
Next.js: A React framework for building server-side rendered applications.
TypeScript: A superset of JavaScript that adds static typing.
Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
Highcharts: A JavaScript library for creating interactive charts.
API Integration
The application fetches stock data from the Twelve Data API. It starts by calling the filtered URL provided in the challenge: https://api.twelvedata.com/stocks?source=docs&exchange=NYSE.

"Users can change the filtered URL by updating the defaultUrl constant in the codebase."

const defaultUrl = "https://api.twelvedata.com/stocks?source=docs";
const startfilteredUrl = "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE";
const url = startfilteredUrl;

const api = {
list: async (): Promise<Share[]> => {
const data = await fetch(url)
.then((res) => res.json())
.then((newData) => newData);
if (!(url.length > 43)) {
shares.push(...data.data);
}
return data;
},
};

Application Features:
Stock Filtering: Users can filter stocks by name or symbol.
Stock Detail Page: Users can view detailed information about individual stocks, including their historical data and real-time price changes.

Installation
To run the application locally, follow these steps:

Clone the repository:
bash

git clone <repository-url>

Install dependencies:
npm install

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000

Future Improvements
Implement user authentication and personalized stock watchlists.
Add more advanced filtering options for stocks.
Enhance the user interface with additional features and interactive components.
Contributors
Iván Piccardo

Feel free to contribute to the project by submitting pull requests or reporting issues!

License
This project is licensed under the MIT License.
