export default function Preloader() {
    return (
        <>
            
            <div className="loader-wrap">
                <div className="preloader">
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="o" className="letters-loading">
                                    o
                                </span>
                                <span data-text-preloader="p" className="letters-loading">
                                    p
                                </span>
                                <span data-text-preloader="t" className="letters-loading">
                                    t
                                </span>
                                <span data-text-preloader="c" className="letters-loading">
                                    c
                                </span>
                                <span data-text-preloader="a" className="letters-loading">
                                    a
                                </span>
                                <span data-text-preloader="r" className="letters-loading">
                                    r
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>


        </>
    )
}
