import { v4 as uuidv4 } from "uuid";

class QAItemImage {
    id?: string;
    qaItemId: string;
    filePath: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { QAItemImage };
