interface MessageInterface {
    roomId?: string;
    message: string;
}

class BaseMessageManager {
    protected messages: { [roomId: string]: string[] };

    protected constructor() {
        this.messages = {};
    }

    addMessage({ roomId = '0', message }: MessageInterface) {
        let tempMessages: string[] = this.messages[roomId] || [];
        tempMessages.push(message.toString()?.split("|")?.splice(1).join('').trimLeft());
        this.messages[roomId] = tempMessages;
    }

    getMessages(roomId: string) {
        const messages: string[] = this.messages[roomId] || [];
        return messages;
    }
}

export class messageManager extends BaseMessageManager {
    private static instance: messageManager;

    private constructor() {
        super();
    }

    public static getInstance(): messageManager {
        if (!messageManager.instance) {
            messageManager.instance = new messageManager();
        }
        return messageManager.instance;
    }

    addInfoMessage({ roomId = '0', message }: MessageInterface) {
        console.log(roomId, message);
        let tempMessages: string[] = this.messages[roomId] || [];
        tempMessages.push(message);
        this.messages[roomId] = tempMessages;
    }
}
