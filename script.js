function generateContent() {
  // Get user inputs
  const username = document.getElementById('username').value.trim();
  const sessionDate = document.getElementById('sessionDate').value;
  const sessionTime = document.getElementById('sessionTime').value;
  const endTime = document.getElementById('endTime').value;
  const attendeesInput = document.getElementById('attendees').value.trim();
  const passersInput = document.getElementById('passers').value.trim();
  
  // Validate required fields
  if (!username || !sessionDate || !sessionTime || !endTime || !attendeesInput || !passersInput) {
    alert("Please fill in all required fields.");
    return;
  }
  
  // Combine date and time for session start
  const sessionDateTime = new Date(`${sessionDate}T${sessionTime}`);
  const sessionTimestamp = Math.floor(sessionDateTime.getTime() / 1000); // Unix timestamp in seconds
  
  // Combine date and end time for session end
  const endDateTime = new Date(`${sessionDate}T${endTime}`);
  const endTimestamp = Math.floor(endDateTime.getTime() / 1000); // Unix timestamp in seconds
  
  // Convert timestamps to local time strings
  const sessionLocalTime = sessionDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endLocalTime = endDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Split attendees and passers by comma and trim spaces
  const attendees = attendeesInput.split(',').map(item => item.trim()).filter(item => item);
  const passers = passersInput.split(',').map(item => item.trim()).filter(item => item);
  
  // Generate Group Shout - Training
  const groupShoutTraining = `TRAINING | The ${sessionLocalTime} EST training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.`;
  
  const groupShoutTrainingLocked = `TRAINING | Unfortunately, the ${sessionLocalTime} EST training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.`;
  
  const groupShoutTrainingConcluded = `TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
  
  // Combine all Group Shout - Training messages
  const groupShoutTrainingFull = `${groupShoutTraining}\n\n${groupShoutTrainingLocked}\n\n${groupShoutTrainingConcluded}`;
  
  // Generate Group Shout - Shift
  const groupShoutShift = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel at ${sessionLocalTime}. I hope to see you all there!`;
  
  const groupShoutShiftEnded = `SHIFT | My shift has officially concluded at ${endLocalTime}, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
  
  const groupShoutShiftFull = `${groupShoutShift}\n\n${groupShoutShiftEnded}`;
  
  // Generate Discord - Training
  const discordTraining = `**Training Session**
  
Greetings, everyone

I am delighted to inform you all that a training being hosted by @${username} will be commencing in 15 minutes at the training center. We advise all Hotel Employees to attend to rank up. 

Server One: https://www.roblox.com/games/5910536795/Maldivian-Resort-and-Spa-Training-Center

@Sessions`;
  
  // Generate Discord - Shift
  const discordShift = `HOTEL SHIFT

Hello, Maldivian! I am excited to inform you all that a shift being hosted by @${username} and co-hosted by N/A is now commencing at the hotel at ${sessionLocalTime}! Why not join for an opportunity to meet new people! Minigames and activities are possible.

https://www.roblox.com/groups/8129727/Maldivian-Resort-and-Spa#!/about

[PROFILE LINK]

@sessions`;
  
  // Generate Shift Log
  const shiftLog = `SHIFT LOG

Username: ${username}
Date of Shift: ${sessionDate}
Time of Shift Start: ${sessionLocalTime}
Time of Shift End: ${endLocalTime}
Attendees: ${attendees.join(', ')}
Photo: 
`;
  
  // Generate Training Log
  const trainingLog = `TRAINING LOG

Host: ${username}
Co-Host: 
Session Date and Time: ${sessionDate} ${sessionLocalTime} EST
Passers: ${passers.join(', ')}
Picture: 
`;
  
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
