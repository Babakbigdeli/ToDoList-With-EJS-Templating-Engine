// function to get today's date in a specified format 

exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);

};
