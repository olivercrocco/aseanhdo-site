// Organisation photography, rehosted locally from the legacy AHDO site.
// Originals lived on the old Webflow CDN; now served from /public/images so the
// new site has no external image dependency.

export const MEDIA = {
  experts: {
    src: "/images/experts.jpg",
    alt: "AHDO regional experts collaborating on a human development programme",
  },
  jakartaOffice: {
    src: "/images/jakarta-office.jpg",
    alt: "The AHDO office in Jakarta",
  },
  publications: {
    src: "/images/publications.jpg",
    alt: "AHDO publications on human development and the ethics of ASEAN",
  },
  advocacy: {
    src: "/images/advocacy.jpg",
    alt: "AHDO advocacy for people-centred development across ASEAN",
  },
  signing: {
    src: "/images/signing-ceremony.jpeg",
    alt: "AHDO leaders at a signing ceremony",
  },
} as const;

export type MediaKey = keyof typeof MEDIA;
