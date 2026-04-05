import { useEffect } from 'react';
import { site } from '../config/site';

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function PageWrapper({ title, description, children }: PageWrapperProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name;
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return <>{children}</>;
}
