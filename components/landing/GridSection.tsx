import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "../uicomponents/bento-grid";
import { AnimatedBeamMultipleOutput } from "../uicomponents/animated-beam-multiple-output";
import { Skeleton } from "../ui/skeleton";

const features = [
    {
        Icon: FileTextIcon,
        name: "Interface intuitive",
        description: "Interfaces réactives et ergonomiques pour une navigation fluide et agréable.",
        secondDesc: "",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="p-3 grid grid-cols-2 gap-2 absolute translate-x-1/2 right-1/2 top-4 w-[100%] transition-all duration-300 ease-out">
                <div className="col-span-1 p-3 space-y-2 border bg-background shadow-md rounded-md hover:rotate-3 transition-all">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-5 w-full" />
                </div>
                <div className="col-span-1 p-3 space-y-2 border bg-background shadow-md rounded-md hover:-rotate-3 transition-all">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-5 w-full" />
                </div>
            </div>
        )
    },
    {
        Icon: InputIcon,
        name: "Visibilité augmentée",
        description: "Maximisez la visibilité de votre site avec des stratégies SEO, pour attirer plus de visiteurs.",
        secondDesc: "",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
                <CommandInput placeholder="effectuez une recherche..." />
                <CommandList>
                    <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>google.com</CommandItem>
                        <CommandItem>youtube.com</CommandItem>
                        <CommandItem>studio-dev.fr</CommandItem>
                        <CommandItem>nextjs.org</CommandItem>
                        <CommandItem>ui.shadcn.com</CommandItem>
                        <CommandItem>tailwindcss.com</CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        ),
    },
    {
        Icon: Share2Icon,
        name: "Écosystème Next.js",
        description: "Profitez de l’écosystème Next.js pour intégrer facilement services, API, et outils.",
        secondDesc: "",
        className: "col-span-3 lg:col-span-1",
        background: (
            <AnimatedBeamMultipleOutput className="absolute right-2 top-4 h-[300px] w-[100%] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        )
    }
];

export function BentoSection() {
    return (
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    );
}
