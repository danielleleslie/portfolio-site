import React, { useState } from 'react';
import { ReactComponent as Email } from '../media/socials/email.svg';
import { ReactComponent as EmailHover } from '../media/socials/email-hover.svg';
import { ReactComponent as Github } from '../media/socials/github.svg';
import { ReactComponent as GithubHover } from '../media/socials/github-hover.svg';
import { ReactComponent as Phone } from '../media/socials/phone.svg';
import { ReactComponent as PhoneHover } from '../media/socials/phone-hover.svg';
import { ReactComponent as Linked } from '../media/socials/linked.svg';
import { ReactComponent as LinkedHover } from '../media/socials/linked-hover.svg';


const Footer = () => {
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [isLinkedHovered, setIsLinkedHovered] = useState(false);
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);

    const handleEmailMouseEnter = () => {
        setIsEmailHovered(true);
    };

    const handleEmailMouseLeave = () => {
        setIsEmailHovered(false);
    };

    const handleLinkedMouseEnter = () => {
        setIsLinkedHovered(true);
    };

    const handleLinkedMouseLeave = () => {
        setIsLinkedHovered(false);
    };

    const handleGithubMouseEnter = () => {
        setIsGithubHovered(true);
    };

    const handleGithubMouseLeave = () => {
        setIsGithubHovered(false);
    };

    const handlePhoneMouseEnter = () => {
        setIsPhoneHovered(true);
    };

    const handlePhoneMouseLeave = () => {
        setIsPhoneHovered(false);
    };


    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <p className='py-4'>
                </p>

                <div className='flex justify-between md:w-[75%] my-6'>
                    <div className='email'>
                        {isEmailHovered ? (
                            <EmailHover height={'30px'} width={'30px'} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
                        ) : (
                            <Email height={'30px'} width={'30px'} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
                        )}
                    </div>

                    <div className='linked-in'>
                        {isLinkedHovered ? (
                            <LinkedHover height={'30px'} width={'30px'} onMouseEnter={handleLinkedMouseEnter} onMouseLeave={handleLinkedMouseLeave} />
                        ) : (
                            <Linked height={'30px'} width={'30px'} onMouseEnter={handleLinkedMouseEnter} onMouseLeave={handleLinkedMouseLeave} />
                        )}
                    </div>

                    <div className='git'>
                        {isGithubHovered ? (
                            <GithubHover height={'30px'} width={'30px'} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave} />
                        ) : (
                            <Github height={'30px'} width={'30px'} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave} />
                        )}
                    </div>

                    <div className='phone'>
                        {isPhoneHovered ? (
                            <PhoneHover height={'30px'} width={'30px'} onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave} />
                        ) : (
                            <Phone height={'30px'} width={'30px'} onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;