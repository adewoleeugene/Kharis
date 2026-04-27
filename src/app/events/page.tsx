import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { EventsExplorer } from "@/components/events/events-explorer";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Kharis gatherings — KP2 camps, Bring-A-Soul Sundays, sports days, praise nights, fasting seasons, marriage sessions and more, across the United Kingdom and internationally.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What's ahead"
        title="Gather with the family."
        intro="From KP2 camps to Bring-A-Soul Sundays, fasting seasons to marriage sessions — every Kharis event is designed to grow the family and reach the city."
      />
      <EventsExplorer />
    </>
  );
}
