// Builds and downloads a .vcf contact file from a company/person record.
export function buildVCard(company) {
  const { person, contact, name } = company;

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${person.name};;;;`,
    `FN:${person.name}`,
    `ORG:${name}`,
    `TITLE:${person.title}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL:${contact.email}`,
    `URL:${contact.website}`,
    "END:VCARD",
  ].join("\n");
}

export function downloadVCard(company) {
  const vcard = buildVCard(company);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${company.person.name.replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
