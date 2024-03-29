# Polling-System-API

Task: Need to create an API where anyone can create questions with options and also add votes to it

## Installation

Install my-project with npm

```bash
  git clone https://github.com/Gursimran-chouhan88/Polling-System-API.git
  npm install
  cd Polling-System-API
```
    
## Running Tests

To run tests, run the following command

```bash
  npm start
```


## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Required Routes
- /questions/create (To create a question)
- /questions/options/:id/create (To add options to a specific question)
- /questions/delete/:id (To delete a question)
- /options/delete/:id/ (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/view/:id (To view a question and it’s options)

## Folder Structure
```
CSV_Upload/
|── |config/
│   |      ├── mongoose.js
|   |
├── routes/
│   |
|   ├── api/
|   |     |──v1
|   |
│   ├── index.js
|   |
├── controllers/
│   ├── OptionsController.js
│   ├── QuestionsController.js
|   |
├── models/
│   ├── options.js
│   ├── questions.js
|   |
├── package-lock.json
├── package.json
├── README.md
