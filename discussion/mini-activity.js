function getColorForDayOfWeek(dayOfWeek) {
    console.log(dayOfWeek)
	if (typeof dayOfWeek === 'string') {
        switch (dayOfWeek.toLowerCase()) {
            case 'monday':
              console.log(`Today is ${dayOfWeek}, Wear Black`);
              break;
            case 'tuesday':
              console.log(`Today is ${dayOfWeek}, Wear Green`);
              break;
            case 'wednesday':
              console.log(`Today is ${dayOfWeek}, Wear Yellow`);
              break;
            case 'thursday':
              console.log(`Today is ${dayOfWeek}, Wear Red`);
              break;
            case 'friday':
              console.log(`Today is ${dayOfWeek}, Wear Violet`);
              break;
            case 'saturday':
              console.log(`Today is ${dayOfWeek}, Wear Blue`);
              break;
            case 'sunday':
              console.log(`Today is ${dayOfWeek}, Wear White`);
              break;
            default:
              console.log('Invalid Input. Enter a valid day of the week.');
              break;
          }
	} else {
        console.log('Invalid Input. Please input a string.');
    }  
}

getColorForDayOfWeek('Monday'); 
console.log("print")
//getColorForDayOfWeek('Tuesday'); 
//getColorForDayOfWeek('Wednesday'); 
//getColorForDayOfWeek('Thursday'); 
//getColorForDayOfWeek('Friday'); 
//getColorForDayOfWeek('Saturday'); 
//getColorForDayOfWeek('Sunday'); 
//getColorForDayOfWeek(123); 
//getColorForDayOfWeek('Invalid Day'); 