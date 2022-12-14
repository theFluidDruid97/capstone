const { DateTime } = require("luxon");

export const CurrentDate = () => {
  const date = DateTime.fromFormat("2023-08-03", "yyyy-MM-dd").toFormat(
    "yyyy-MM-dd"
  );
  console.log(date);
};

export const DueDate = (dt, y, m, d) => {
  const date = DateTime.fromFormat(dt, "yyyy-MM-dd")
    .plus({ years: y })
    .plus({ months: m })
    .plus({ days: d })
    .toFormat("yyyy-MM-dd");
  console.log(date);
};

export const Date = () => {
  CurrentDate();
  DueDate("2022-08-03", 500, 6, 10);
};
