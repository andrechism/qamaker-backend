import { v4 as uuidv4 } from "uuid";

class QA {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { QA };
