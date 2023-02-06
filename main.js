//using map method:
 
const users =[
{
	first_name:"Mike",
	last_name:"Sheridan",
},
{
	first_name:"Tim",
	last_name:"Lee",
},
{
	first_name:"John",
	last_name:"Carte",
}
];
  let userVal=users.map(function(user){
	  return `${user.first_name} ${user.last_name}`;
  })
  console.log(userVal);