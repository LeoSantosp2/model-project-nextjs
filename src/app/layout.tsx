export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <title>Model Project NextJs</title>
      <body>{children}</body>
    </html>
  );
}
