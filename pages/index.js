import React, { useState } from 'react';
import { 
  ArrowRight, 
  BarChart2, 
  DollarSign, 
  Mail, 
  CheckCircle,
  ExternalLink,
  Youtube,
  TrendingUp
} from 'lucide-react';

// Local component definitions
const Card = ({ className, children, ...props }) => (
  <div className={`rounded-lg border bg-slate-800 border-slate-700 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-2xl font-semibold text-white ${className}`} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

const Alert = ({ className, children, ...props }) => (
  <div className={`rounded-lg border p-4 ${className}`} {...props}>
    {children}
  </div>
);

const AlertDescription = ({ className, ...props }) => (
  <div className={`text-sm ${className}`} {...props} />
);

const TradingLandingPage = () => {
  const [email, setEmail] = useState('');
  
  const features = [
    { 
      title: "Custom Trading Indicator", 
      description: "Access my personal TradingView indicator that spots high-probability setups",
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />
    },
    { 
      title: "Premium Broker Access", 
      description: "Get the best trading conditions with my recommended broker, Sway Markets",
      icon: <DollarSign className="h-8 w-8 text-green-400" />
    },
    { 
      title: "Trading Education", 
      description: "Learn my exact trading strategy with step-by-step video tutorials",
      icon: <BarChart2 className="h-8 w-8 text-purple-400" />
    }
  ];

  const results = [
    { metric: "Win Rate", value: "85%", description: "Consistent wins with proper risk management" },
    { metric: "Student Success", value: "1,000+", description: "Traders using my methods" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white">Trade With Adam</h1>
          <p className="text-xl mb-8 text-gray-200">
            Join me and thousands of successful traders using my proven strategy and custom indicators
          </p>
          
          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for trading updates"
              className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-300"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-white"
            >
              Join Now <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Trading Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{result.value}</div>
                  <div className="text-xl font-semibold mb-2 text-white">{result.metric}</div>
                  <p className="text-gray-200">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Broker Section */}
        <div className="mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Why Trade With Sway Markets?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    Lowest spreads in the industry
                  </p>
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    Fast withdrawals guaranteed
                  </p>
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    24/7 customer support
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    Advanced trading platform
                  </p>
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    Secure funds protection
                  </p>
                  <p className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={20} className="text-green-400" />
                    Mobile trading apps
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            <a href="#youtube" className="flex items-center gap-2 text-gray-200 hover:text-blue-400">
              <Youtube /> Trading Videos
            </a>
            <a href="#tradingview" className="flex items-center gap-2 text-gray-200 hover:text-blue-400">
              <BarChart2 /> TradingView
            </a>
            <a href="#contact" className="flex items-center gap-2 text-gray-200 hover:text-blue-400">
              <Mail /> Contact
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <Alert className="bg-blue-600 border-blue-500 max-w-2xl mx-auto">
          <AlertDescription className="text-center text-lg text-white">
            Ready to start your trading journey? Get access to my indicator and Sway Markets benefits today!
            <div className="mt-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 flex items-center gap-2 mx-auto">
                Start Trading Now <ExternalLink size={20} />
              </button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default TradingLandingPage;