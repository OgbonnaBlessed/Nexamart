// import { FaGlobeAfrica } from 'react-icons/fa'

const Logo = () => {
    return (
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00FAFA"
          className="w-8 h-8"
        >
          <path d="M3 3h18v18H3V3z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>

  
        <h1 className="text-3xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 bg-clip-text text-transparent">
          Nexa
        </span>
        <span className="text-gray-900">Mart</span>
      </h1>
    </div>
  );
};

export default Logo;