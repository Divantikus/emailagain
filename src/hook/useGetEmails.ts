import { useQuery } from "@tanstack/react-query";
import { emails } from "src/services/emails.service";

export const useGetEmails = () => {
  return useQuery({
    queryKey: ["getEmails"],
    queryFn: () => emails.getEmails(),
  });
};
