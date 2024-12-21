# Online Store with React

## Project Description

This project is an online store developed using React and functional components. It provides users with the ability to filter and sort products, ensuring a convenient and interactive shopping experience.

## Features

- **Product Filtering**:
   - **By Substring**: Users can enter text to filter products by names and descriptions. The filtering is case-insensitive.
   - **By Color**: Users can select multiple colors through checkboxes. Products are displayed if at least one of the selected colors is available.
   - **By Price**: Filtering by price range using two input fields.
   - The application updates the product list in real-time, without the need to click buttons to apply filters.
   - If no products match the criteria, a message is displayed: "No results found for your query."

- **Product Sorting**:
  - Ability to sort by price (ascending and descending) and by rating (descending).
  - Only one sorting option can be active at a time, and it is highlighted with color.

## Technologies

- **React**: Using hooks such as `useState`, `useMemo`, `useCallback`, and `useEffect`.
- **Chance.js**: For generating random product data.
- **UUID**: For creating unique product identifiers.
- **CSS Modules**: For styling the application.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ulalie/lamoda-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd lamoda
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the project in development mode:
   ```bash
   npm run dev
   ```

## Project Structure

The project is organized into components, making it easy to maintain and extend. Key components include:

- `ProductList`: Displays the list of products with filtering and sorting options.
- `ProductCard`: Displays an individual product.
- `Filters`: A component for managing filters.
- `SortOptions`: A component for selecting the sorting method.

## Requirements

- The application is responsive and displays correctly on various devices.
- Only functional components are used; class components are not employed.
