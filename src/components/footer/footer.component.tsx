import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
const Footer: React.FC = () => {
    return (
        <footer className="footer p-10 py-20 bg-neutral text-neutral-content">
            <div>
                <Image
                    src="/images/logo-white.png"
                    alt=""
                    width="80px"
                    height="80px"
                    objectFit="contain"
                />
                <p>
                    <strong>Passager</strong> Industries Ltd.
                    <br />
                    Made by{' '}
                    <strong>
                        <a
                            href="https://github.com/alifarajzade"
                            className="link link-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ali Farajzade
                        </a>{' '}
                    </strong>
                    &copy;{' '}
                    <a
                        href="https://github.com/AliFarajzade/passager-frontend"
                        target="_blank"
                        rel="noreferrer"
                        className="link link-primary"
                    >
                        Passager 2022
                    </a>
                </p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link href="/contact">Contact Us</Link>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://github.com/alifarajzade"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub size="2.5em" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
