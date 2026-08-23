import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fan Hu — AI for Electronic Design Automation',
  description: 'Fan Hu is a Ph.D. candidate at Shanghai Jiao Tong University researching timing-aware EDA, AI for EDA, and reliability-aware chip design.',
  keywords: ['Fan Hu', 'EDA', 'AI for EDA', 'chip design', 'Shanghai Jiao Tong University'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
