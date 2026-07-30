// Shares the card link via the native share sheet where available,
// falling back to copying the link to the clipboard.
export async function shareContact(company) {
  const shareData = {
    title: `${company.person.name} — ${company.name}`,
    text: `${company.person.name} · ${company.person.title} at ${company.name}`,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return "shared";
    } catch {
      return "cancelled";
    }
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(shareData.url);
    return "copied";
  }

  return "unsupported";
}
