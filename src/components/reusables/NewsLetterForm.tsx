import { useEffect, useRef, useState } from "react";

interface NewsLetterFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const NewsLetterForm: React.FC<NewsLetterFormProps> = ({ onSuccess, onError }) => {
  const mailchimpFormRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    
    document.body.appendChild(script);
    
    script.onload = () => {
      if ((window as any).fnames) {
        (window as any).$mcj = (window as any).jQuery.noConflict(true);
      }
    };
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById('mc-embedded-subscribe-form') as HTMLFormElement;
    
    if (!form) return;
    
    const handleSubmit = (e: SubmitEvent) => {
      setTimeout(() => {
        const successMessage = document.getElementById('mce-success-response');
        const errorMessage = document.getElementById('mce-error-response');
        
        if (successMessage && window.getComputedStyle(successMessage).display !== 'none') {
          setFormStatus('success');
          if (onSuccess) onSuccess();
        } else if (errorMessage && window.getComputedStyle(errorMessage).display !== 'none') {
          setFormStatus('error');
          if (onError) onError();
        }
      }, 1000);
    };
    
    form.addEventListener('submit', handleSubmit);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [onSuccess, onError]);

  return (
    <div className="w-full space-y-4 flex flex-col justify-center items-center">
      <h2 className="uppercase text-lg md:text-2xl font-semibold text-center">
        JOIN OUR NEWSLETTER
      </h2>
      <p className="text-gray-700 text-center">
        Receive insider news and valuable social media tips from our team, so
        you never miss a beat!
      </p>
      
      {/* Mailchimp Embed Form with your actual Mailchimp values */}
      <div ref={mailchimpFormRef} className="w-full">
        <div id="mc_embed_signup">
          <form 
            action="https://detopleamarketing.us14.list-manage.com/subscribe/post?u=f55a7e50bba37ccb229da4780&amp;id=0827895d85&amp;f_id=001a9ce5f0" 
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
              
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_f55a7e50bba37ccb229da4780_0827895d85" tabIndex={-1} value="" readOnly />
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
      
      {formStatus === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4 w-full">
          <p>Thank you for subscribing to our newsletter!</p>
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 w-full">
          <p>There was an error with your subscription. Please try again.</p>
        </div>
      )}
    </div>
  );
};
