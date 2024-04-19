let placeTovisit: string[] = ["paris" ,"newyourk" , "italy" , "china" , "london"];
console.log("original order:",placeTovisit);

console.log("Alphabetical order:", placeTovisit.slice().sort());

//Show that your array is still in its original order by printing it.
console.log("original order:",placeTovisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:",placeTovisit.slice().sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("original order:",placeTovisit);

//Reverse the order of your list. Print the array to show that its order has changed
console.log("reverse order changed");
placeTovisit.reverse();
console.log(placeTovisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("original order:",placeTovisit.sort());
console.log(placeTovisit);


