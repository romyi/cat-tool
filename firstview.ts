import { ItemView, WorkspaceLeaf } from "obsidian";

export const FIRST_VIEW_TYPE = "first-view"


export class FirstView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf)
    }

    getViewType(): string {
        return FIRST_VIEW_TYPE
    }

    getDisplayText(): string {
        return 'first view'
    }

    protected async onOpen(): Promise<void> {
        const container = this.containerEl.children[1];
        container.empty();
        container.createEl("h3", {text: 'Hi'})
    }

    async onClose() {
        
    }
}