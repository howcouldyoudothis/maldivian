function generateContent() {
  try {
    // Get user inputs and trim whitespace
    const username = document.getElementById('username').value.trim();
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;
    const endTime = document.getElementById('endTime').value;
    const attendeesInput = document.getElementById('attendees').value.trim();
    const passersInput = document.getElementById('passers').value.trim();
    
    // Initialize variables
    let sessionTimestamp = null;
    let endTimestamp = null;
    
    // Combine date and time for session start
    if (sessionDate && sessionTime) {
      const sessionDateTime = new Date(`${sessionDate}T${sessionTime}`);
      if (!isNaN(sessionDateTime.getTime())) {
        sessionTimestamp = Math.floor(sessionDateTime.getTime() / 1000); // Unix timestamp in seconds
      }
    }
    
    // Combine date and end time for session end
    if (sessionDate && endTime) {
      const endDateTime = new Date(`${sessionDate}T${endTime}`);
      if (!isNaN(endDateTime.getTime())) {
        endTimestamp = Math.floor(endDateTime.getTime() / 1000); // Unix timestamp in seconds
      }
    }
    
    // Split attendees and passers by comma and trim spaces
    const attendees = attendeesInput ? attendeesInput.split(',').map(item => item.trim()).filter(item => item) : [];
    const passers = passersInput ? passersInput.split(',').map(item => item.trim()).filter(item => item) : [];
    
    // Generate Group Shout - Training
    let groupShoutTrainingFull = "";
    if (username) {
      if (sessionTimestamp) {
        groupShoutTrainingFull = `TRAINING | The <t:${sessionTimestamp}:t> EST training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.

TRAINING | Unfortunately, the <t:${sessionTimestamp}:t> EST training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.

TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
      } else {
        groupShoutTrainingFull = `TRAINING | A training session is now being hosted by ${username}. Come on down to the training center for a chance to be promoted.

TRAINING | Unfortunately, the training has begun and the server has locked. If you couldn't make it, don’t fret as other trainings will be hosted.

TRAINING | The training session has now concluded! Congratulations to everyone who passed, if you couldn't make it, don't fret as other trainings will be hosted.`;
      }
    } else {
      groupShoutTrainingFull = "Insufficient information to generate Group Shout - Training.";
    }
    
    // Generate Group Shout - Shift
    let groupShoutShiftFull = "";
    if (username) {
      if (sessionTimestamp) {
        if (endTimestamp) {
          groupShoutShiftFull = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel at <t:${sessionTimestamp}:t>. I hope to see you all there!

SHIFT | My shift has officially concluded at <t:${endTimestamp}:t>, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
        } else {
          groupShoutShiftFull = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel at <t:${sessionTimestamp}:t>. I hope to see you all there!

SHIFT | My shift has officially concluded, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
        }
      } else {
        if (endTimestamp) {
          groupShoutShiftFull = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel. I hope to see you all there!

SHIFT | My shift has officially concluded at <t:${endTimestamp}:t>, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
        } else {
          groupShoutShiftFull = `SHIFT | Greetings, everyone! A shift hosted by ${username} will be commencing down at the hotel. I hope to see you all there!

SHIFT | My shift has officially concluded, thank you to those who attended! If you've missed the shift, do not fret as more will be hosted.`;
        }
      }
    } else {
      groupShoutShiftFull = "Insufficient information to generate Group Shout - Shift.";
    }
    
    // Generate Discord - Training
    let discordTraining = "";
    if (username) {
      if (sessionTimestamp) {
        discordTraining = `**Training Session**
        
Greetings, everyone

I am delighted to inform you all that a training being hosted by @${username} will be commencing at <t:${sessionTimestamp}:F> EST at the training center. We advise all Hotel Employees to attend to rank up. 

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
      if (sessionTimestamp) {
        discordShift = `HOTEL SHIFT
    
Hello, Maldivian! I am excited to inform you all that a shift being hosted by @${username} and co-hosted by N/A is now commencing at the hotel at <t:${sessionTimestamp}:F>! Why not join for an opportunity to meet new people! Minigames and activities are possible.

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
    if (sessionTimestamp) shiftLog += `Time of Shift Start: <t:${sessionTimestamp}:F>\n`;
    if (endTimestamp) shiftLog += `Time of Shift End: <t:${endTimestamp}:F>\n`;
    if (attendees.length > 0) shiftLog += `Attendees: ${attendees.join(', ')}\n`;
    shiftLog += `Photo: \n`;
    
    // Generate Training Log
    let trainingLog = "TRAINING LOG\n\n";
    if (username) trainingLog += `Host: ${username}\n`;
    trainingLog += `Co-Host: \n`; // Assuming Co-Host is not collected
    if (sessionDate && sessionTimestamp) {
      trainingLog += `Session Date and Time: <t:${sessionTimestamp}:F> EST\n`;
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
    
    // Scroll to the output section
    document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    console.error("Error generating content:", error);
    alert("An error occurred while generating the content. Please check your inputs and try again.");
  }
}

function clearForm() {
  document.getElementById('inputForm').reset();
  document.querySelectorAll('#output pre').forEach(pre => pre.textContent = '');
}
