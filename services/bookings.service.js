const { all } = require("express/lib/application");

async function getMultiple(){
  var result;
  try {
    const response = await Promise.all([
      getBookings()
    ]);
  result = response;
  } catch(error) {
    console.error('Unable to get bookings:', error);
  }
  console.log(result);
  return result;
}

async function create(booking){
  message = 'Booking created';
  return {message};
}

async function update(id, booking){
  message = 'Booking updated';
  return {message};
}

async function remove(id){
  
  message = 'Booking deleted';
  return {message};
}

async function getBookings()
{
  var bookings = [];
 
  for(var i=0; i<5; i++)
  {
    var booking = {};
    booking.name = "Generate name"
    booking.description = "Generate description";
    booking.date = getDate(i);
    booking.time = getTime();
    booking.duration = "30 mins";
    booking.userId = i;
    try {
      const response = await Promise.all([
        generateName('female'),
        generateName('male')
      ]);
    const [userName, userManager] = response;
    booking.userName = userName;
    booking.userManager = userManager;
    let emailSuffix = '@contoso.com';
    let email = userName.replace(/\s/g, "") + emailSuffix; 
    booking.userEmail = email;
    } catch(error) {
      console.error('Unable to generate name:', error);
    }
    bookings.push(booking);
  }
  console.log(bookings);
  return bookings;
 }

 async function generateName(gender) {
  try {
    const response = await Promise.all([
      fetchNames(gender || pickRandom(['male', 'female'])),
      fetchNames('surnames')
    ]);

    const [firstNames, lastNames] = response;
    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);

    return `${firstName} ${lastName}`;
  } catch(error) {
    console.error('Unable to generate name:', error);
  }
}

function getDate(num)
{
  var targetDate = new Date();
  var today = new Date();
  targetDate.setDate(today.getDate() + num);
  var dd = String(targetDate.getDate()).padStart(2, '0');
  var mm = String(targetDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = targetDate.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

// This function returns a time from 8AM to 5PM. The time starts at the start of the hour.
function getTime()
{
  var targetDate = new Date();
  var hours = targetDate.getHours();
  var minutes = targetDate.getMinutes();
  var seconds = targetDate.getSeconds();
  var milliseconds = targetDate.getMilliseconds();

  var hh = targetDate.getHours();
  var mm = targetDate.getMinutes();

  var timeString = hh + ":" + mm;
  return timeString
}

function fetchNames(nameType) {
  var allData = fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Unable to fetch data:', error);
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}