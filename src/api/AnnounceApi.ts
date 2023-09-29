const BASE_URL = "http://localhost:3000/api/announcement/";

export const getAnnouncement = async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data;
};

export const getAnnouncementById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data.announcement;
};
