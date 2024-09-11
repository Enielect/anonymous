export const base_url = process.env.BASE_URL;
export const web_url = process.env.NEXT_PUBLIC_WEB_URL

export function convertTimeFormat(isoTime: string) {
  const date = new Date(isoTime);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  // Get last two digits of year

  return `${day}/${month}/${year}`;
}

export function getTimeAgo(isoTime: string): string {
  const now = new Date();
  const then = new Date(isoTime);
  const diffInSeconds = Math.floor((Number(now) - Number(then)) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
}

// Example usage:
const isoTime = "2023-12-31T23:59:59Z"; // Replace with your ISO time
const timeAgo = getTimeAgo(isoTime);
//console.log(timeAgo); // Output: "10 months ago"
