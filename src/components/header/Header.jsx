import React from 'react';
import SchoolLogo from '../../assets/icons/lws-logo-en.svg';

const HeaderComponent = () => {
    return (
        <nav className="py-6">
            <div
                className="container mx-auto flex items-center justify-between gap-x-6"
            >
                {/* Logo  */}
                <a href="/">
                    <img
                        className="h-[40px]"
                        src={SchoolLogo}
                        alt="Lws"
                    />
                </a>

                {/* Logo Ends  */}
                <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">Get Admission</a>
            </div>
        </nav>
    );
}

export default HeaderComponent;
