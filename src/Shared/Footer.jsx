
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer bg-blue-900 text-white p-10">
                <div>
                    <img src="/public/Images/I_ll_Design_Your_Travel_Logo-removebg-preview.png" className="w-[60%]" alt="" />
                    <p>A Vacation tour and travel experience offers the perfect opportunity <br /> to explore new destinations, unwind, and immerse yourself in different <br /> cultures. Whether it’s a guided tour through historic cities, a beach <br /> getaway, or an adventure-filled journey through natural landscapes, <br /> a vacation tour is tailored to provide relaxation, discovery, and enjoyment.</p>
                </div>
                <nav className="mt-14">
                    <h6 className="footer-title font-bold">Company</h6>
                    <a className="link link-hover italic">About us</a>
                    <a className="link link-hover italic">Contact</a>
                    <a className="link link-hover italic">Jobs</a>
                    <a className="link link-hover italic">Press kit</a>
                </nav>
                <nav className="mt-14">
                    <h6 className="footer-title font-bold">Legal</h6>
                    <a className="link link-hover italic">Terms of use</a>
                    <a className="link link-hover italic">Privacy policy</a>
                    <a className="link link-hover italic">Cookie policy</a>
                </nav>
                <form className="mt-14">
                    <h6 className="footer-title font-bold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white italic">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-blue-800 text-white font-bold uppercase hover:text-blue-800 hover:bg-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;