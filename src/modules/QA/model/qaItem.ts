import { v4 as uuidv4 } from "uuid";

class QAItem {
    id?: string;
    qaId: string;
    title: string;
    description: string;
    status: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }

        if (!this.status) {
            this.status = "";
        }
    }
}

export { QAItem };
