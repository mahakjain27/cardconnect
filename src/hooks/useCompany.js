import company from "../data/company";

// Single-tenant for now: always returns the one configured company.
// Once this becomes multi-company, swap the body for a lookup by
// slug/subdomain (route param, API call, etc.) while keeping the
// same return shape so components never need to change.
export default function useCompany() {
  return company;
}
