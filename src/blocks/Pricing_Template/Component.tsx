import React from "react";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { Heading } from "@/components/TemplatePro/headingTemplate";
import { Subheading } from "@/components/TemplatePro/subheadingTemplate";
import { LoopIcon, UsersIcon, LockIcon } from "@/icons";
import { Button } from "@/components/ui/buttonTemplate";
import { CMSLink } from "@/components/Link";
import "@/components/TemplatePro/TemplateStyles.css";

// Simple check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6666 5L7.49998 14.1667L3.33331 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PricingCardProps {
  price?: string | null;
  description?: string | null;
  ctaLink?: {
    type?: ('reference' | 'custom') | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  };
  ctaText?: string | null;
  steps?: Array<{ item?: string | null }> | null;
}

interface PricingTemplateProps {
  pricingTemplateTopText?: string | null;
  pricingTemplateHeading?: string | null;
  pricingTemplateSubheading?: string | null;
  features?: Array<{
    icon?: ('lock' | 'users' | 'loop') | null;
    text?: string | null;
  }> | null;
  pricingCards?: Array<PricingCardProps> | null;
}

const PricingCard: React.FC<PricingCardProps> = ({
  price = "10",
  description = "Perfect for individuals or small teams exploring automation.",
  ctaLink = { type: 'custom', url: '/' },
  ctaText = "Start your free trial",
  steps = [],
}) => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <Heading>
          ${price}
          <span className="text-neutral-400 text-sm md:text-xl lg:text-3xl">
            /mo
          </span>
        </Heading>
        <Subheading className="mt-4">{description}</Subheading>
        {ctaLink && (
          <Button asChild className="mt-4 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
            <CMSLink {...ctaLink}>
              {ctaText}
            </CMSLink>
          </Button>
        )}
      </div>
      <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
        {steps && steps.map((step, index) => (
          <Step key={index} title={step?.item || ""} />
        ))}
      </ul>
    </div>
  );
};

const Step: React.FC<{ title: string }> = ({ title }) => {
  return (
    <li>
      <CheckIcon className="size-5 text-neutral-500" />
      <p className="text-sm md:text-base">{title}</p>
    </li>
  );
};

export const PricingTemplate: React.FC<PricingTemplateProps> = (props) => {
  const {
    pricingTemplateTopText = "Trusted by 500+ enterprise companies",
    pricingTemplateHeading = "Affordable pricing. <br /> Easy scaling.",
    pricingTemplateSubheading = "Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you're ready",
    features = [
      { icon: 'lock', text: 'Built-in Guardrails' },
      { icon: 'users', text: 'Agent Orchestration' },
      { icon: 'loop', text: 'Human-in-the-Loop' },
    ],
    pricingCards = [
      {
        price: "10",
        description: "Perfect for individuals or small teams exploring automation.",
        ctaLink: { type: 'custom', url: '/' },
        ctaText: "Start your free trial",
        steps: [
          { item: "1 AI Agent Included" },
          { item: "Standard Integrations" },
          { item: "Basic Approval Flows" },
          { item: "7 Day activity logs" },
        ],
      },
      {
        price: "60",
        description: "Ideal for growing teams ready to scale automation safely.",
        ctaLink: { type: 'custom', url: '/' },
        ctaText: "Contact Sales",
        steps: [
          { item: "Upto 5 AI Agents" },
          { item: "Multi Agent Orchestration" },
          { item: "Advanced Approval Flows" },
          { item: "30 Day activity logs" },
          { item: "ROI Insights" },
        ],
      },
    ],
  } = props || {};

  const getIcon = (iconType: 'lock' | 'users' | 'loop' | null | undefined) => {
    switch (iconType) {
      case 'lock':
        return <LockIcon />;
      case 'users':
        return <UsersIcon />;
      case 'loop':
        return <LoopIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="template-container template-container-wrapper py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <Subheading className="mt-2">
            {pricingTemplateTopText}
          </Subheading>
          <Heading className="template-fade-in">
            <span dangerouslySetInnerHTML={{ __html: pricingTemplateHeading || "" }} />
          </Heading>
          <Subheading className="mt-4">
            {pricingTemplateSubheading}
          </Subheading>
          {features && features.length > 0 && (
            <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
              {features.map((feature, index) => (
                <li key={index}>
                  {getIcon(feature.icon)}
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {pricingCards && pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              price={card.price}
              description={card.description}
              ctaLink={card.ctaLink}
              ctaText={card.ctaText}
              steps={card.steps}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

