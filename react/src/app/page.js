const TripCraftHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/img/Clip-path-group.png')] overflow-x-hidden ">
      {/* Header */}
      <header className="pt-10 px-6 pb-8 flex justify-between items-center">
        <div className="flex items-center ">
          <img
            src="/img/header/Logo.png"
            alt="TripCraft Logo"
            className="h-12 mr-2"
          />
        </div>
      </header>
      <nav className="flex justify-center items-center gap-8">
        <button className="px-4 py-2 bg-blue-200 text-[#03045e] rounded-full mx-2 flex justify-center items-center shadow-lg">
          <img
            src="/img/header/discover.png"
            alt="TripCraft Logo"
            className="h-4 mr-2"
          />
          Discover
        </button>
        <button className="px-4 py-2 bg-pink-200 text-[#03045e] rounded-full mx-2 flex justify-center items-center shadow-lg">
          <img
            src="/img/header/yourTrips.png"
            alt="TripCraft Logo"
            className="h-4 mr-2"
          />
          Your Trips
        </button>
        <button className="px-4 py-2 bg-red-300 text-[#03045e] rounded-full mx-2 flex justify-center items-center shadow-lg">
          <img
            src="/img/header/AboutUs.png"
            alt="TripCraft Logo"
            className="h-4 mr-2"
          />
          About Us
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-8 px-32 overflow-x-hidden">
        <div className="h-lvh flex justify-start items-center flex-col gap-10 overflow-x-hidden">
          <h1 className="text-3xl font-bold text-center mb-4 pt-12">
            Your Next Adventure Awaits!
          </h1>
          <p className="text-center mb-8 max-w-2xl mx-auto text-xl">
            At TripCraft, create personalized travel itineraries tailored to
            your interests. Explore destinations, discover hidden gems, and plan
            the perfect trip. Join our community and start your adventure today!
          </p>

          <button className="block mx-auto mb-8 px-6 py-3 bg-[#03045e] text-white rounded-2xl hover:bg-white hover:border-2 hover:border-[#03045e] hover:text-[#03045e]">
            Trip Planner Helper!
          </button>

          <img
            src="/img/1.png"
            alt="Dubai"
            className="absolute top-1/4 -left-20 w-60 h-40 object-cover rounded-full"
          />
          <img
            src="/img/2.png"
            alt="Rome"
            className="absolute top-1/4 -right-20 w-60 h-40 object-cover rounded-full"
          />
          <img
            src="/img/3.png"
            alt="Egypt"
            className="absolute top-2/4 -left-16 w-80 h-48 object-cover rounded-full"
          />
          <img
            src="/img/4.png"
            alt="Great Wall"
            className="absolute top-2/4 -right-16 w-80 h-48 object-cover rounded-full"
          />
          <img
            src="/img/5.png"
            alt="Bali Temple"
            className="absolute bottom-4 left-1/4 w-80 h-48 object-cover rounded-full"
          />
          <img
            src="/img/6.png"
            alt="Thailand"
            className="absolute bottom-4 right-1/4 w-80 h-48 object-cover rounded-full"
          />
        </div>

        {/* Image Gallery */}
        {/* <div className="grid grid-cols-3 gap-4 relative h-screen">
        
        </div>   */}

        {/* Search Section */}
        <div className="py-12 mb-8 overflow-x-hidden">
          <h2 className="text-2xl font-semibold text-[#03045e] mb-4 pl-32">
            Don't have a specific plan?
          </h2>
          <p className="mb-8 text-center text-[#03045e] text-2xl font-semibold">
            We'll help you search!
          </p>
          <div className="flex border-2 border-[#03045e] rounded-full overflow-hidden max-w-6xl py-2 px-3 justify-center items-center mx-auto">
            <input
              type="text"
              placeholder="Destination"
              className="flex-grow px-4 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Check In"
              className="flex-grow px-4 py-2 outline-none border-l-2 text-[#03045e] border-[#03045e]"
            />
            <input
              type="text"
              placeholder="Check Out"
              className="flex-grow px-4 py-2 outline-none border-l-2 text-[#03045e] border-[#03045e]"
            />
            <input
              type="text"
              placeholder="Budget"
              className="flex-grow px-4 py-2 outline-none border-l-2 text-[#03045e] border-[#03045e]"
            />
            <button className="">
              <img src="/img/search-button.png" alt="Search" className="h-12" />
            </button>
          </div>
        </div>

        {/* Suggested Destinations */}
        <div className="py-20 px-20  overflow-x-hidden">
          <h2 className="text-2xl font-medium text-center text-[#03045e] mb-4">
            You don't have any plans?
          </h2>
          <h3 className="text-2xl text-center font-semibold text-[#03045e] mb-4">
            Here Are Some Suggested Destinations
          </h3>
          <div className="grid grid-cols-3 gap-32 pt-12">
            <div className="w-[433px] h-[614px] relative">
              <div className="w-[408px] h-[561px] left-[25px] top-[53px] absolute bg-white rounded-[35px] shadow" />
              <img
                className="w-[399px] h-[515px] left-0 top-0 absolute rounded-[35px] shadow"
                src="/img/moncton.png"
              />
              <div className="w-[399px] h-[515px] left-0 top-0 absolute rounded-[35px] bg-[#03045e] shadow  hidden hover:flex"></div>
              <div className="left-[141px] top-[539px] absolute text-[#03045e] text-4xl font-semibold font-['Raleway']">
                Moncton
              </div>
            </div>
            <div className="w-[433px] h-[614px] relative">
              <div className="w-[408px] h-[561px] left-[25px] top-[53px] absolute bg-white rounded-[35px] shadow" />
              <img
                className="w-[399px] h-[515px] left-0 top-0 absolute rounded-[35px] shadow"
                src="/img/amsterdam.png"
              />
              <div className="left-[141px] top-[539px] absolute text-[#03045e] text-4xl font-semibold font-['Raleway']">
                Amsterdam
              </div>
            </div>
            <div className="w-[433px] h-[614px] relative">
              <div className="w-[408px] h-[561px] left-[25px] top-[53px] absolute bg-white rounded-[35px] shadow" />
              <img
                className="w-[399px] h-[515px] left-0 top-0 absolute rounded-[35px] shadow"
                src="/img/greece.png"
              />
              <div className="left-[141px] top-[539px] absolute text-[#03045e] text-4xl font-semibold font-['Raleway']">
                Greece
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#03045E] text-white p-8 overflow-x-hidden">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Discover</h3>
            <ul>
              <li>Your Trips</li>
              <li>Explore Canada</li>
              <li>Domestic Flights</li>
              <li>Hotels</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <ul>
              <li>Careers</li>
              <li>Partnerships</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Privacy</h3>
            <ul>
              <li>Legal</li>
              <li>Terms of Use</li>
              <li>Cookies</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow us on</h3>
            <div className="flex space-x-4">
              <img
                src="/img/socials/instagram.png"
                alt="Instagram"
                className="h-6"
              />
              <img src="/img/socials/X.png" alt="X" className="h-6" />
              <img
                src="/img/socials/YouTube.png"
                alt="YouTube"
                className="h-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <img
            src="/img/header/Logo.png"
            alt="TripCraft Logo"
            className="h-8 mx-auto mb-2"
          />
          <p>TripCraft Copyright 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default TripCraftHomepage;
