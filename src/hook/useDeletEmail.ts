import { useQueryClient, useMutation } from "@tanstack/react-query";
import { emails } from "src/services/emails.service";

export const useDeletEmail = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["deletEmail"],
    mutationFn: (id: string) => {
      return emails.deleteEmail(id);
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["getEmails"] });
    },
  });
  return { mutate, isPending };
};
