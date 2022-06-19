interface IProps {
    children: React.ReactNode[]
}

const TourPageLayout: React.FC<IProps> = ({ children }) => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-8 gap-8">
            <section className="md:col-span-5 lg:col-span-6">
                {children[0]}
            </section>
            <section className="md:col-span-3 lg:col-span-2">
                {children[1]}
            </section>
        </main>
    )
}

export default TourPageLayout
