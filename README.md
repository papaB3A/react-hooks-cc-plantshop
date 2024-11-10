# Phase 2 Code Challenge: Plantsy
Welcome to **Plantsy** - the backend management system for the Plantsy plant store! This React application provides admin functionalities for managing plants available in the store, including adding, updating, searching, marking as sold out, and deleting plant items. It uses a JSON server as the backend to handle CRUD operations.

## Table of Contents
- [Features](#features)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support and contact details](#support-and-contact-details)
- [License](#license)

## Features

### Core Features
- **View All Plants**: Displays a list of all available plants.
- **Add New Plant**: Admins can add a new plant using a form, which includes fields for name, image URL, and price.
- **Mark as Sold Out**: Toggle the availability of plants (In Stock / Out of Stock).
- **Search**: Search plants by name to find specific items.
  
### Advanced Features
- **Update Plant Price**: Modify the price of any plant, with changes persisted in the backend.
- **Delete Plant**: Permanently remove plants from the store inventory.

## Project Setup

### Prerequisites
- [Node.js]
- [npm]

### Installation
1. Clone the repository:
Use the `git clone` command to download the repository from GitHub.

        git clone git@github.com:papaB3A/code-challenge-3.git
2. Install dependencies:

        npm install
3. Start the JSON server:

       npm run server

  * This will run the backend on http://localhost:6001/plants.
  * Verify the server is running by visiting http://localhost:6001/plants.
4. Start the React development server:

        npm start
   * Open the app in your browser at http://localhost:3000.

## Usage
1. View and Search: On the dashboard, you’ll see a list of all plants and a search bar. Use the search to filter plants by name.
2. Add New Plant: Fill out the form to add a new plant. The plant will display with a new ID and be added to the db.json file.
3. Toggle In/Out of Stock: Click on the In Stock button to mark a plant as Out of Stock and vice versa.
4. Update Price: Click Edit Price, input the new price, and confirm. Changes will be saved in the backend.
5. Delete Plant: Click Delete to remove a plant from inventory.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests to improve the project.

## Support and contact details
If you have questions, feel free to reach out:
* Email : akumubenedict@gmail.com
* [GitHub](https://github.com/papaB3A)

## [License](LICENSE)
MIT License
Copyright (c) 2024 Papa Akumu
