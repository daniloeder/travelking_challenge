# Travelking Challenge  

This is the solution to the Travelking front-end developer coding challenge. The goal was to create a simple webpage that:  
1. Fetches and displays availability and prices for a hotel in a calendar format for 6 months in advance.  
2. Allows the user to select a desired stay and fetches available rooms based on the selection.  

## Features  
- **Dynamic Calendar**: Displays availability and prices with visual cues for price categories (low, medium, high).  
- **Interactive Booking**: Users can select travel dates and group sizes (adults and children).  
- **Room Selection**: Fetches and displays available rooms based on the selected dates.  
- **Responsive Design**: Optimized for usability across devices.  

## Tools and Libraries Used  
- **Vanilla JavaScript**: Implements logic for API communication, calendar interaction, and data visualization.  
- **HTML/CSS**: Creates the layout and styles for the webpage.  

## How It Works  
1. **Button Interaction**: Clicking on the "Show Availability" button fetches availability data from the API.  
2. **Calendar Display**: Displays a 6-month calendar with color-coded price indicators.  
3. **Date Selection**: Users choose dates and travel group size, then fetch room details.  
4. **Room Details**: Available rooms are displayed based on the chosen dates.  

## API Endpoints Used  
1. **Check Availability**: Fetches availability and pricing details for 6 months in advance.  
   - Endpoint: `https://api.travelcircus.net/hotels/15823/checkins?...`  
2. **Fetch Rooms**: Retrieves available rooms for selected dates.  
   - Endpoint: `https://api.travelcircus.net/hotels/15823/quotes?...`  

## Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/daniloeder/travelking_challenge.git
