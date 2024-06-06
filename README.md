# SpotiFeel - Emotion-Based Music Discovery

SpotiFeel is a React web application that helps users discover new music based on emotional analysis. Users can input their favorite songs to receive personalized recommendations that match the most common emotion detected from their selections, or search the music database by specific emotions.

**🎵 [Live Demo](https://spotifeel-57b89.web.app/)**

*This is a cleaned-up version of a project I worked on in June 2024*

## Key Features

- **Emotion-Based Recommendations**: Input up to 5 songs and receive recommendations based on the most common emotion detected
- **Emotion Search**: Browse and search the music database by specific emotions (Happy, Sad, Energetic, Calm, Romantic, etc.)
- **User Authentication**: Sign up and log in functionality powered by Firebase
- **Responsive Design**: Clean, modern interface with intuitive navigation
- **Music Database**: Extensive collection of songs with emotion classifications and popularity ratings

## Technologies Used

- **Frontend**: React 18, React Router DOM
- **Backend**: Firebase (Authentication & Realtime Database)
- **Styling**: CSS3 with custom stylesheets
- **Build Tools**: Create React App
- **Deployment**: Firebase Hosting
- **Dependencies**: Axios for HTTP requests, Material Symbols for icons

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohansimha02/spotifeel.git
   cd spotifeel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - The project includes Firebase configuration for authentication and database
   - Ensure you have the necessary Firebase credentials set up

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## Usage Examples

### Getting Emotion-Based Recommendations
1. Navigate to the Home page
2. Enter up to 5 song names in the input field
3. Click "Add Song" for each entry
4. Once you have 5 songs, click "Get Recommendations"
5. View your personalized recommendations based on the detected emotions

### Searching by Emotion
1. Go to the Search page
2. Type an emotion (e.g., "Happy", "Sad", "Energetic") in the search field
3. Browse the filtered results in the table
4. Sort results by song name or artist name using the dropdown

### User Profile
1. Visit the Profile page to create an account or log in
2. Use email and password authentication
3. Access personalized features once logged in

## Project Structure

```
src/
├── App.js          # Main application component with routing
├── home.js         # Home page with recommendation engine
├── search.js       # Search functionality by emotion
├── profile.js      # User authentication and profile
├── songs.js        # Music database with emotion classifications
├── firebase.js     # Firebase configuration and exports
└── index.css       # Global styles and component styling
```

## Available Emotions

The application recognizes the following emotion categories:
- Happy
- Sad
- Energetic
- Calm
- Romantic
- Mellow
- Relaxed
- Depressed

## Development

This project was bootstrapped with Create React App. Available scripts:
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Live Application

Visit the deployed application at: **https://spotifeel-57b89.web.app/**