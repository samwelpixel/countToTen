function countToTen() {
  var count = 0;
  while (count < 10) {
    count++;
    document.getElementById("theCount").innerHTML += count + "<br>";
  }
}
/* countToTen initializes a variable called count
 *starts a loop by checking the value of count to make sure its less than 10
 * Adds 1 to every count
 * Appends the current value of count, followed by line break to the paragraph with id = 'theCount'
 * Starts the loop over again
 */
