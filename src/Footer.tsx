
import { Link } from 'react-router-dom';
import { Grape } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-start space-x-2 mb-4">
              <Grape className="w-5 h-5 text-berry-500 mt-0.5" />
              <span className="text-base font-medium">
                <span className="text-foreground">Nullberry</span>
                <span className="text-muted-foreground ml-1">Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              An indie software studio dedicated to crafting better software & tools—no subscriptions, no ads, no hidden monetization tricks.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', hash: '#about' },
                { name: 'Projects', hash: '#projects' },              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.hash}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-3">
              {[
                { name: 'GitHub', url: 'https://github.com/nullberry' },
                { name: 'Email', url: 'mailto:hello@nullberry.org' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nullberry Studio. No rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with care. No tracking, no cookies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
