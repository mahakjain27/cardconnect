import { useParams } from "react-router-dom";
import company from "../data/company";
import people, { defaultSlug } from "../data/people";

// Route-based lookup: /:personSlug selects which person's contact
// details are merged onto the shared company record. No slug (root "/")
// falls back to the default person.
export default function useCompany() {
  const { personSlug } = useParams();
  const person = people[personSlug] ?? people[defaultSlug];

  return {
    ...company,
    person: { name: person.name, title: person.title, photo: person.photo },
    contact: { ...company.contact, ...person.contact },
    social: { ...company.social, ...person.social },
  };
}
