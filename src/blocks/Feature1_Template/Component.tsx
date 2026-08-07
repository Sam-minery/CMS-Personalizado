import React from "react";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { Heading } from "@/components/TemplatePro/headingTemplate";
import { Subheading } from "@/components/TemplatePro/subheadingTemplate";
import {
  Card,
  CardContent,
  CardCTA,
  CardSkeleton,
  CardTitle,
} from "@/components/TemplatePro/features/card_Template";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "@/components/TemplatePro/features/skeletons/first";
import { SkeletonThree } from "@/components/TemplatePro/features/skeletons/third";
import { SkeletonTwo } from "@/components/TemplatePro/features/skeletons/second";
import { sanitizeHTML } from "@/utilities/sanitizeHTML";
import "@/components/TemplatePro/TemplateStyles.css";

interface CardItem {
  title?: string | null;
  skeleton?: ('first' | 'second' | 'third') | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
}

interface Feature1TemplateProps {
  feature1TemplateHeading?: string | null;
  feature1TemplateSubheading?: string | null;
  cards?: Array<CardItem> | null;
}

const getSkeleton = (skeletonType: 'first' | 'second' | 'third' | null | undefined) => {
  switch (skeletonType) {
    case 'first':
      return <SkeletonOne />;
    case 'second':
      return <SkeletonTwo />;
    case 'third':
      return <SkeletonThree />;
    default:
      return <SkeletonOne />;
  }
};

const getCardClassName = (index: number, total: number) => {
  if (index === 0) {
    return "rounded-tl-3xl rounded-bl-3xl";
  }
  if (index === total - 1) {
    return "rounded-tr-3xl rounded-br-3xl";
  }
  return "";
};

export const Feature1Template: React.FC<Feature1TemplateProps> = (props) => {
  const {
    feature1TemplateHeading = "Built for Fast Moving <br /> Teams That Need Control.",
    feature1TemplateSubheading =
      "Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.",
    cards = [
      {
        title: "Prebuilt Agents, Tuned to Your Workflows",
        skeleton: "first",
      },
      {
        title: "Automate Handoffs, Reduce Ops Friction",
        skeleton: "second",
      },
      {
        title: "Approvals, Guardrails, and Full Auditability",
        skeleton: "third",
      },
    ],
  } = props || {};

  return (
    <section className="template-container template-container-wrapper py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="flex xl:flex-row flex-col xl:items-baseline justify-between gap-10">
          <Heading className="text-center lg:text-left template-fade-in">
            <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(feature1TemplateHeading || "") }} />
          </Heading>
          <Subheading className="text-center lg:text-left mx-auto lg:mx-0">
            {feature1TemplateSubheading}
          </Subheading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
          {cards &&
            cards.map((card, index) => {
              const cardTitle = card?.title || "";
              const skeletonType = card?.skeleton || "first";
              const cardLink = card?.link;
              if (!cardTitle) return null;

              return (
                <Card
                  key={index}
                  className={getCardClassName(index, cards.length)}
                >
                  <CardSkeleton>{getSkeleton(skeletonType)}</CardSkeleton>
                  <CardContent>
                    <CardTitle>{cardTitle}</CardTitle>
                    <CardCTA link={cardLink}>
                      <IconPlus />
                    </CardCTA>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

