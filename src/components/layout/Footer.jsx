function Footer() {
    return (
        <footer className="flex flex-col w-full p-4 bg-surface-footer">
            {/* company info and sitemap container */}
            <div className="flex flex-wrap w-full justify-between">

                {/* company info */}
                <div className="flex flex-col basis-1/2 p-4 space-y-4 min-w-80">
                    <h2 className="text-text-on-footer">INFNOVA Academy</h2>
                    <p className="text-text-muted font-normal">Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col basis-1/4 p-4 space-y-4 min-w-40">
                    <h2 className="text-text-on-footer">Quick Links</h2>
                    <ul className="text-text-muted font-normal space-y-2 transition-all duration-200">
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">About Us</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Courses</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Instructors</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div className="flex flex-col basis-1/4 p-4 space-y-4 min-w-40">
                    <h2 className="text-text-on-footer">Support</h2>
                    <ul className="text-text-muted font-normal space-y-2 transition-all duration-200">
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Help Center</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Terms of Service</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-text-on-footer active:scale-98 cursor-pointer">FAQ</li>
                    </ul>
                </div>
            </div>

            {/* copyright container */}
            <div className="flex flex-1 justify-center py-6 border-t border-border-footer">
                <p className="text-text-muted font-normal text-center">&copy; 2026 INFNOVA Technologies. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer