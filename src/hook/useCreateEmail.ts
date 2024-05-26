import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormType } from "src/types/types";
import { emails } from "src/services/emails.service";

export const useCreateEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createEmail"],
    mutationFn: (data: FormType) => {
      return emails.createEmail(data);
    },
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["getEmails"] });
    },
  });
};
