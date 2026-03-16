'use client'

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Checkbox } from "@/components/ui/checkbox";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useState } from "react";
import RichText from '@/components/RichText';
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

type Props = {
  content?: DefaultTypedEditorState;
  button: ButtonProps;
  terms?: DefaultTypedEditorState;
};

export type Contact1BlockType = {
  blockName?: string
  blockType?: 'contact1'
  content?: DefaultTypedEditorState;
  button: ButtonProps;
  terms?: DefaultTypedEditorState;
}

export const Contact1 = (props: Contact1BlockType) => {
  const { content, button, terms } = {
    ...Contact1Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);
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
            { field: 'name', value: name },
            { field: 'email', value: email },
            { field: 'aboutProject', value: message },
            { field: 'source', value: 'contact1' }
          ],
          formType: 'contact1'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("¡Gracias! Tu mensaje ha sido enviado correctamente.");
        // Resetear formulario después del envío exitoso
        setName("");
        setEmail("");
        setMessage("");
        setAcceptTerms(false);
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

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          {content && (
            <RichText data={content} />
          )}
        </div>
        <form className="mx-auto grid w-full max-w-md grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Nombre
            </Label>
            <Input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje..."
              className="min-h-[11.25rem] overflow-auto"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 flex items-start space-x-3 text-sm md:mb-4">
            <Checkbox 
              id="terms" 
              checked={acceptTerms} 
              onCheckedChange={setAcceptTerms}
              required
              className="mt-1 flex-shrink-0"
            />
            <Label htmlFor="terms" className="cursor-pointer leading-relaxed">
              {terms && <RichText data={terms} />}
            </Label>
          </div>
          <div className="text-center">
            <Button 
              type="submit"
              size={button.size}
              variant={button.variant}
              className="min-w-[120px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : button.title}
            </Button>
          </div>
          {submitMessage && (
            <div className={`mt-4 text-center text-sm ${submitMessage.includes("Error") ? "text-red-600" : "text-green-600"}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export const Contact1Defaults: Props = {
  content: undefined,
  button: { 
    title: "Enviar",
    variant: "primary",
    size: "sm"
  },
  terms: undefined,
};
