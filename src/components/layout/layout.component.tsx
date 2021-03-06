import Footer from '../footer/footer.component'
import AuthModal from '../modal/auth-modal.component'
import Navbar from '../navbar/navbar.component'

type IProps = {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => (
    <div className="">
        <Navbar />
        <main className="max-w-screen-2xl mx-auto">{children}</main>
        <Footer />
        <AuthModal />
    </div>
)

export default Layout
