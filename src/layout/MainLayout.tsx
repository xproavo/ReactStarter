export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div>

        <main className="">
            {children}
        </main>
        
    </div>
  )
}