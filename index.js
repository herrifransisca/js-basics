let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}

// using if else is more cleaner than switch case
// mosh personaly tend to use if else more often.
//      switch case is kind of outdated and look a little bit ugly in mosh personal opinion
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');
