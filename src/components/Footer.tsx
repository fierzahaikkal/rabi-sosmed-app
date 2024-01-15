import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="grid grid-cols-2 items-start justify-between gap-y-4 rounded-xs bg-primary-foreground px-10 py-12 mobile:grid-cols-1">
      <div className="flex flex-col items-center justify-start">
        <div className="text-banner font-semibold text-primary">Rabi</div>
        <div className="text-paragraph text-text">Copyright Reserved @ 2023 Rabi Social.</div>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-between mobile:grid-cols-1">
        <div className="flex h-full flex-col items-start gap-4">
          <h1 className="mobile:text-subheading text-heading font-semibold text-accent">Explore</h1>
          <div className="flex flex-col items-start justify-start gap-4">
            <Link href="/#" className="text-body text-text">
              Community
            </Link>
            <Link href="/#" className="text-body text-text">
              Setup
            </Link>
            <Link href="/#" className="text-body text-text">
              Features
            </Link>
          </div>
        </div>
        <div className="flex h-full flex-col items-start justify-start gap-4">
          <h1 className="mobile:text-subheading text-heading font-semibold text-accent">
            Get in touch
          </h1>
          <div className="flex flex-col items-start justify-start gap-4">
            <Link href="#" className="flex items-center gap-x-1 text-body text-text">
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <Link href="#" className="flex items-center gap-x-1 text-body text-text">
              <Phone className="h-4 w-4" />
              Whatsapp
            </Link>
            <Link href="#" className="flex items-center gap-x-1 text-body text-text">
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
            <Link href="#" className="flex items-center gap-x-1 text-body text-text">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
