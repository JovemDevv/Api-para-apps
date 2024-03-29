import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  name: string | undefined;
  description: string | undefined;
  created_at: Date | undefined;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Specification };
