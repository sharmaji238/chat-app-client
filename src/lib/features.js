import moment from "moment";

const fileFormat = (url) => {
  const extension = url?.split('.').pop().toLowerCase();

  if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
    return 'image';
  } else if (['mp4', 'avi', 'mov','webm','ogg'].includes(extension)) {
    return 'video';
  } else if (['mp3', 'wav'].includes(extension)) {
    return 'audio';
  } else if (['pdf', 'docx', 'txt'].includes(extension)) {
    return 'document';
  }
  return 'unknown';
}



// https://res.cloudinary.com/dj5q966nb/image/upload/dpr_auto/w_200/v1710344436/fafceddc-2845-4ae7-a25a-632f01922b4d.png

// /dpr_auto/w_200
const transformImage = (url = "", width = 100) => {
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);

  return newUrl;
};

const getLast7Days = () => {
  const currentDate = moment();

  const last7Days = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");

    last7Days.unshift(dayName);
  }

  return last7Days;
};

const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  else localStorage.setItem(key, JSON.stringify(value));
};

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };