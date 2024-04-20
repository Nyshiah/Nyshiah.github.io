onclick='document.getElementById("ClickIT").innerHTML = "Look! So Cool Right??"'
let clickCount = 0

const handleClick = () => {
  const selector = document.getElementById("ClickIT");

  let str;

  str = "You clicked on me " + clickCount++ + " times";

    if (clickCount > 10) {
      str = "holy stop it's hurting me!!!!!"
    }
  
    selector.innerHTML = str;

}