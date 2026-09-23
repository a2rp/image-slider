import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";
import styles from "./styles.module.scss";

const slides = [
    { src: `${process.env.PUBLIC_URL}/slide-1.jpg`, alt: "Mountain landscape beneath a bright sky", title: "Explore the view", text: "A responsive slider with local image assets." },
    { src: `${process.env.PUBLIC_URL}/slide-2.jpg`, alt: "Dog sitting outdoors", title: "Simple controls", text: "Move through the collection with clear controls." },
    { src: `${process.env.PUBLIC_URL}/slide-3.jpg`, alt: "Rocky valley landscape", title: "Built to adapt", text: "The layout stays comfortable across screen sizes." },
    { src: `${process.env.PUBLIC_URL}/slide-4.jpg`, alt: "Forest path surrounded by green trees", title: "Focused presentation", text: "Use captions to give every visual a little context." },
    { src: `${process.env.PUBLIC_URL}/slide-5.jpg`, alt: "Open field with a soft evening light", title: "Optional autoplay", text: "Turn autoplay on when you want the slider to keep moving." },
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

    useEffect(() => {
        if (!autoPlay) return undefined;
        const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 3500);
        return () => window.clearInterval(timer);
    }, [autoPlay]);

    const previous = () => setCurrent((value) => (value - 1 + slides.length) % slides.length);
    const next = () => setCurrent((value) => (value + 1) % slides.length);

    return (
        <main className={styles.container} id="slider">
            <section className={styles.main} aria-labelledby="slider-title">
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Responsive visual component</p>
                    <h1 id="slider-title">Image Slider</h1>
                    <p>A practical React image slider with local images, keyboard-friendly controls, dots, and optional autoplay.</p>
                </div>
                <div className={styles.toolbar}>
                    <button className={styles.playButton} type="button" onClick={() => setAutoPlay((value) => !value)} aria-pressed={autoPlay}>
                        {autoPlay ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
                        {autoPlay ? "Pause autoplay" : "Start autoplay"}
                    </button>
                    <span className={styles.counter} aria-live="polite">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
                </div>
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.slider} style={{ transform: `translateX(-${current * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <article className={styles.imageContainer} key={slide.src}>
                                    <img src={slide.src} alt={slide.alt} />
                                    <div className={styles.caption}>
                                        <span>Slide {String(index + 1).padStart(2, "0")}</span>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <button className={`${styles.arrow} ${styles.previous}`} type="button" onClick={previous} aria-label="Previous slide"><FiChevronLeft aria-hidden="true" /></button>
                        <button className={`${styles.arrow} ${styles.next}`} type="button" onClick={next} aria-label="Next slide"><FiChevronRight aria-hidden="true" /></button>
                        <div className={styles.dotsContainer} role="tablist" aria-label="Choose slide">
                            {slides.map((slide, index) => (
                                <button className={`${styles.dot} ${index === current ? styles.active : ""}`} type="button" key={slide.src} onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} aria-selected={index === current} role="tab">
                                    {String(index + 1).padStart(2, "0")}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about} id="about" aria-labelledby="about-title">
                <p className={styles.eyebrow}>About this component</p>
                <h2 id="about-title">A small pattern with room to grow.</h2>
                <p>The slider keeps its images inside the project, uses percentage-based movement, and separates controls from presentation so it can be reused in a landing page, gallery, or product showcase.</p>
            </section>
        </main>
    );
};

export default ImageSlider;
