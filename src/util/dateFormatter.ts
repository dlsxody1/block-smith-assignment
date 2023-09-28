export const dateFormatter = (time: Date) => {
  const currentDate = new Date();
  const postDate = new Date(time);
  const timeDifference = (currentDate.getTime() - postDate.getTime()) / 1000;
  let formattedDate = "";
  if (timeDifference < 60) {
    formattedDate = "방금 전";
  } else if (timeDifference < 120) {
    formattedDate = "1분 전";
  } else if (timeDifference < 180) {
    formattedDate = "2분 전";
  } else if (timeDifference < 3600) {
    formattedDate = `${Math.floor(timeDifference / 60)}분 전`;
  } else if (
    currentDate.getHours() === 23 &&
    currentDate.getMinutes() === 0 &&
    currentDate.getSeconds() === 0
  ) {
    formattedDate = "23시간 전";
  } else {
    const year = postDate.getFullYear();
    const month = String(postDate.getMonth() + 1).padStart(2, "0");
    const day = String(postDate.getDate()).padStart(2, "0");
    formattedDate = `${year}. ${month}. ${day}`;
  }

  return { formattedDate };
};
