import { Button, ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { CMSLink } from "@/components/Link";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type ImageProps = {
  src?: string;
  url?: string;
  alt?: string;
};

type ComparisonProducts = {
  title?: string;
  products: Product[];
};

type Product = {
  icon: ImageProps;
  productName: string;
  description: string;
};

type ButtonWithLink = ButtonProps & {
  link: {
    type: 'reference' | 'custom';
    newTab?: boolean;
    reference?: any;
    url?: string;
  };
  iconRight?: boolean;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  comparisonTitle: string;
  comparisonProducts: ComparisonProducts[];
  features: Feature[];
  buttons: ButtonWithLink[];
};

export type Comparison1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// Helper function to convert Payload data to React elements
const convertFeatureItems = (items: unknown[]): React.ReactNode[] => {
  if (!items || !Array.isArray(items)) return [];
  
  return items.map((item, index) => {
    if (typeof item === 'string' || React.isValidElement(item)) {
      return item;
    }
    
    if (typeof item === 'object' && item !== null && 'type' in item) {
      const itemObj = item as { type: string; textValue?: string };
      
      if (itemObj.type === 'check') {
        return <BiCheck key={`check-${index}`} className="size-6" />;
      }
      
      if (itemObj.type === 'x') {
        return <BiX key={`x-${index}`} className="size-6" />;
      }
      
      if (itemObj.type === 'text' && itemObj.textValue) {
        return itemObj.textValue;
      }
    }
    
    if (typeof item === 'object' && item !== null && 'textValue' in item) {
      const itemObj = item as { textValue?: string };
      return itemObj.textValue || '';
    }
    
    return '';
  });
};

export const Comparison1 = (props: Comparison1Props) => {
  const { tagline, heading, description, comparisonTitle, buttons, comparisonProducts, features } = {
    ...Comparison1Defaults,
    ...props,
  };
  
  // Convert features to the expected format
  const convertedFeatures = (features || []).map(feature => ({
    ...feature,
    items: convertFeatureItems(feature.items || [])
  }));
  
  // Convert comparison products to handle media uploads
  const convertedComparisonProducts = (comparisonProducts || []).map(comparison => ({
    ...comparison,
    products: (comparison.products || []).map(product => ({
      ...product,
      icon: {
        src: product.icon?.url || product.icon?.src || '',
        alt: product.icon?.alt || ''
      }
    }))
  }));
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Primera columna - Título de comparación */}
            <div className="hidden h-full flex-col items-start justify-center py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6 bg-gray-50">
              <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                {comparisonTitle}
              </h2>
            </div>
            
            {/* Columnas de productos */}
            {convertedComparisonProducts[0]?.products?.map((product, index) => (
              <ProductPlan 
                key={index} 
                index={index} 
                {...product} 
                columnIndex={index}
              />
            ))}
          </div>
          <FeaturesSection features={convertedFeatures} />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            {(buttons || []).map((button, index) => {
              if (!button) return null;
              
              return (
                <CMSLink
                  key={index}
                  {...button.link}
                  appearance="default"
                  size="default"
                >
                  {button.title || 'Button'}
                  {button.iconRight && <RxChevronRight className="ml-2" />}
                </CMSLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
const ProductPlan = ({ index, columnIndex, ...product }: Product & { index: number; columnIndex?: number }) => {
  const getBackgroundColor = (colIndex: number) => {
    switch (colIndex) {
      case 0:
        return "bg-white"; // Primer producto - blanco
      case 1:
        return "bg-gray-200"; // Segundo producto - gris
      case 2:
        return "bg-white"; // Tercer producto - blanco
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div
      className={clsx(
        "flex h-full flex-col justify-center px-2 py-4 sm:px-4 sm:py-6 lg:p-6",
        getBackgroundColor(columnIndex || index)
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        {product.icon.src && (
          <Image src={product.icon.src} alt={product.icon.alt || ''} width={48} height={48} className="size-12" />
        )}
        <h2 className="text-md font-bold leading-[1.4] md:text-xl">{product.productName}</h2>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }: { features: Feature[] }) => {
  const getBackgroundColor = (colIndex: number) => {
    switch (colIndex) {
      case 0:
        return "bg-white"; // Primer producto - blanco
      case 1:
        return "bg-gray-200"; // Segundo producto - gris
      case 2:
        return "bg-white"; // Tercer producto - blanco
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div>
      {features.map((feature, index) => (
        <div key={index}>
          <div
            key={index}
            className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]"
          >
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6 bg-gray-50">
              {feature.text}
            </p>
            {feature.items.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6",
                  getBackgroundColor(index)
                )}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Comparison1Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  comparisonTitle: "Product comparison",
  comparisonProducts: [
    {
      title: "Product comparison",
      products: [
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Product 1",
          },
          productName: "Product 1",
          description: "",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Product 2",
          },
          productName: "Product 2",
          description: "",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Product 3",
          },
          productName: "Product 3",
          description: "",
        },
      ],
    },
  ],
  features: [
    {
      text: "Feature text goes here",
      items: ["Unlimited", "10", "5"],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck key="check-1" className="size-6" />, <BiCheck key="check-2" className="size-6" />, <BiCheck key="check-3" className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck key="check-4" className="size-6" />, <BiCheck key="check-5" className="size-6" />, <BiX key="x-1" className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck key="check-6" className="size-6" />, <BiX key="x-2" className="size-6" />, <BiX key="x-3" className="size-6" />],
    },
    {
      text: "Feature text goes here",
      items: [<BiCheck key="check-7" className="size-6" />, <BiX key="x-4" className="size-6" />, <BiCheck key="check-8" className="size-6" />],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      link: {
        type: "custom",
        url: "#"
      }
    },
    { 
      title: "Button", 
      variant: "link", 
      size: "link", 
      iconRight: true,
      link: {
        type: "custom",
        url: "#"
      }
    },
  ],
};
