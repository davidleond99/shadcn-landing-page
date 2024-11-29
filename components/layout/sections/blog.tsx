import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog = () => (
    
        <div className="container mx-auto flex flex-col gap-14">
            <div className="flex w-full flex-row justify-between items-center gap-8">
                <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                    Latest articles
                </h3>
                <Button className="gap-4">
                    View all articles <MoveRight className="w-4 h-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground text-base">
                        Our goal is to streamline SMB trade, making it easier and faster
                        than ever.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground text-base">
                        Our goal is to streamline SMB trade, making it easier and faster
                        than ever.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground text-base">
                        Our goal is to streamline SMB trade, making it easier and faster
                        than ever.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground text-base">
                        Our goal is to streamline SMB trade, making it easier and faster
                        than ever.
                    </p>
                </div>
            </div>
        </div>
    
);