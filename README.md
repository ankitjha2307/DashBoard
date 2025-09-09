# BharatCheck Compliance Dashboard

A React + Vite project for monitoring product compliance, featuring real-time dashboards, charts, and exportable reports.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Data](#data)
- [License](#license)

---

## Project Overview

**BharatCheck** is a compliance monitoring platform designed to help businesses and regulators ensure that products meet mandatory labeling and consumer safety requirements in India.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  App.css
  Components/
    Header.jsx
    Footer.jsx
    StatsCard.jsx
    ProductTable.jsx
    ComplianceChart.jsx
    FilterExport.jsx
  Pages/
    Login.jsx
    Dashboard.jsx
    About.jsx
  Data/
    productData.js
```

---

## Pages

### [`Login`](src/Pages/Login.jsx)

- **Path:** `/`
- **Description:** Login form for user authentication. On successful login, redirects to the dashboard.
- **Features:** Email/password fields, validation, uses [`Footer`](src/Components/Footer.jsx).

### [`Dashboard`](src/Pages/Dashboard.jsx)

- **Path:** `/dashboard`
- **Description:** Main dashboard displaying compliance statistics, charts, filters, and product table.
- **Features:** Uses [`StatsCard`](src/Components/StatsCard.jsx), [`ComplianceChart`](src/Components/ComplianceChart.jsx), [`FilterExport`](src/Components/FilterExport.jsx), [`ProductTable`](src/Components/ProductTable.jsx).

### [`About`](src/Pages/About.jsx)

- **Path:** `/about`
- **Description:** Information about BharatCheck, its mission, features, and contact details.

---

## Components

### [`Header`](src/Components/Header.jsx)

- **Description:** Top navigation bar with logo and links to About and Dashboard.

### [`Footer`](src/Components/Footer.jsx)

- **Description:** Footer with branding and navigation links.

### [`StatsCard`](src/Components/StatsCard.jsx)

- **Description:** Card component for displaying key statistics (total products, compliant products, compliance score).

### [`ComplianceChart`](src/Components/ComplianceChart.jsx)

- **Description:** Line chart visualizing compliance score trends over time (uses Chart.js).

### [`FilterExport`](src/Components/FilterExport.jsx)

- **Description:** Dropdown to filter products by category and button to export filtered data as CSV.

### [`ProductTable`](src/Components/ProductTable.jsx)

- **Description:** Table displaying product compliance details with visual indicators for each compliance field.

---

## Data

### [`productData`](src/Data/productData.js)

- **Description:** Array of product objects with compliance fields used throughout the dashboard.

---

## License

MIT
