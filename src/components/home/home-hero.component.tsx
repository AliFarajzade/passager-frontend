import styles from './home-hero.module.scss'

const HomeHero = () => {
    return (
        <header className={styles.hero}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-[.45em]">
                OUTDOORS
            </h1>
            <h4 className="sm:text-2xl font-semibold tracking-[.4em]">
                IS WHERE LIFE HAPPENS
            </h4>
        </header>
    )
}

export default HomeHero
