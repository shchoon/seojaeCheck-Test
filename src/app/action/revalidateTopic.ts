"use server";

import { revalidateTag } from "next/cache";
import { todayTopic } from "@/libs/apis/todayTopic";

export const RevalidateTopic = async () => {
  await revalidateTag("topic");
  await todayTopic();
};
