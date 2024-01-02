

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
            <div className="footer">
                <hr />
                <div className="footer-flex">
                    <span>Emmanuel Umeh</span>

                    <span>&copy;{currentYear}</span>
                </div>
            </div>
        </>
    )
}

export default Footer;