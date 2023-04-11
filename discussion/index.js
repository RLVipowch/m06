function getColorForDayOfWeek(dayOfWeek) {
	if (typeof dayOfWeek !== 'string') {
		console.log('Invalid Input. Please input a string.');
	  return;
	}
  
	dayOfWeek = dayOfWeek.toLowerCase();
  
	switch (dayOfWeek) {
	  case 'monday':
		console.log(`Today is ${dayOfWeek}, Wear Black`);
		return 'Black';
	  case 'tuesday':
		console.log(`Today is ${dayOfWeek}, Wear Green`);
		return 'Green';
	  case 'wednesday':
		console.log(`Today is ${dayOfWeek}, Wear Yellow`);
		return 'Yellow';
	  case 'thursday':
		console.log(`Today is ${dayOfWeek}, Wear Red`);
		return 'Red';
	  case 'friday':
		console.log(`Today is ${dayOfWeek}, Wear Violet`);
		return 'Violet';
	  case 'saturday':
		console.log(`Today is ${dayOfWeek}, Wear Blue`);
		return 'Blue';
	  case 'sunday':
		console.log(`Today is ${dayOfWeek}, Wear White`);
		return 'White';
	  default:
		console.log('Invalid Input. Enter a valid day of the week.');
		return;
	}
  }
getColorForDayOfWeek('Monday'); 
getColorForDayOfWeek('Tuesday'); 
getColorForDayOfWeek('Wednesday'); 
getColorForDayOfWeek('Thursday'); 
getColorForDayOfWeek('Friday'); 
getColorForDayOfWeek('Saturday'); 
getColorForDayOfWeek('Sunday'); 
getColorForDayOfWeek(123); 
getColorForDayOfWeek('Invalid Day'); 