type IProps = {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => (
    <>
        <main>{children}</main>
    </>
)

export default Layout
