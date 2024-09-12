import { AxiosRespType, FormType } from "src/types/types";
import axios from "axios";

class Emails {
  private URL = "http://localhost:3000/emails/";

  async getEmails() {
    const data = await axios.get<AxiosRespType[]>(this.URL);
    return data.data;
  }

  async createEmail(data: FormType) {
    axios.post(this.URL, data);
  }

  async deleteEmail(postId: string) {
    const data = await axios.delete(this.URL + postId);
    return data.status;
  }
}
export const emails = new Emails();
