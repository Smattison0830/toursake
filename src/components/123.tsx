const Sidebar: React.FC<SidebarProps> = ({ setSelectedType }) => {
    return (
          <div className="fixed bottom-0 left-0 right-0 h-24 bg-orange-500 bg-opacity-50 rounded-t-lg p-4 z-10">
           <h2 className="text-lg font-bold mb-4"></h2>
            <ul className="flex justify-around">
              <li className="flex items-center mb-2 cursor-pointer" onClick={() => setSelectedType('whiskey')}>
                <img src={whiskeyIcon} alt="Whiskey" className="w-6 h-6 mr-2" />
              </li>
              <li className="flex items-center mb-2 cursor-pointer" onClick={() => setSelectedType('sake')}>
                <img src={sakeIcon} alt="Sake" className="w-6 h-6 mr-2" />
              </li>
              <li className="flex items-center mb-2 cursor-pointer" onClick={() => setSelectedType('beer')}>
                <img src={beerIcon} alt="Beer" className="w-6 h-6 mr-2" />
              </li>
            </ul>
          </div>
        );
  };