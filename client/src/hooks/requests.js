const API_URL = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log('There was a problem with the fetch operation: ' + error.message);
  }
}
//Load launches,  sort by flight number , and return as JSON
async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const fetchedLaunches = await response.json();
    return fetchedLaunches.sort((a, b) => {
      return a.flightNumber - b.flightNumber;
    });
  } catch (error) {
    console.log('There was a problem with the fetch operation: ' + error.message);
  }
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};