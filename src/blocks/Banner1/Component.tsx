"use client";

import React, { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

type MediaImage = {
  id: string;
  url: string;
  alt?: string;
  filename?: string;
};

type Props = {
  heading: string;
  description: string;
  logo?: MediaImage;
  logoUrl?: string;
  inputPlaceholder: string;
  button: ButtonProps;
};

export type Banner1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner1 = (props: Banner1Props) => {
  const { heading, description, logo, logoUrl, inputPlaceholder, button } = {
    ...Banner1Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);
  const [emailInput, setEmailInput] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/form-custom-2-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionData: [
            { field: 'email', value: emailInput },
            { field: 'name', value: emailInput }, // Usar email como nombre por defecto
            { field: 'source', value: 'banner1' }
          ],
          formType: 'banner1'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("¡Gracias! Te hemos enviado un email de confirmación.");
        setEmailInput("");
      } else {
        setSubmitMessage("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section id="relume" className="px-[5%]">
      <div className="container relative flex flex-col justify-start border border-border-primary bg-neutral-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          <a href={logoUrl || "#"} className="flex-none">
            <Image 
              src={logo?.url || logoUrl || "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"} 
              alt={logo?.alt || "Logo"} 
              width={32} 
              height={32} 
              className="mr-4 hidden lg:block" 
            />
          </a>
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <form
          className="grid w-full max-w-xs flex-1 gap-3 sm:grid-cols-[1fr_max-content] sm:gap-4 lg:flex-none"
          onSubmit={handleSubmit}
        >
          <Input
            id="email"
            type="email"
            placeholder={inputPlaceholder}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
          <Button {...button} disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : button.title}
          </Button>
        </form>
        {submitMessage && (
          <div className={`mt-2 text-sm ${submitMessage.includes("Error") ? "text-red-600" : "text-green-600"}`}>
            {submitMessage}
          </div>
        )}
        <button className="absolute right-2 top-2 ml-4 md:static">
          <RxCross2 className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner1Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logoUrl: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Sign up",
    size: "sm",
  },
};
