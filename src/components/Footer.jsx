"use client";

const socialLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "mailto:0x@example.com", label: "Email Me" },
  { href: "https://calendly.com/dyanabutler/meeting", label: "Schedule a Meeting" },
];

const Footer = () => {
  return (
    <footer className="text-muted-foreground py-4 border-t border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side: Link with SVG icon */}
        <div className="flex items-center">
          <a
            href="https://example.com"
            target="_blank"
            className="transition duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 14L21 3"></path>
              <path d="M21 3v7"></path>
              <path d="M21 3h-7"></path>
              <path d="M14 10L3 21"></path>
              <path d="M3 21v-7"></path>
              <path d="M3 21h7"></path>
            </svg>
            TrustPilot Reviews
          </a>
        </div>

        {/* Center: Social Media Links */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-4 space-y-2 md:space-y-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className="text-muted-foreground hover:text-accent-foreground transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Copyright */}
        <div className="text-sm text-muted-foreground">
          &copy; 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
