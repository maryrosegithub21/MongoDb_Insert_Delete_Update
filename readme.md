# MongoDb Insert Delete Update Backend CLI

This project provides a Command Line Interface (CLI) for managing users and auction data. It leverages Node.js, Commander.js for CLI command handling, Inquirer.js for interactive prompts, and Mongoose for MongoDB interactions.

## Prerequisites

- Node.js (>= 12.x)
- MongoDB (>= 4.x)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/l5-mission-five-backend.git
    cd l5-mission-five-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your MongoDB connection:
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string:
      ```env
      MONGODB_URI=mongodb://localhost:27017/your-database-name
      ```

## Usage

The CLI provides several commands for managing users and auction data. Below are the available commands:

### User Commands

#### Add a New User

```bash
node cli.js add
Copy
Insert

This command will prompt you to enter the user's name and email, then save the new user to the database.

List All Users
node cli.js list
Copy
Insert

This command will list all users in the database.

Remove a User by Email
node cli.js remove <email>
Copy
Insert

This command will remove a user from the database based on the provided email.

Auction Commands
Seed Auction Data
node cli.js seed-auctions
Copy
Insert

This command will seed the database with predefined auction data.

Update an Auction Item by ID
node cli.js update-auction <id>
Copy
Insert

This command will prompt you to update the details of an auction item based on the provided ID.

Delete All Auction Data
node cli.js delete-auctions
Copy
Insert

This command will delete all auction data from the database.

Project Structure
cli.js: Main CLI script that defines various commands.
db/db.js: Database connection setup.
models/User.js: Mongoose model for User.
models/Auction.js: Mongoose model for Auction.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or issues, please open an issue in this repository or contact the maintainer at [maryroseantoniowork21@gmail.com].

## Backup and Restore

### Backup

To create a backup of the MongoDB database, run the following command:

```sh
mongodump --uri="mongodb://localhost:27017/TradeMe" --out="C:\\Users\\MaryRoseAntonio\\Desktop\\Mission_5\\L5-mission-five-backend"

Restore
To restore the MongoDB database from the backup files, run the following command:

mongorestore --uri="mongodb://localhost:27017/TradeMe" "C:\\Users\\MaryRose