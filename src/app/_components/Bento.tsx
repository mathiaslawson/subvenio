import { cn } from "~/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "~/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconCurrencyDollar,
  IconFileBroken,
  IconRobot,
  IconSignature,
  IconTableColumn,
  IconUsersGroup,
} from "@tabler/icons-react";


export function Bento() {
  return (
    <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black ben3-bg border border-neutral-600"></div>
);

const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,black)]  border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black ben-bg border border-neutral-600"></div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,black,black)]  border-transparent dark:border-white/[0.2] bg-neutral-900 dark:bg-black ben4-bg border border-neutral-600"></div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black ben5-bg border border-neutral-600"></div>
);

const items = [
  {
    title: "Progress Tracking",
    description: "Progress Tracking During Learning Experiences (Coming Soon)",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flexible Subscription",
    description: "Flexible Subscription Plans (Coming Soon)",
    header: <Skeleton1 />,
    className: "md:col-span-1",
    icon: <IconCurrencyDollar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community",
    description: "Shared Community Learning Experiences (Coming Soon)",
    header: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <IconUsersGroup className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Powered",
    description:
      "Flash card Generation over various topics with the power of AI",
    header: <Skeleton3 />,
    className: "md:col-span-2",
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
  },
];
