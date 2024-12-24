interface Service {
  name: string;
  slug: string;
  meta_author: string;
  meta_keywords: string;
  meta_description: string;
  description: string | undefined;
  image: any;
}

interface ServiceDetailsProps {
  service: Service | null;
}

export default ServiceDetailsProps