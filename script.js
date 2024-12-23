function generateContent() {
  // Get user inputs and trim whitespace
  const username = document.getElementById('username').value.trim();
  const sessionDate = document.getElementById('sessionDate').value;
  const sessionTime = document.getElementById('sessionTime').value;
  const endTime = document.getElementById('endTime').value;
  const attendeesInput = document.getElementById('attendees').value.trim();
  const passersInput = document.getElementById('passers').value.trim();
  
  // Initialize variables
  let sessionLocalTime = "";
  let endLocalTime = "";
  
  // Combine date and time for session start
  if (sessionDate && sessionTime) {
    const sessionDateTime = new Date(`${sessionDate}T${sessionTime}`);
    if (!isNaN(sessionDateTime.getTime())) {
      sessionLocalTime = sessionDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
  
  // Combine date and end time for session end
  if (sessionDate && endTime) {
    const endDateTime = new Date(`${sessionDate}T${endTime}`);
    if (!isNaN(endDateTime.getTime())) {
      endLocalTime = endDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
  
  // Split attendees and passers by comma and trim spaces
  const attendees = attendeesInput ? attendeesInput.split(',').map(item => item.trim()).filter(item => item) : [];
  const passers = passersInput ? passersInput.split(',').map(item => item.trim()).filter(item => item) : [];
  
  // Generate Group Shout - Training
  let groupShoutTrainingFull = "";
  if (sessionLocalTime && username) {
    const groupShoutTraining = `TRAINING | The ${sessionLocalTime} EST training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.`;
    const groupShoutTrainingLocked = `TRAINING | Unfortunately, the ${sessionLocalTime} EST training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.`;
    const groupShoutTrainingConcluded = `TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
    groupShoutTrainingFull = `${groupShoutTraining}\n\n${groupShoutTrainingLocked}\n\n${groupShoutTrainingConcluded}`;
  } else if (username) {
    const groupShoutTraining = `TRAINING | A training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.`;
    const groupShoutTrainingLocked = `TRAINING | Unfortunately, the training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.`;
    const groupShoutTrainingConcluded = `TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
    groupShoutTrainingFull = `${groupShoutTraining}\n\n${groupShoutTrainingLocked}\n\n${groupShoutTrainingConcluded}`;
  } else {
    groupShoutTrainingFull = "Insufficient information to generate Group Shout - Training.";
  }
  
  // Generate Group Shout - Shift
  let groupShoutShiftFull = "";
  if (username) {
    if (sessionLocalTime) {
      const groupShoutShift = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel at ${sessionLocalTime}. I hope to see you all there!`;
      const groupShoutShiftEnded = endLocalTime ? 
        `SHIFT | My shift has officially concluded at ${endLocalTime}, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.` :
        `SHIFT | My shift has officially concluded, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
      groupShoutShiftFull = `${groupShoutShift}\n\n${groupShoutShiftEnded}`;
    } else {
      const groupShoutShift = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel. I hope to see you all there!`;
      const groupShoutShiftEnded = endLocalTime ? 
        `SHIFT | My shift has officially concluded at ${endLocalTime}, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.` :
        `SHIFT | My shift has officially concluded, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
      groupShoutShiftFull = `${groupShoutShift}\n\n${groupShoutShiftEnded}`;
    }
  } else {
    groupShoutShiftFull = "Insufficient information to generate Group Shout - Shift.";
  }
  
  // Generate Discord - Training
  let discordTraining = "";
  if (username) {
    if (sessionLocalTime) {
      discordTraining = `**Training Session**
      
Greetings, everyone

I am delighted to inform you all that a training being hosted by @${username} will be commencing at ${sessionLocalTime} EST at the training center. We advise all Hotel Employees to attend to rank up. 

Server One: https://www.roblox.com/games/5910536795/Maldivian-Resort-and-Spa-Training-Center

@Sessions`;
    } else {
      discordTraining = `**Training Session**
      
Greetings, everyone

I am delighted to inform you all that a training being hosted by @${username} will be commencing at the training center. We advise all Hotel Employees to attend to rank up. 

Server One: https://www.roblox.com/games/5910536795/Maldivian-Resort-and-Spa-Training-Center

@Sessions`;
    }
  } else {
    discordTraining = "Insufficient information to generate Discord - Training.";
  }
  
  // Generate Discord - Shift
  let discordShift = "";
  if (username) {
    if (sessionLocalTime) {
      discordShift = `HOTEL SHIFT
    
Hello, Maldivian! I am excited to inform you all that a shift being hosted by @${username} and co-hosted by N/A is now commencing at the hotel at ${sessionLocalTime}! Why not join for an opportunity to meet new people! Minigames and activities are possible.

https://www.roblox.com/groups/8129727/Maldivian-Resort-and-Spa#!/about

[PROFILE LINK]

@sessions`;
    } else {
      discordShift = `HOTEL SHIFT
    
Hello, Maldivian! I am excited to inform you all that a shift being hosted by @${username} and co-hosted by N/A is now commencing at the hotel! Why not join for an opportunity to meet new people! Minigames and activities are possible.

https://www.roblox.com/groups/8129727/Maldivian-Resort-and-Spa#!/about

[PROFILE LINK]

@sessions`;
    }
  } else {
    discordShift = "Insufficient information to generate Discord - Shift.";
  }
  
  // Generate Shift Log
  let shiftLog = "SHIFT LOG\n\n";
  if (username) shiftLog += `Username: ${username}\n`;
  if (sessionDate) shiftLog += `Date of Shift: ${sessionDate}\n`;
  if (sessionLocalTime) shiftLog += `Time of Shift Start: ${sessionLocalTime}\n`;
  if (endLocalTime) shiftLog += `Time of Shift End: ${endLocalTime}\n`;
  if (attendees.length > 0) shiftLog += `Attendees: ${attendees.join(', ')}\n`;
  shiftLog += `Photo: \n`;
  
  // Generate Training Log
  let trainingLog = "TRAINING LOG\n\n";
  if (username) trainingLog += `Host: ${username}\n`;
  trainingLog += `Co-Host: \n`; // Assuming Co-Host is not collected
  if (sessionDate && sessionLocalTime) {
    trainingLog += `Session Date and Time: ${sessionDate} ${sessionLocalTime} EST\n`;
  }
  if (passers.length > 0) trainingLog += `Passers: ${passers.join(', ')}\n`;
  trainingLog += `Picture: \n`;
  
  // Display generated content
  document.getElementById('groupShoutTraining').textContent = groupShoutTrainingFull;
  document.getElementById('groupShoutShift').textContent = groupShoutShiftFull;
  document.getElementById('discordTraining').textContent = discordTraining;
  document.getElementById('discordShift').textContent = discordShift;
  document.getElementById('shiftLog').textContent = shiftLog;
  document.getElementById('trainingLog').textContent = trainingLog;
  
  // Optionally, scroll to the output section
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
}
