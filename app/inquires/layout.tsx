import { InquireProvider } from '../components/InquireContext'

export default function InquiresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <InquireProvider>
      {children}
    </InquireProvider>
  )
}