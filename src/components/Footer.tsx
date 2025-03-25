import { Link } from 'react-router-dom';
import { Grape } from 'lucide-react';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Grape className="w-5 h-5 text-berry-500" />
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
                { name: 'Projects', hash: '#projects' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.hash}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Dialog open={isImprintOpen} onOpenChange={setIsImprintOpen}>
                  <DialogTrigger asChild>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Imprint
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">Impressum</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 text-sm space-y-4">
                      <div>
                        <h3 className="font-medium">Angaben gemäß § 5 TMG</h3>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Vertreten durch:</h3>
                        <p className="mt-1">
                          Waleed Hussain<br />
                        <br />

                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Kontakt:</h3>
                        <p className="mt-1">
                          E-Mail: hello@nullberry.org<br />
                          Website: nullberry.org
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Registereintrag:</h3>
                        <p className="mt-1">
                          Eingetragen im Vereinsregister/Handelsregister:<br />
                          In Bearbeitung
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Haftung für Inhalte:</h3>
                        <p className="mt-1">
                          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
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
            {currentYear} Nullberry Studio. No rights reserved.
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
