function generateContent() {
  // Get user inputs
  const username = document.getElementById('username').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const am_pm = document.getElementById('am_pm').value;
  
  // Additional inputs can be captured here
  
  // Generate Group Shout - Training
  const groupShoutTraining = `TRAINING | The ${time} ${am_pm} EST training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.`;
  
  const groupShoutTrainingLocked = `TRAINING | Unfortunately, the ${time} ${am_pm} EST training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.`;
  
  const groupShoutTrainingConcluded = `TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
  
  // Combine all Group Shout - Training messages
  const groupShoutTrainingFull = `${groupShoutTraining}\n\n${groupShoutTrainingLocked}\n\n${groupShoutTrainingConcluded}`;
  
  // Generate Group Shout - Shift
  const groupShoutShift = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel. I hope to see you all there!`;
  
  const groupShoutShiftEnded = `SHIFT | My shift has officially concluded, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
  
  const groupShoutShiftFull = `${groupShoutShift}\n\n${groupShoutShiftEnded}`;
  
  // Generate Discord - Training
  const discordTraining = `**Training Session**

Greetings, everyone

I am delighted to inform you all that a training being hosted by @${username} will be commencing in 15 minutes at the training center. We advise all Hotel Employees to attend to rank up. 

Server One: https://www.roblox.com/games/5910536795/Maldivian-Resort-and-Spa-Training-Center

@Sessions`;
  
  // Generate Discord - Shift
  const discordShift = `HOTEL SHIFT

Hello, Maldivian! I am excited to inform you all that a shift being hosted by @${username} and co-hosted by N/A is now commencing at the hotel! Why not join for an opportunity to meet new people! Minigames and activities are possible.

https://www.roblox.com/groups/8129727/Maldivian-Resort-and-Spa#!/about

[PROFILE LINK]

@sessions`;
  
  // Generate Shift Log
  const shiftLog = `SHIFT LOG

Username: ${username}
Date of Shift: ${date}
Time of Shift Start: ${time} ${am_pm}
Time of Shift End: 
Attendees: 
Photo: nothing goes here`;
  
  // Generate Training Log
  const trainingLog = `TRAINING LOG

Host: ${username}
Co-Host: 
Session Date and Time: ${date} ${time} ${am_pm}
Passers: 
Picture: nothing goes here`;
  
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
