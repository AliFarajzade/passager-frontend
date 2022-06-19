interface IProps {
    children: React.ReactNode[]
}

const TourPageLayout: React.FC<IProps> = ({ children }) => {
    return (
        <main className="grid grid-cols-1 xl:grid-cols-8 gap-2 xl:gap-4 p-4 ">
            <section className="xl:col-span-6">{children[0]}</section>
            <section className="xl:col-span-2">{children[1]}</section>
        </main>
    )
}

export default TourPageLayout
