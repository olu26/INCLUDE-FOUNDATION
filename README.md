# INCLUDE Foundation Web Application

This is a React and TypeScript based web application for the INCLUDE Foundation. The app showcases various programs, challenges, team members, and other foundation-related content with a modern and responsive UI built using Tailwind CSS.

## Features

- Program cards with individual links and descriptions
- Responsive design with Tailwind CSS
- Reusable UI components for buttons, cards, navigation, and more
- Icon integration using lucide-react
- Multiple pages including Home, About, Challenges, Programs, and Contact
- Accessible and interactive UI elements

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (build tool)
- lucide-react (icons)
- Radix UI (for accessible UI primitives)
- class-variance-authority (for styling variants)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd INCLUDE-FOUNDATION
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- Navigate through the different pages using the navbar.
- Explore programs, challenges, and team members.
- Click on "Learn More" buttons on program cards to visit individual program links.

## Folder Structure

```
src/
  components/       # Reusable UI components
  components/ui/    # UI primitives and styled components
  hooks/            # Custom React hooks
  lib/              # Utility functions
  pages/            # Page components for routing
  App.tsx           # Main app component
  main.tsx          # Entry point
public/             # Static assets like images and icons
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.
