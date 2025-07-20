### SMART GOAL PLANNER

A simple and user-friendly React app for planning, tracking, and managing financial goals. Users can add, update, and deposit towards their goals. Data is managed using a mock REST API via JSON Server

### FEATURES

-Add new financial goals
-view and track goals
-Make deposits to goals
-Json server backend for saving goal data
-styled using CSS

### Built with
 -React

 -React Router

 -JSON Server

 -JavaScript (ES6+)

 -HTML & CSS

 ### Getting started
 ### 1. Install dependencies
  -npm install
### 2. Staart JSON server
  -Make sure you have db.json file in the root folder:
  ### 3.Run JSON server
  -npx json-server --watch db.json --port 3001
  ### 4.Start the react app
    -npm run dev

### Sample Json data(db.json)
  -{
  "goals": [
    {
      "id": 1,
      "name": "Save for a Laptop",
      "targetAmount": 600,
      "currentAmount": 200,
      "category": "Technology",
      "deadline": "2025-12-01",
      "createdAt": "2025-07-20"
    }
  ]
}
### License
  This project is open-source and available under the MIT License.

  ### Author

  Wambui Karanja, 2025
