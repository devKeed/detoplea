import { useState } from "react";
import MyInput from "./Input";

interface NewsLetterFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const NewsLetterForm: React.FC<NewsLetterFormProps> = ({ onSuccess, onError }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError("");
    
    // Validate inputs with more friendly messages
    if (!firstName.trim()) {
      setError("Oops! We'd love to know your name.");
      return;
    }
    
    if (!email.trim()) {
      setError("We need your email to send you our awesome newsletter!");
      return;
    }
    
    if (!isValidEmail(email)) {
      setError("That email doesn't look quite right. Could you double-check it?");
      return;
    }
    
    setLoading(true);
    
    try {
      // Prepare the data for Mailchimp
      const data = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName
        }
      };
      
      // Send to our backend proxy endpoint to avoid CORS issues
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        // More user-friendly error handling based on common issues
        if (result.title === "Member Exists") {
          throw new Error("You're already subscribed! Thanks for your enthusiasm!");
        } else if (result.status === 400) {
          throw new Error("Something wasn't quite right with your information. Please try again.");
        } else {
          throw new Error(result.message || "We couldn't complete your subscription right now. Please try again later.");
        }
      }
      
      // Success! Reset the form
      setSuccess(true);
      setFirstName("");
      setEmail("");
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Newsletter subscription failed:", err);
      
      // More friendly error message handling
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong on our end. Please try again in a moment!");
      }
      
      if (onError) {
        onError();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 flex flex-col justify-center items-center">
      <h2 className="uppercase text-lg md:text-2xl font-semibold text-center">
        JOIN OUR NEWSLETTER
      </h2>
      <p className="text-gray-700 text-center">
        Receive insider news and valuable social media tips from our team, so
        you never miss a beat!
      </p>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded w-full text-center text-xs">
          Thank you for subscribing! We'll be in touch soon.
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full text-center text-xs">
          <span role="img" aria-label="warning" className="mr-2">⚠️</span>
          {error}
        </div>
      )}
      
      <MyInput 
        type="text" 
        placeholder="First Name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        disabled={loading || success}
      />
      <MyInput 
        type="email" 
        placeholder="Email Address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading || success}
      />
      <div className="flex m-auto text-center">
        <button 
          type="submit" 
          disabled={loading || success}
          className="bg-[#F2720D] hover:bg-[#f24a0d] text-white py-3 px-8 rounded-xl text-xs transition-colors duration-300 flex items-center justify-center min-w-[120px]"
        >
          {loading ? "Subscribing..." : success ? "Subscribed!" : "Subscribe"}
        </button>
      </div>
    </form>
  );
};
