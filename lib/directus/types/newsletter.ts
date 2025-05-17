// Type definitions for newsletter-related collections

export interface Newsletter {
  id: string;
  title: string;
  content: string;
  send_date: string;
  status: 'draft' | 'scheduled' | 'sent';
  recipients?: (NewsletterSubscriber | string)[] | Subscriber[];
}

export interface Subscriber {
  id: string;
  email: string;
  name: string;
  subscribed: boolean;
  subscription_date: string;
}

// Junction table for newsletter-subscriber many-to-many relationship
export interface NewsletterSubscriber {
  id: string;
  newsletters_id: string | Newsletter;
  subscribers_id: string | Subscriber;
}
