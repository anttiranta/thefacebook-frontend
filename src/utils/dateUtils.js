// Get datetime in 12 hour AM/PM format
export function formatAsLocaleAMPMDate(date, localeCode = 'en-US') {
    const day = date.getDate()
    const month = date.toLocaleString(localeCode, { month: 'long' });
    const year = date.getFullYear()

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return month + ' ' + day + ', ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;
  }