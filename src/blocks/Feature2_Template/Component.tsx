import React from "react";
import { Container } from "@/components/TemplatePro/containerTemplate";
import {
  SkeletonOne,
} from "@/components/TemplatePro/features-secondary/skeleton/first";
import {
  SkeletonTwo,
} from "@/components/TemplatePro/features-secondary/skeleton/second";
import { HumanIcon, IntegrationIcon, WorkflowIcon } from "@/icons";
import { cn } from "@/lib/utils";
import "@/components/TemplatePro/TemplateStyles.css";
import type { Media as MediaType } from "@/payload-types";

interface MainCard {
  title?: string | null;
  description?: string | null;
  skeleton?: ('first' | 'second') | null;
  logo?: MediaType | string | null;
}

interface Feature {
  icon?: ('workflow' | 'integration' | 'human') | null;
  title?: string | null;
  description?: string | null;
}

interface Feature2TemplateProps {
  mainCards?: Array<MainCard> | null;
  features?: Array<Feature> | null;
}

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">{children}</p>
  );
};

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-80 md:h-96 lg:h-[28rem] flex flex-col overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};

const getIcon = (iconType: 'workflow' | 'integration' | 'human' | null | undefined) => {
  switch (iconType) {
    case 'workflow':
      return <WorkflowIcon className="size-5" />;
    case 'integration':
      return <IntegrationIcon className="size-5" />;
    case 'human':
      return <HumanIcon className="size-5" />;
    default:
      return <WorkflowIcon className="size-5" />;
  }
};

const getSkeleton = (
  skeletonType: 'first' | 'second' | null | undefined,
  logo?: MediaType | string | null
) => {
  switch (skeletonType) {
    case 'first':
      return <SkeletonOne />;
    case 'second':
      return <SkeletonTwo logo={logo} />;
    default:
      return <SkeletonOne />;
  }
};

export const Feature2Template: React.FC<Feature2TemplateProps> = (props) => {
  const {
    mainCards = [
      {
        title: "Agent Studio",
        description: "Design, launch and customize AI agents for marketing, sales, support and ops, built around your workflows.",
        skeleton: "first",
      },
      {
        title: "Multi-Agent Orchestration",
        description: "Coordinate multiple agents across workflows using memory, interrupts, and conditional logic.",
        skeleton: "second",
        logo: null,
      },
    ],
    features = [
      {
        icon: "workflow",
        title: "Workflow Automation",
        description: "Automate campaigns, tickets and CRM updates without manual handoffs.",
      },
      {
        icon: "integration",
        title: "Integration Fabric",
        description: "Connect CRMs, service desks, data warehouses and cloud apps seamlessly.",
      },
      {
        icon: "human",
        title: "Human-in-the-Loop",
        description: "Add reviews, approvals and escalations without slowing work.",
      },
    ],
  } = props || {};

  return (
    <section className="template-container template-container-wrapper pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          {mainCards && mainCards.map((card, index) => {
            const cardTitle = card?.title || "";
            const cardDescription = card?.description || "";
            const skeletonType = card?.skeleton || "first";
            const logo = card?.logo;

            if (!cardTitle) return null;

            return (
              <div key={index} className="relative min-h-[32rem] md:min-h-[36rem] overflow-hidden">
                <CardContent>
                  <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                    {cardTitle}
                  </h2>
                  <CardDescription>
                    {cardDescription}
                  </CardDescription>
                </CardContent>
                <CardSkeleton className={index === 1 ? "mask-radial-from-50% mask-t-from-50%" : ""}>
                  {getSkeleton(skeletonType, logo)}
                </CardSkeleton>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          {features && features.map((feature, index) => {
            const featureTitle = feature?.title || "";
            const featureDescription = feature?.description || "";
            const featureIcon = feature?.icon;

            if (!featureTitle) return null;

            return (
              <div key={index}>
                <div className="flex items-center gap-2">
                  {getIcon(featureIcon)}
                  <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                    {featureTitle}
                  </h3>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-base mt-2">
                  {featureDescription}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

