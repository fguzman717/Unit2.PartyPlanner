const cohortID = "2406-FTB-MT-WEB-PT";
const webURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${cohortID}`;

console.log(webURL);

// A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
// This will GET all the information in the events page
async function getAllEvents() {
  try {
    const response = await fetch(`${webURL}/events`);
    const result = await response.json();
  } catch (error) {
    console.log("There was an error fetching all events", error);
  }
}

getAllEvents();

// There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.

// Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
