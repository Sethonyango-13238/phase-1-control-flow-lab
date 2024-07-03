function scuberGreetingForFeet(distance){
  // Write your code here!
  
  if (distance <=400 ){
    console.log('This one is on me!')
  }else if (distance>400 && distance<2000 ){
    console.log('That will be twenty bucks.');
  }else if(distance>2000 ){
    console.log('I will gladly take your thirty bucks.');
  }else if(distance>2500 );{
    console.log('No can do.');
  }else{
    console.log('invalid distance')
  }
  
}

 
  function ternaryCheckCity(newYorkCity) {
    let city = (newYorkCity === 'NYC') ? 'Ok, sounds good.' : 'No go.';
    console.log(city);
    return city;
}



function switchOnCharmFromTip(tipResponse){
  // Write your code here!
  switch(tipResponse){
    case 'tip is generous':
    console.log('Thank you so much');
    break;
    case 'tip is not as generous':
    console.log('Thank you so much.'); 
    break;
    default:
      console.log('Bye.');

  }
}