import { useEffect, useRef } from "react";

interface NewsLetterFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const NewsLetterForm: React.FC<NewsLetterFormProps> = () => {
  const mailchimpFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element for the Mailchimp embed code
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    
    // Insert the script into the DOM
    document.body.appendChild(script);
    
    // Load Mailchimp validation script
    script.onload = () => {
      // This will execute once the script loads
      const mailchimpValidation = (window as any).fnames;
      if (mailchimpValidation) {
        (window as any).$mcj = true; // Enable Mailchimp jQuery validation
      }
    };
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full space-y-4 flex flex-col justify-center items-center">
      <h2 className="uppercase text-lg md:text-2xl font-semibold text-center">
        JOIN OUR NEWSLETTER
      </h2>
      <p className="text-gray-700 text-center">
        Receive insider news and valuable social media tips from our team, so
        you never miss a beat!
      </p>
      
      {/* Mailchimp Embed Form - Replace with your own form HTML from Mailchimp */}
      <div ref={mailchimpFormRef} className="w-full">
        <div id="mc_embed_signup">
          {/* Replace the form action URL and hidden input with your own Mailchimp values */}
          <form 
            action="https://YOUR-DOMAIN.us1.list-manage.com/subscribe/post?u=YOUR_U_VALUE&amp;id=YOUR_ID_VALUE" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group mb-4">
                <input 
                  type="text" 
                  name="FNAME" 
                  placeholder="First Name" 
                  className="border border-gray-300 rounded-md px-3 py-2 text-xs w-full focus:outline-none focus:border-[#F2720D]"
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group mb-4">
                <input 
                  type="email" 
                  name="EMAIL" 
                  placeholder="Email Address" 
                  className="border border-gray-300 rounded-md px-3 py-2 text-xs w-full focus:outline-none focus:border-[#F2720D]" 
                  id="mce-EMAIL" 
                  required 
                />
              </div>
              {/* Bot protection, don't remove */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_YOUR_U_VALUE_HERE_TOO_REPLACE_THIS" tabIndex={-1} value="" readOnly />
              </div>
              <div className="flex m-auto text-center">
                <button 
                  type="submit" 
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="bg-[#F2720D] hover:bg-[#f24a0d] text-white py-3 px-8 rounded-xl text-xs transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
