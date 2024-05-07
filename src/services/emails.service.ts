import { AxiosRespType, FormType } from "src/types/types";
import axios from "axios";

class Emails {
  private URL = "http://localhost:3000/emails/";
  async getEmails(): Promise<AxiosRespType[] | null> {
    try {
      const data = await axios.get<AxiosRespType[]>(this.URL);
      return data.data;
    } catch (error) {
      return null;
    }
  }
  async createEmail(data: FormType) {
    // ------------------------------------------
    // files: FileList
    // const formData = new FormData();
    // const newFiles = [...files];
    // newFiles.forEach((item) => {
    //   formData.append(item.name, item);
    // });
    // for (const i in data) {
    //   formData.append(i, data[i]);
    // }
    // ------------------------------------------
    try {
      await axios.post(this.URL, data);
    } catch (error) {
      console.error(error);
    }
  }
  async deleteEmail(postId: string): Promise<number> {
    try {
      const data = await axios.delete(this.URL + postId);
      return data.status;
    } catch (error) {
      console.error(error);
      return 404;
    }
  }
}
export const emails = new Emails();
