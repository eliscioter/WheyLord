export const DateMonths = () => {
    const months = [];
    const date = new Date();
  
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      date.setMonth(monthIndex);
      const monthName = date.toLocaleString("default", { month: "long" });
      months.push(monthName);
    }
  
    return months;
  };
  
  interface DateDaysProps {
    year: number;
    month: number;
  }
  
  export const DateDays = ({ year, month }: DateDaysProps) => {
    const days = [];
    const daysInMonth = new Date(year, month, 0).getDate();
  
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
  
    return days;
  };
  
  export const DateYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1930;
    const years = [];
  
    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }
  
    return years;
  };
  
  export const FormattedDate = (iso_date: Date) => {
    const date = new Date(iso_date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const month = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
  
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  };