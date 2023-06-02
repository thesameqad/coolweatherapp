export function getFunnyWeatherSentence(temperature: number) {
    if (temperature <= -50) {
      return "It's so cold outside, I saw a polar bear wearing a Snuggie!";
    } else if (temperature <= -40) {
      return "It's so frigid out there, my words froze in mid-air and shattered!";
    } else if (temperature <= -30) {
      return "It's colder than a penguin's cold feet on a snow slide!";
    } else if (temperature <= -20) {
      return "It's so chilly, I saw a squirrel trying to breakdance to stay warm!";
    } else if (temperature <= -10) {
      return "It's so icy outside, the snowmen are asking for hot chocolate!";
    } else if (temperature <= 0) {
      return "It's freezing enough to turn boiling water into instant ice sculptures!";
    } else if (temperature <= 10) {
      return "It's nippy out there, penguins are complaining about the heatwave!";
    } else if (temperature <= 20) {
      return "It's colder than a snowman's ex-girlfriend's heart!";
    } else if (temperature <= 30) {
      return "It's chilly enough to make the Abominable Snowman snuggle with a hot water bottle!";
    } else if (temperature <= 40) {
      return "It's brisk outside, the snowflakes are doing a little happy dance!";
    } else if (temperature <= 50) {
      return "It's cool enough for polar bears to enjoy a refreshing dip in the hot tub!";
    } else if (temperature <= 60) {
      return "It's pleasant weather, even the sun is wearing shades and sipping a cold lemonade!";
    } else if (temperature <= 70) {
      return "It's so nice outside, the squirrels are hosting a picnic and offering acorn appetizers!";
    } else if (temperature <= 80) {
      return "It's warm enough to make the snowman sweat and request an ice cream cone!";
    } else if (temperature <= 90) {
      return "It's hotter than a jalapeño sunbathing on a desert dune!";
    } else if (temperature <= 100) {
      return "It's scorching out there, eggs are frying on the sidewalk without a pan!";
    } else if (temperature <= 110) {
      return "It's so hot, even the sun is trying to find some shade!";
    } else if (temperature <= 120) {
      return "It's hotter than a dragon's breath at a barbecue party!";
    } else {
      return "It's beyond hot! You might have landed in the wrong dimension!";
    }
  }