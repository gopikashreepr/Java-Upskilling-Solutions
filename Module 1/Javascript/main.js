const MOCK_API = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

// Log a welcome message to the browser console
console.log("Welcome to the Community Portal");

// Alert user when the page is fully loaded
window.onload = function() {
    alert("Page is fully loaded!");
    const promoVideo = document.getElementById("promoVideo");
  if (promoVideo) {
    promoVideo.oncanplay = function () {
      console.log("Video can play now");
      document.getElementById("videoMessage").textContent = "Video is ready to play!";
    };
  }
  renderEvents(); 
};

// Using const for event name and date (unchanging values)
const eventName = "Community Clean-Up Day";
const eventDate = "2025-07-20";

// Using let for seats because it can change (mutable)
let availableSeats = 50;

// Concatenate event info using template literals
const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Available: ${availableSeats}`;

console.log(eventInfo);

// Simulate a registration - decrement seats by 1
function registerSeat() {
    if (availableSeats > 0) {
        availableSeats--; // decrement seats
        console.log(`Registration successful! Seats left: ${availableSeats}`);
    } else {
        console.log("Sorry, no seats available.");
    }
}

// window.videoReady = function() {
//   console.log("Video can play now");
// };
function renderEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container) return; // fail silently if container missing

  container.innerHTML = ""; // Clear previous content

  // You can choose which events to display here, e.g. upcoming with seats
  const filteredEvents = events.filter(e => isUpcoming(e.date) && e.availableSeats > 0);

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    const title = document.createElement("h3");
    title.textContent = event.name;
    card.appendChild(title);

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;
    card.appendChild(date);

    const seats = document.createElement("p");
    seats.textContent = `Seats Available: ${event.availableSeats}`;
    card.appendChild(seats);

    const btn = document.createElement("button");
    btn.textContent = event.availableSeats > 0 ? "Register" : "Full";
    btn.disabled = event.availableSeats <= 0;
    btn.onclick = () => {
      registerForEvent(event.name);
      renderEvents();  // update UI after registration
    };
    card.appendChild(btn);

    container.appendChild(card);
  });

  if (filteredEvents.length === 0) {
    container.textContent = "No upcoming events with seats available.";
  }
}

// Test registering 3 attendees
registerSeat();
registerSeat();
registerSeat();

// Sample events data
const events = [
  { name: "Tree Plantation Drive", date: "2025-07-20", availableSeats: 50 },
  { name: "Free Health Checkup Camp", date: "2025-08-15", availableSeats: 30 }, // past or full
  { name: "Community Food Drive", date: "2025-08-05", availableSeats: 10 },
  { name: "Yoga Day Celebration", date: "2025-06-10", availableSeats: 25 }, // full
  { name: "Independence Day Function", date: "2025-09-01", availableSeats: 15 },
  { name: "Children's Art Contest", date: "2025-09-01", availableSeats: 15 }
  
];

// Function to check if event is upcoming (date >= today)
function isUpcoming(eventDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to 00:00:00

  const eventDt = new Date(eventDate);
  eventDt.setHours(0, 0, 0, 0); // Also set time to 00:00:00

  return eventDt >= today;
}

// Display only upcoming events with available seats
function displayValidEvents() {
  console.log("Upcoming Events with Seats Available:");
  events.forEach(event => {
    if (isUpcoming(event.date) && event.availableSeats > 0) {
      console.log(`- ${event.name} on ${event.date} | Seats: ${event.availableSeats}`);
    }
  });
}

// Registration function with try-catch error handling
function registerForEvent(eventName) {
  try {
    const event = events.find(e => e.name === eventName);

    if (!event) {
      throw new Error("Event not found.");
    }

    if (!isUpcoming(event.date)) {
      throw new Error("Cannot register for past events.");
    }

    if (event.availableSeats <= 0) {
      throw new Error("Sorry, no seats available for this event.");
    }

    event.availableSeats--;
    console.log(`Successfully registered for ${event.name}. Seats left: ${event.availableSeats}`);
        } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

function handleSubmit(e) {
  e.preventDefault(); // prevent page reload

  const selectedEventType = document.getElementById("eventType").value;
  let eventName = "";

    switch (selectedEventType) {
    case "health":
      eventName = "Free Health Checkup Camp";
      break;
    case "environment":
      eventName = "Tree Plantation Drive";
      break;
    case "festival":
      eventName = "Independence Day Function"; // or any festival event from your array
      break;
    default:
      eventName = "";
  }

  if (eventName) {
    registerForEvent(eventName);
    document.getElementById("confirmationMsg").textContent = `Successfully registered for ${eventName}!`;
  } else {
    document.getElementById("confirmationMsg").textContent = "Please select a valid event type.";
  }
}

// Event Store (acts like a database)
const eventStore = [];

// Closure to track registration count by category
function createCategoryTracker() {
    const categoryCount = {}; // private variable

    return function (category) {
        if (!categoryCount[category]) {
            categoryCount[category] = 1;
        } else {
            categoryCount[category]++;
        }
        console.log(`Total registrations in ${category}: ${categoryCount[category]}`);
    };
}

// Closure function
const trackRegistration = createCategoryTracker();

// 1. Add new event
function addEvent(name, category, date, seats) {
    const newEvent = { name, category, date, availableSeats: seats, registrations: [] };
    eventStore.push(newEvent);
    console.log(`Event '${name}' added under '${category}' category.`);
}

// 2. Register user to an event
function registerUser(eventName, userName) {
    const event = eventStore.find(e => e.name === eventName);

    if (!event) {
        console.log(`Event '${eventName}' not found.`);
        return;
    }

    if (event.availableSeats > 0) {
        event.availableSeats--;
        event.registrations.push(userName);
        console.log(`User '${userName}' registered for '${event.name}'.`);
        trackRegistration(event.category); // closure tracks registration per category
    } else {
        console.log(`No seats left in '${event.name}'.`);
    }
}

// 3. Filter events by category (uses callback for dynamic filters)
function filterEventsByCategory(category, callback) {
    const results = eventStore.filter(event => event.category === category && callback(event));
    console.log(`Filtered Events in '${category}':`);
    results.forEach(e => {
        console.log(`- ${e.name} | Seats: ${e.availableSeats} | Date: ${e.date}`);
    });
}

// ==========================
// ✅ Test the functionality
// ==========================

// Add Events
addEvent("Yoga Day Celebration", "Health", "2025-06-10", 20);
addEvent("Tree Plantation Drive", "Environment", "2025-07-05", 30);
addEvent("Free Health Checkup Camp", "Health", "2025-08-12", 10);
addEvent("Independence Day Function", "Festival", "2025-09-01", 50);

// Register Users
registerUser("Yoga Day Celebration", "Alice");
registerUser("Yoga Day Celebration", "Bob");
registerUser("Tree Plantation Drive", "Charlie");
registerUser("Free Health Checkup Camp", "Daisy");

// Filter Events with callback (e.g., only those with > 10 seats)
filterEventsByCategory("Health", event => event.availableSeats > 10);

// Another filter (upcoming events only)
filterEventsByCategory("Festival", event => {
    const today = new Date();
    return new Date(event.date) > today;
});

// 1. Define Event class
class Event {
    constructor(name, category, date, totalSeats) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.totalSeats = totalSeats;
        this.bookedSeats = 0;
    }
}

// 2. Add method to prototype
Event.prototype.checkAvailability = function () {
    const availableSeats = this.totalSeats - this.bookedSeats;
    return availableSeats > 0
        ? `${availableSeats} seats available for ${this.name}`
        : `No seats available for ${this.name}`;
};

// 3. Create Event objects
const event1 = new Event("Yoga Day", "Health", "2025-06-21", 20);
const event2 = new Event("Art Fest", "Festival", "2025-07-05", 50);

// Simulate some bookings
event1.bookedSeats = 15;
event2.bookedSeats = 50;

// 4. Use the prototype method
console.log(event1.checkAvailability());  // 5 seats available for Yoga Day
console.log(event2.checkAvailability());  // No seats available for Art Fest

// 5. Use Object.entries() to list keys and values
console.log("Details of Yoga Day Event:");
Object.entries(event1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Sample array to hold event objects (simplified with just name and category)
const communityEvents = [
  { name: "Yoga Day", category: "Health" },
  { name: "Music Concert", category: "Music" },
  { name: "Art Fest", category: "Festival" },
];

// 1. Add new event using .push()
communityEvents.push({ name: "Workshop on Baking", category: "Workshop" });
communityEvents.push({ name: "Jazz Night", category: "Music" });

// 2. Filter to show only Music events
const musicEvents = communityEvents.filter(event => event.category.toLowerCase() === "music");

// 3. Map to format display cards (just a string representation here)
const displayCards = communityEvents.map(event => `Event: ${event.name}`);

console.log("All Events:");
console.log(displayCards);

console.log("\nMusic Events:");
console.log(musicEvents);

const eventList = document.getElementById('event-list');
const spinner = document.getElementById('spinner');

// Show spinner
spinner.style.display = 'block';

fetch(MOCK_API)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(events => {
    spinner.style.display = 'none'; // Hide spinner
    events.forEach(event => {
      const li = document.createElement('li');
      li.textContent = event.title;
      eventList.appendChild(li);
    });
  })
  .catch(error => {
    spinner.textContent = 'Failed to load events.';
    console.error('Fetch error:', error);
  });

  async function fetchEvents() {
  try {
    spinner.style.display = 'block';
    const response = await fetch(MOCK_API);
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    const events = await response.json();
    spinner.style.display = 'none';

    events.forEach(event => {
      const li = document.createElement('li');
      li.textContent = event.title;
      eventList.appendChild(li);
    });
  } catch (err) {
    spinner.textContent = 'Failed to load events.';
    console.error('Async fetch error:', err);
  }
}

fetchEvents();

function addEvent(name = "Untitled", category = "General", date = "TBD", seats = 0) {
  const newEvent = { name, category, date, availableSeats: seats, registrations: [] };
  eventStore.push(newEvent);
  console.log(`Event '${name}' added under '${category}' category.`);
}

function printEventDetails(event) {
  const { name, date, availableSeats } = event;
  console.log(`Event: ${name} | Date: ${date} | Seats: ${availableSeats}`);
}

eventStore.forEach(printEventDetails);

const cloneAndFilter = () => {
  const clonedEvents = [...eventStore];
  const upcoming = clonedEvents.filter(e => isUpcoming(e.date));
  console.log("Upcoming Events from Cloned List:");
  upcoming.forEach(e => console.log(e.name));
};

cloneAndFilter();

const renderEventList = (events) =>
  events.forEach(({ name }) => console.log(`📌 ${name}`));

function handleSubmit(event) {
  event.preventDefault();
  console.log('Form submission started');

  const form = event.target;
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const date = form.elements['date'].value;
  const eventType = form.elements['eventType'].value;
  const message = form.elements['message'].value.trim();

  console.log('Collected Data:', { name, email, date, eventType, message });

  const output = document.getElementById('confirmationMsg');
  output.style.color = 'black';
  output.textContent = 'Submitting your registration...';

  if (!name || !email || !date || !eventType) {
    output.style.color = 'red';
    output.textContent = "Please fill in all required fields.";
    console.warn("Validation failed: Missing required fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    output.style.color = 'red';
    output.textContent = "Please enter a valid email address.";
    console.warn("Validation failed: Invalid email format.");
    return;
  }

  const userData = { name, email, date, eventType, message };
  console.log('Sending data to server...', userData);

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    .then(response => {
      console.log('Server responded with status:', response.status);
      if (!response.ok) {
        throw new Error('Server returned error');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response JSON:', data);
      output.style.color = 'green';
      output.textContent = `Registration successful! Thank you, ${name}.`;
      form.reset();
    })
    .catch(error => {
      output.style.color = 'red';
      output.textContent = 'Something went wrong. Please try again later.';
      console.error('Fetch error:', error);
    });
  }, 2000);
}

// Test the functionality
displayValidEvents();

registerForEvent("Yoga Day Celebration");       // Success
registerForEvent("Free Health Checkup Camp"); // Fail (past or no seats)
registerForEvent("Independence Day Function"); // Fail (not found)
registerForEvent("Children's Art Contest");    // Fail (full)

