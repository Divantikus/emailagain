import { useQueryClient, useMutation } from "@tanstack/react-query";
import { emails } from "src/services/emails.service";

export const useDeletEmail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deletEmail"],
    mutationFn: (id: string) => emails.deleteEmail(id),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["getEmails"] });
    },
  });
};
