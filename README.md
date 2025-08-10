# React Ionic E‑Commerce App

**React Ionic E‑Commerce** is a mobile‑friendly shopping app built with **React**, **TypeScript**, and **Ionic Framework**.  
It showcases a basic e‑commerce workflow: browsing products, adding items to a cart or wishlist, checking out, and tracking past transactions.  
The app uses React Context to manage state and Ionic components to provide a native‑like user experience.

## Features

- **Home Page** – Product listings with image, title, and price.
- **Wishlist** – Save favourite items for later purchase.
- **Shopping Cart** – Add/remove items, update quantities, and view total price.
- **Checkout Flow** – Simulated checkout with order summary.
- **Order History** – View previous transactions.
- **Profile Page** – View basic profile details.
- **Responsive UI** – Built with Ionic components for mobile and desktop.

## Tech Stack

- **Frontend**: React + TypeScript
- **Framework**: Ionic React
- **State Management**: React Context API
- **Routing**: IonReactRouter
- **UI Components**: Ionic Framework (IonGrid, IonCard, IonButton, etc.)

## Project Structure

```
src/
 ├── components/        # Shared UI components
 ├── data/              # Context providers and static data
 ├── pages/             # App pages (Home, Wishlist, Cart, Profile, etc.)
 ├── App.tsx            # Main app entry
 ├── index.tsx          # React DOM render
```

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bellashrns/react-ionic_e-commerce.git
   ```
2. Navigate to the project folder:
   ```bash
   cd react-ionic_e-commerce
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
```bash
npm start
```
This will start the development server. Open `http://localhost:3000` in your browser to view the app.
