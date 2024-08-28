import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Nav() {
    return (
        <header className="bg-background border-b px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">App</h1>
                
                <Dialog>
                    <DialogTrigger>
                        <Button variant="outline">Add Task</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    );
}
