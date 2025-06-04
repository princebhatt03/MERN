// setTimeOut: Provide a particular function to run once in a define time interval

setTimeout(function () {
  //   console.log('Love You Vanshi');
}, 3000);

let alarm = () => {
  //   console.log('Morning');
};

let id = setTimeout(alarm, 5000);
// clearTimeOut for clearing setTimeOut...
clearTimeout(id);

// setInterval: Provide a particular function to run everytime in a define time interval

let iid = setInterval(function () {
  console.log('Love You Vanshi');
}, 1000);

// to stop it we use clearInterval...

setTimeout(() => clearInterval(iid), 5000);
