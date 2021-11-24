const authEndpoint = "https://accounts.spotify.com/authorize"; //spotify authentication request URL
const redirectUri = "http://localhost:3000/"; //application address (NEEDS TO BE CHANGED)
const clientId = "3e13f2e9e17d478e8228d3773e8ed170"; //Client ID (can be made more secure by putting into a .env file)

const scopes = [ //modify the scope that the client is allowed to access
    "streaming",
    "user-read-email",
    "user-read-private",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=3e13f2e9e17d478e8228d3773e8ed170&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
