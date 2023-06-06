import React from "react";
import { Homelayout } from "../layouts";
import { HomeIcons } from "../components";
interface IconType {
  id: number;
  icon: string;
  title: string;
  accessibilite: string;
  links: string;
}

const iconData: IconType[] = [
  {
    id: 1,
    icon: "/icons/calendar.png",
    title: "Calendar",
    accessibilite: "calendar",
    links: "calendar",
  },
  {
    id: 2,
    icon: "/icons/note.png",
    title: "Notes",
    accessibilite: "note",
    links: "note",
  },
  {
    id: 3,
    icon: "/icons/people.png",
    title: "Members",
    accessibilite: "membre",
    links: "membre",
  },
  {
    id: 4,
    icon: "/icons/contacts.png",
    title: "Contacts",
    accessibilite: "contact",
    links: "contacts",
  },
  {
    id: 5,
    icon: "/icons/crm.png",
    title: "CRM",
    accessibilite: "CRM",
    links: "crm",
  },
  {
    id: 6,
    icon: "/icons/sales.png",
    title: "Sales",
    accessibilite: "sales",
    links: "sales",
  },
  {
    id: 7,
    icon: "/icons/store.png",
    title: "Point of Sale",
    accessibilite: "POS",
    links: "pos",
  },
  {
    id: 8,
    icon: "/icons/stock.png",
    title: "Inventory",
    accessibilite: "inventory",
    links: "inventory",
  },
  {
    id: 9,
    icon: "/icons/purchase.png",
    title: "Purchase",
    accessibilite: "purchase",
    links: "purchase",
  },
  {
    id: 10,
    icon: "/icons/hrm.png",
    title: "HRM",
    accessibilite: "HRM",
    links: "hrm",
  },
];
const Home: React.FC = () => {
  return (
    <>
      <Homelayout>
        <div className="grid grid-cols-5 gap-8 justify-center items-center pt-20 md:justify-end md:items-center">
          {iconData.map((icon) => (
            <HomeIcons
              key={icon.id}
              photo={icon.icon}
              title={icon.title}
              accessibilite={icon.accessibilite}
              links={icon.links}
            />
          ))}
        </div>
      </Homelayout>
    </>
  );
};

export default Home;
