import React from "react";

function DateTime(props) {
  const dateFormat = function (d) {
    if (d > 3 && d < 21) return d + "th";
    switch (d % 10) {
      case 1:
        return d + "st";
      case 2:
        return d + "nd";
      case 3:
        return d + "rd";
      default:
        return d + "th";
    }
  };
  const today = new Date();
  const date = dateFormat(today.getDate());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = today.toLocaleDateString("en-US", options);
  const formatedDateArr = formatedDate.split(",");
  const day = formatedDateArr[0];
  const month = formatedDateArr[1].trim().split(" ")[0];
  return (
    <div className="date-box">
      <span className="date">
        {day}, {date}
      </span>
      <span className="month">
        {month}, {today.getFullYear()}
      </span>
    </div>
  );
}

export default DateTime;
