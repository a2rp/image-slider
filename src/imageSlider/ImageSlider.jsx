import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const [totalSlides,] = useState(5);
    const [countSlides, setCountSlides] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [autoPlayFlag, setAutoPlayFlag] = useState(false);

    const handlePreviousClick = () => {
        let value = countSlides;
        value += 1;
        if (value === 1) {
            value = -4;
        }
        setCountSlides(value);
        console.log(value);
        const slider = sliderRef.current;
        slider.style.cssText = `transform: translateX(${400 * value}px);`;
    };

    const handleNextClick = () => {
        let value = countSlides;
        value -= 1;
        if (value === -5) {
            value = 0;
        }
        setCountSlides(value);
        // console.log(value);
        const slider = sliderRef.current;
        slider.style.cssText = `transform: translateX(${400 * value}px);`;
    };

    const handleDotClick = (value) => {
        setCountSlides(value);
        const slider = sliderRef.current;
        slider.style.cssText = `transform: translateX(${400 * value}px);`;
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (autoPlay === false) return;
            setAutoPlayFlag(autoPlayFlag => !autoPlayFlag);
            handlePreviousClick();
        }, 1000);
        return () => clearTimeout(timeout);
    }, [autoPlayFlag]);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Image Slider</div>

                <div className={styles.autoPlayContainer}>
                    <input
                        id="imageSliderAutoPlay"
                        type="checkbox"
                        value={autoPlay}
                        onChange={() => { setAutoPlay(!autoPlay); setAutoPlayFlag(!autoPlayFlag); setCountSlides(0); }} />
                    <label htmlFor="imageSliderAutoPlay">Auto play</label>
                </div>

                <div className={styles.sliderContainer}>
                    <div className={styles.sliderWrapper}>
                        <div ref={sliderRef} className={styles.slider}>
                            <div className={styles.imageContainer}
                                style={{ backgroundImage: "url(https://picsum.photos/400/450)" }}
                            ><span>1</span></div>
                            <div className={styles.imageContainer}
                                style={{ backgroundImage: "url(https://picsum.photos/400/451)" }}
                            ><span>2</span></div>
                            <div className={styles.imageContainer}
                                style={{ backgroundImage: "url(https://picsum.photos/400/452)" }}
                            ><span>3</span></div>
                            <div className={styles.imageContainer}
                                style={{ backgroundImage: "url(https://picsum.photos/400/453)" }}
                            ><span>4</span></div>
                            <div className={styles.imageContainer}
                                style={{ backgroundImage: "url(https://picsum.photos/400/454)" }}
                            ><span>5</span></div>
                        </div>

                        <div
                            className={styles.prev}
                            onClick={handlePreviousClick}
                        ><GrPrevious className={styles.icon} /></div>
                        <div
                            className={styles.next}
                            onClick={handleNextClick}
                        ><GrNext className={styles.icon} /></div>

                        <div className={styles.dotsContainer}>
                            <div className={`${styles.dot} dot1`} onClick={() => handleDotClick(0)}>1</div>
                            <div className={`${styles.dot} dot2`} onClick={() => handleDotClick(-1)}>2</div>
                            <div className={`${styles.dot} dot3`} onClick={() => handleDotClick(-2)}>3</div>
                            <div className={`${styles.dot} dot4`} onClick={() => handleDotClick(-3)}>4</div>
                            <div className={`${styles.dot} dot5`} onClick={() => handleDotClick(-4)}>5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider

