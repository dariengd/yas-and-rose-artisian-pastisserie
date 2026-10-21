import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/site";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQ.map(({ q, a }, i) => (
        <AccordionItem key={q} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="py-5 font-serif text-lg normal-case tracking-normal text-foreground transition-colors hover:text-gold-deep hover:no-underline md:text-xl [&_svg]:text-gold-deep">
            {q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
