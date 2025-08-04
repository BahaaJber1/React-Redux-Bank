# React-Redux Bank

A simple banking app built with React and Redux. This project demonstrates how to manage global state using Redux, including customer information and account operations. Users can create a customer profile, deposit and withdraw money, request loans, and view their account balance.

<img width="1911" height="896" alt="image" src="https://github.com/user-attachments/assets/ba2cc48f-1c35-4af6-a9dd-a27ca8b0ead0" />

<img width="1913" height="890" alt="image" src="https://github.com/user-attachments/assets/00c71882-218c-468e-a848-8e4c6e6be367" />

<img width="1916" height="893" alt="image" src="https://github.com/user-attachments/assets/a8274526-edd0-4ddb-9cba-f3b697583785" />


<img width="1916" height="891" alt="image" src="https://github.com/user-attachments/assets/e5180cf9-1c2c-4634-917a-e5d48838e3db" />



---

## Features

- **Customer Creation:** Enter your full name to create a customer profile.
- **Account Operations:** Deposit, withdraw, and request loans.
- **Balance Display:** View your current account balance.
- **Conditional UI:** The app displays different components based on whether a customer profile exists.
- **Redux State Management:** All customer and account data is managed globally using Redux.
- **Modular Components:** Clean separation of features into customer and account modules.

---

## Technologies Used

- React (functional components, hooks)
- Redux Toolkit for state management
- React-Redux for connecting components to the store
- CSS for basic styling

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:

   ```bash
   cd 15 redux-intro
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

- `src/App.jsx` – Main application component and UI logic.
- `src/featuers/customers/CreateCustomer.jsx` – Form for creating a customer profile.
- `src/featuers/customers/Customer.jsx` – Displays customer information.
- `src/featuers/accounts/AccountOperations.jsx` – Deposit, withdraw, and loan operations.
- `src/featuers/accounts/BalanceDisplay.jsx` – Shows current account balance.
- `src/store.js` – Redux store configuration.
- `src/featuers/` – Folder containing all feature modules.

---

## Customization

- **Add More Operations:** Extend `AccountOperations` to support more banking features.
- **Styling:** Update or add CSS for a personalized look.
- **Validation:** Add input validation for customer creation and account operations.
- **Persistence:** Integrate localStorage or a backend to persist account data.

---

## How It Works

- The app uses Redux to manage global state for customer and account information.
- When the app loads, it checks if a customer profile exists. If not, it shows the customer creation form.
- Once a customer is created, the app displays account operations and balance.
- All actions (deposit, withdraw, loan) update the Redux store and UI in real time.

---

## License

This project is for educational purposes only.

---
