interface IProps {
    children: React.ReactNode[]
}
const ToursPageLayout: React.FC<IProps> = ({ children }) => {
    return (
        <main className="flex gap-5 justify-between">
            <section className="hidden md:block md:w-[250px] lg:w-[337px] md:shrink-0">
                {children[0]}
            </section>
            <section className="w-full md:grow md:shrink">
                {children[1]}
            </section>
        </main>
    )
}

export default ToursPageLayout
