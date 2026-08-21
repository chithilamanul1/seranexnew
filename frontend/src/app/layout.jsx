import '../index.css';

export const metadata = {
  title: 'Seranex',
  description: 'Custom software and AI solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
