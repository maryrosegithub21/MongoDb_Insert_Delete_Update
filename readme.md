# MongoDb Insert Delete Update Backend CLI

This project provides a Command Line Interface (CLI) for managing users and auction data. It leverages Node.js, Commander.js for CLI command handling, Inquirer.js for interactive prompts, and Mongoose for MongoDB interactions.

## Prerequisites

- Node.js (>= 12.x)
- MongoDB (>= 4.x)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/l5-mission-five-backend.git
    cd <path>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your MongoDB connection:
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string:
      ```env
      MONGODB_URI=mongodb://localhost:27017/TradeMe
      ```

## Usage

The CLI provides several commands for managing users and auction data. Below are the available commands:

### User Commands

#### Add a New User

```bash
node cli.js add

This command will prompt you to enter the user's name and email, then save the new user to the database.

List All Users
node cli.js list


This command will list all users in the database.

Remove a User by Email
node cli.js remove <email>

This command will remove a user from the database based on the provided email.

Auction Commands
Seed Auction Data
node cli.js seed-auctions

This command will seed the database with predefined auction data.

Update an Auction Item by ID
node cli.js update-auction <id>

This command will prompt you to update the details of an auction item based on the provided ID.

Delete All Auction Data
node cli.js delete-auctions

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


Contact
For any questions or issues, please open an issue in this repository or contact the maintainer at [maryroseantoniowork21@gmail.com].

## Backup and Restore

### Backup

To create a backup of the MongoDB database, run the following command:

```sh
mongodump --uri="<path of mongodb>" --out="<path where project app located>"

Restore
To restore the MongoDB database from the backup files, run the following command:

mongorestore --uri="<path of mongodb>" "<path where project app located>"