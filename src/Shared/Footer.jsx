import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";

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
                <div>
                    <p className="text-2xl font-medium font-serif">Social Links:</p>
                    <div>
                        <a href="www.facebook.com" className="flex gap-2 items-center font-serif"><FaFacebook className="text-2xl"></FaFacebook> Facebook</a>
                        <a href="www.instagram.com " className="flex gap-2 my-3 items-center font-serif"><FaInstagram className="text-2xl"></FaInstagram> Instagram</a>
                        <a href="www.linkedin.com" className="flex gap-2 items-center font-serif"><FaLinkedin className="text-2xl"></FaLinkedin> Linkedin</a>
                        <a href="www.pinterest.com" className="flex gap-2 items-center font-serif mt-3"><FaPinterest className="text-2xl"></FaPinterest> Pinterest</a>
                    </div>
                </div>
            </footer>
                <div className="text-center bg-primary text-white font-bold p-2">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Tourists Management Service</p>
                </div>
        </div>
    );
};

export default Footer;