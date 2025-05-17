
const Footer = () => {
    return (
        <section className="c-space pd-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">

                <div className="social-icon">
                    <a href="https://github.com/Raiyanhq" target="_blank" rel="noopener noreferrer">
                        <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/mdraiyanhaque/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.instagram.com/raiyan____hq/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                    </a>
                </div>

            </div>
            <p className="text-white-500"> 2025 Raiyan Haque. All Rights Reserved. </p>
        </section>
    )
}
export default Footer
