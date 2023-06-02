export const getFutureDay = (index: number) => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const todayIndex = new Date().getDay();
    const futureDayIndex = todayIndex + index + 1;
    if (futureDayIndex < weekday.length) {
      return weekday[futureDayIndex];
    }
    return weekday[futureDayIndex - weekday.length];
  }