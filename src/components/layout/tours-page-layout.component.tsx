interface IProps {
    children: React.ReactNode[]
    rowReverse?: boolean
}
const ToursPageLayout: React.FC<IProps> = ({ children, rowReverse }) => {
    return (
        <main
            className={`flex gap-5 justify-between p-5 ${
                rowReverse && 'flex-row-reverse'
            }`}
        >
            <section className="hidden lg:w-[337px] xl:block xl:shrink-0">
                {children[0]}
            </section>
            <section className="w-full lg:grow lg:shrink">
                {children[1]}
            </section>
        </main>
    )
}

export default ToursPageLayout
