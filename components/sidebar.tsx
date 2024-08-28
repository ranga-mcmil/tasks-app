import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Sidebar() {
  return (
    <div className="hidden sm:block w-64 bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">Category</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-design" /> Design
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-development" /> Development
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-writing" /> Writing
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-marketing" /> Marketing
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="location">
              <AccordionTrigger className="text-base">Location</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-remote" /> Remote
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-san-francisco" /> San Francisco
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-new-york" /> New York
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-london" /> London
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="deadline">
              <AccordionTrigger className="text-base">Deadline</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="deadline-this-week" /> This Week
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="deadline-this-month" /> This Month
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="deadline-this-quarter" /> This Quarter
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="deadline-anytime" /> Anytime
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
  );
}
