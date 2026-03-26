import Logo from "../assets/images/MomCare.svg";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 animate-fadeIn">

            <div className="relative w-20 h-20 flex items-center justify-center">

                {/* Orbiting dots */}
                <div className="absolute w-full h-full animate-[spin_2.2s_linear_infinite]">

                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/90 rounded-full"></span>

                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/70 rounded-full"></span>

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/60 rounded-full"></span>

                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/80 rounded-full"></span>

                </div>

                {/* Breathing logo */}
                <img
                    src={Logo}
                    alt="MomCare Logo"
                    className="w-12 h-12 animate-breathe"
                />

            </div>

        </div>
    );
};

export default PageLoader;