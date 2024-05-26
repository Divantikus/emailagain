import { useQuery } from "@tanstack/react-query";
import { emails } from "src/services/emails.service";

export const useGetEmails = () => {
  const { data: emailList } = useQuery({
    queryKey: ["getEmails"],
    queryFn: () => emails.getEmails(),
  });
  return { emailList };
};
