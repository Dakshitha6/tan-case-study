"use client";
import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[24rem] text-start">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          itemKey={i + 1}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  return (
    <div>
      <Image
        src="/images/casestudy1.png"
        alt="image"
        width={451}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div>
      <Image
        src="/images/casestudy2.png"
        alt="image"
        width={451}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <Image
        src="/images/casestudy3.png"
        alt="image"
        width={451}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <Image
        src="/images/casestudy4.png"
        alt="image"
        width={941}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <Image
        src="/images/casestudy5.png"
        alt="image"
        width={451}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <Image
        src="/images/casestudy6.png"
        alt="image"
        width={451}
        height={215}
      ></Image>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <Image
        src="/images/casestudy7.png"
        alt="image"
        width={941}
        height={215}
      ></Image>
    </div>
  );
};
const items = [
  {
    title: "Quantumloop",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
  {
    title: "The dawn of Innovation",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.v
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
  },
  {
    title: "The dawn of Innovation",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-2",
  },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  itemKey,
  className,
  title,
  description,
  header,
}: {
  itemKey: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  const router = useRouter();
  function onClick() {
    console.log("clicked", itemKey);
    router.push(`/case-studies/${itemKey}`);
  }
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      onClick={onClick}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
