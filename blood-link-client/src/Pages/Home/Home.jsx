import { Link } from "react-router-dom";
import Donation from "../../../public/donation.json";
import Lottie from "lottie-react";
import { RiHospitalLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { FaHandHoldingWater, FaHeart, FaUsers, FaAward } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url(banner.jpg)] bg-cover bg-center"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent "></div> */}

        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 py-36">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black gradient-text mb-4 animate-fade-in-up">
                SAVE
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-red-500 mb-6 animate-fade-in-up animation-delay-200">
                LIVES
              </h1>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-400">
              One Donation. Infinite Impact.
            </h2>

            <p className="text-lg pb-5 md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto  leading-relaxed animate-fade-in-up animation-delay-600">
              Join thousands of heroes who are making a difference every day.
              Your blood donation can save up to 3 lives.
            </p>
            <span className="text-red-500 font-semibold text-lg md:text-xl lg:text-2xl">
              Be the reason of someone's second chance
            </span>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-800 pt-10">
              <button className="border-4 border-red-500 hover:border-4 text-red-500 text-red-500-foreground font-bold text-xl px-12 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
                Learn More
              </button>
              <Link to="/login">
                <button className="bg-red-500 hover:bg-red-500/90 border-4 border-red-500 hover:border-4 text-white text-red-500-foreground font-bold text-xl px-12 py-3 rounded-full pulse-glow transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Donate Now
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">
                  10K+
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold">
                  Lives Saved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">
                  5K+
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold">
                  Donors
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2">
                  24/7
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-semibold">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <img
              className="rounded-2xl shadow-2xl float"
              src="donation1.jpg"
              alt="Blood donation process"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-500 text-red-500-foreground p-4 rounded-2xl shadow-xl">
              <FaHeart className="text-3xl text-white" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-red-500 leading-tight">
              10 Minutes Can Save 3 Lives
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every blood donation is a gift of life. In just 10 minutes, you
              can make an extraordinary difference. Your single donation can be
              separated into red blood cells, platelets, and plasma - each
              component capable of saving a different life. From accident
              victims to cancer patients, your generosity becomes their hope.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-red-500/10 p-3 rounded-full">
                <FaUsers className="text-2xl text-red-500" />
              </div>
              <div>
                <div className="font-bold text-lg">Join Our Community</div>
                <div className="text-muted-foreground">
                  5,000+ active donors
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 lg:order-1">
            <h3 className="text-4xl md:text-5xl font-black text-red-500 leading-tight">
              Together We Create Miracles
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When communities unite for a common cause, extraordinary things
              happen. Our network of dedicated donors, medical professionals,
              and volunteers work tirelessly to ensure that no one faces a
              medical emergency alone. Every donation strengthens this
              life-saving network.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-red-500/10 p-3 rounded-full">
                <FaAward className="text-2xl text-red-500" />
              </div>
              <div>
                <div className="font-bold text-lg">Award-Winning Care</div>
                <div className="text-muted-foreground">
                  Recognized excellence in blood banking
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:order-2">
            <img
              className="rounded-2xl shadow-2xl float"
              src="donation2.jpg"
              alt="Community impact"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-500 text-red-500-foreground p-4 rounded-2xl shadow-xl">
              <FaUsers className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500/5 to-red-500/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-red-500 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest standards of care and
              safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-border">
              <div className="bg-red-500/10 p-4 rounded-2xl w-fit mb-6">
                <RiHospitalLine className="text-4xl text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Advanced Blood Bank
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                State-of-the-art facilities with cutting-edge technology
                ensuring the highest quality blood storage and processing
                standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-border">
              <div className="bg-red-500/10 p-4 rounded-2xl w-fit mb-6">
                <BsShieldLock className="text-4xl text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                100% Secure Data
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your personal information is protected with bank-level
                encryption and strict privacy protocols. Your trust is our
                priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-border">
              <div className="bg-red-500/10 p-4 rounded-2xl w-fit mb-6">
                <FaHandHoldingWater className="text-4xl text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Sterile & Safe
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Rigorous sterilization processes and single-use equipment ensure
                your safety and the integrity of every donation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/10 p-8 rounded-2xl">
              <Lottie animationData={Donation} className="max-w-md mx-auto" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black gradient-text leading-tight">
              Support Our Mission
            </h3>
            <p className="text-justify">
              At our organization, we are not only dedicated to inspiring people
              for donating blood, but also making a positive impact through a
              range of social activities, including{" "}
              <span className="text-red-500">
                volunteering at homeless shelters, participating in
                environmental cleanups, fundraising for charitable causes,
                supporting animal rescue efforts, providing care to the elderly,
                promoting literacy, and reaching out to the homeless community.
              </span>{" "}
              While all our members are volunteers, and our work is non-profit,
              many of these important activities require financial support to
              continue effectively. Any help, whether through donations or other
              means, is greatly appreciated and goes a long way in helping us
              make a difference in our community.
            </p>
            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-500/10 p-2 rounded-full">
                  <FaHeart className="text-xl text-red-500" />
                </div>
                <div className="font-bold text-lg">100% Volunteer-Driven</div>
              </div>
              <p className="text-muted-foreground">
                All our work is powered by passionate volunteers. Your donations
                directly fund our community programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
