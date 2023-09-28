import Link from "next/link";
import Image from "next/image";
const StreamCountries = ({ countries }: any) => {

    return (
        <div className="divide-x w-1/5 bg-slate-600 divide-gray-800">
          <ul>
            {countries.map((country: any) => (
              <li key={country.countryCode}>
                <div className="text-sm font-medium text-gray-900"><h1>{country.name}</h1></div>
                <ul>
                  {Object.values(country.services).map((service: any) => (
                    <li key={service.id} className="ml-3">
                      <Link target="_blank" href={service.homePage} style={{ color: service.themeColorCode }}>
                        {service.name}
                      </Link>
                      <ul>
                    {/* Display Addons */}
                    <li>
                      <strong>Addons:</strong> 
                    </li>

                    {/* Display Images */}
                    <li>

                      <div className="h-10 w-10 rounded-full ">
                      <Image
                        key={service.id} // Use a unique key for the image
                        src={service.images.lightThemeImage} // Assuming you want to display the light theme image
                        width={300}
                        height={300}
                        alt={service.name}
                        />
                      </div>

                    </li>

                    {/* Display Supported Streaming Types */}
                    <li>
                      <strong>Supported Streaming Types:</strong>{' '}
                      {Object.values(service.supportedStreamingTypes).join(', ')}
                    </li>
                  </ul>
                    </li>
                    
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default StreamCountries