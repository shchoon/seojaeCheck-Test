import topics from "@/data/topics";

export const todayTopic = async () => {
  const randomIndex = Math.floor(Math.random() * 15);
  console.log("today topic");
  const query = topics[randomIndex];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}v3/search/book?query=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
      next: { tags: ["topic"] },
    },
  );

  const data = await res.json();

  return data.documents;
};
