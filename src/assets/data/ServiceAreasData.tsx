import { ServiceArea } from "./serviceType";

export const ServiceAreasData: ServiceArea[] = [
  {
    mainAreaName: "New South Wales",
    slug: "new-south-wales",
    districtAreas: [
      {
        id: 1,
        name: "Greater Western Sydney",
        slug: "greater-western-sydney",
        img: "images/maps/western-australia.webp",
        suburbs: [
          { name: "Blacktown", routeName: "computer-repairs-blacktown" },
          { name: "Camden", routeName: "computer-repairs-camden" },
          {
            name: "Canterbury-Bankstown",
            routeName: "computer-repairs-canterbury-bankstown",
          },
          { name: "Campbelltown", routeName: "computer-repairs-campbelltown" },
          { name: "Fairfield", routeName: "computer-repairs-fairfield" },
          { name: "Liverpool", routeName: "computer-repairs-liverpool" },
          { name: "Parramatta", routeName: "computer-repairs-parramatta" },
          { name: "Penrith", routeName: "computer-repairs-penrith" },
          { name: "Wollondilly", routeName: "computer-repairs-wollondilly" },
          { name: "Hawkesbury", routeName: "computer-repairs-hawkesbury" },
        ],
      },
      {
        id: 2,
        name: "Inner South",
        slug: "inner-south",
        img: "/images/maps/inner-south.jpg",
        suburbs: [
          { name: "Five Dock", routeName: "computer-repairs-five-dock" },
          { name: "Rodd Point", routeName: "computer-repairs-rodd-point" },
          { name: "Croydon", routeName: "computer-repairs-croydon" },
          { name: "Ashfield", routeName: "computer-repairs-ashfield" },
          { name: "Marrickville", routeName: "computer-repairs-marrickville" },
          { name: "Bexley", routeName: "computer-repairs-bexley" },
          { name: "North", routeName: "computer-repairs-north" },
          { name: "Banksia", routeName: "computer-repairs-banksia" },
          { name: "Enmore", routeName: "computer-repairs-enmore" },
          { name: "Dulwich Hill", routeName: "computer-repairs-dulwich-hill" },
          { name: "Burwood", routeName: "computer-repairs-burwood" },
          { name: "Park", routeName: "computer-repairs-park" },
          { name: "Kingsgrove", routeName: "computer-repairs-kingsgrove" },
          { name: "Roseland", routeName: "computer-repairs-roseland" },
          { name: "Belmore", routeName: "computer-repairs-belmore" },
          { name: "Padstow", routeName: "computer-repairs-padstow" },
          { name: "Chullora", routeName: "computer-repairs-chullora" },
          { name: "Bankstown", routeName: "computer-repairs-bankstown" },
        ],
      },
      {
        id: 3,
        name: "Northern Beaches",
        slug: "northern-beaches",
        img: "/images/maps/northern-beaches.jpg",
        suburbs: [
          { name: "Mosman", routeName: "computer-repairs-mosman" },
          { name: "Cammeray", routeName: "computer-repairs-cammeray" },
          { name: "Northbridge", routeName: "computer-repairs-northbridge" },
          { name: "Castlecrag", routeName: "computer-repairs-castlecrag" },
          { name: "Seaforth", routeName: "computer-repairs-seaforth" },
          { name: "Clontarf", routeName: "computer-repairs-clontarf" },
          { name: "Balgowlah", routeName: "computer-repairs-balgowlah" },
          {
            name: "Balgowlah Heights",
            routeName: "computer-repairs-blgowlah-heights",
          },
          {
            name: "North Balgowlah",
            routeName: "computer-repairs-north-balgowlah",
          },
          { name: "Manly Vale", routeName: "computer-repairs-manly-vale" },
          {
            name: "Allambie Heights",
            routeName: "computer-repairs-allambie-heights",
          },
          { name: "Brookvale", routeName: "computer-repairs-brookvale" },
          { name: "Fairlight", routeName: "computer-repairs-fairlight" },
          { name: "Queenscliff", routeName: "computer-repairs-queenscliff" },
          { name: "Curl Curl", routeName: "computer-repairs-curl-curl" },
          {
            name: "North Curl Curl",
            routeName: "computer-repairs-north-curl-curl",
          },
          { name: "Freshwater", routeName: "computer-repairs-freshwater" },
          { name: "Manly", routeName: "computer-repairs-manly" },
          { name: "Manly Beach", routeName: "computer-repairs-manly-beach" },
          { name: "Beacon Hill", routeName: "computer-repairs-beacon-hill" },
          { name: "Narraweena", routeName: "computer-repairs-narraweena" },
          { name: "Dee Why", routeName: "computer-repairs-dee-why" },
        ],
      },
      {
        id: 4,
        name: "St. George",
        slug: "st-george",
        img: "/images/maps/st-george.jpg",
        suburbs: [
          { name: "Allawah", routeName: "computer-repairs-allawah" },
          { name: "Arncliffe", routeName: "computer-repairs-arncliffe" },
          { name: "Banksia", routeName: "computer-repairs-banksia" },
          {
            name: "Bardwell Park",
            routeName: "computer-repairs-bardwell-park",
          },
          {
            name: "Bardwell Valley",
            routeName: "computer-repairs-bardwell-valley",
          },
          { name: "Bexley", routeName: "computer-repairs-bexley" },
          { name: "Bexley North", routeName: "computer-repairs-bexley-north" },
          {
            name: "Beverley Park",
            routeName: "computer-repairs-beverley-park",
          },
          {
            name: "Beverly Hills",
            routeName: "computer-repairs-beverly-hills",
          },
          { name: "Blakehurst", routeName: "computer-repairs-blakehurst" },
          {
            name: "Brighton-Le-Sands",
            routeName: "computer-repairs-brighton-le-sands",
          },
          { name: "Carlton", routeName: "computer-repairs-carlton" },
          { name: "Carss Park", routeName: "computer-repairs-carss-park" },
          {
            name: "Connells Point",
            routeName: "computer-repairs-connells-point",
          },
          { name: "Dolls Point", routeName: "computer-repairs-dolls-point" },
          { name: "Hurstville", routeName: "computer-repairs-hurstville" },
          {
            name: "Hurstville Grove",
            routeName: "computer-repairs-hurstville-grove",
          },
          { name: "Kingsgrove", routeName: "computer-repairs-kingsgrove" },
          { name: "Kogarah", routeName: "computer-repairs-kogarah" },
          { name: "Kogarah Bay", routeName: "computer-repairs-kogarah-bay" },
          { name: "Kyeemagh", routeName: "computer-repairs-kyeemagh" },
          { name: "Kyle Bay", routeName: "computer-repairs-kyle-bay" },
          { name: "Lugarno", routeName: "computer-repairs-lugarno" },
          { name: "Monterey", routeName: "computer-repairs-monterey" },
          { name: "Mortdale", routeName: "computer-repairs-mortdale" },
          { name: "Narwee", routeName: "computer-repairs-narwee" },
          { name: "Oatley", routeName: "computer-repairs-oatley" },
          { name: "Peakhurst", routeName: "computer-repairs-peakhurst" },
          {
            name: "Peakhurst Heights",
            routeName: "computer-repairs-peakhurst-heights",
          },
          { name: "Penshurst", routeName: "computer-repairs-penshurst" },
          { name: "Ramsgate", routeName: "computer-repairs-ramsgate" },
          {
            name: "Ramsgate Beach",
            routeName: "computer-repairs-ramsgate-beach",
          },
          { name: "Riverwood", routeName: "computer-repairs-riverwood" },
          { name: "Rockdale", routeName: "computer-repairs-rockdale" },
          { name: "Sandringham", routeName: "computer-repairs-sandringham" },
          { name: "Sans Souci", routeName: "computer-repairs-sans-souci" },
          {
            name: "South Hurstville",
            routeName: "computer-repairs-south-hurstville",
          },
          {
            name: "Sydney Airport",
            routeName: "computer-repairs-sydney-airport",
          },
          { name: "Turrella", routeName: "computer-repairs-turrella" },
          { name: "Wolli Creek", routeName: "computer-repairs-wolli-creek" },
        ],
      },
      {
        id: 5,
        name: "The Hills District",
        slug: "the-hills-district",
        img: "/images/maps/the-hills-district.jpg",
        suburb:
          "West of New Line, Old Northern, and Pennant Hills Roads, north of Kissing Point Roads, and James Ruse Drive, east of Sunnyholt, Old Windsor, Windsor Roads, Baulkham Hills, Beaumont Hills, Seven Hills, Castle Hill, Rouse Hill, Box Hill and Winston Hills",
      },
      {
        id: 6,
        name: "Eastern Suburbs",
        slug: "eastern-suburbs",
        img: "/images/maps/eastern-suburbs.jpg",
        suburb:
          "Vaucluse, Rose Bay, Darling Point, Dover Heights, Double Bay, Point Piper, Woollahra, Woolloomooloo, Watsons Bay, Potts Point, Rushcutters Bay, Elizabeth Bay, Bellevue Hill, Bondi Junction, Bondi, Bronte, Tamarama, Queens Park, Waverley, Clovelly, Coogee, Hillsdale, Randwick, Maroubra, Matraville, Chifley, Kingsford, Malabar, Little Bay, La Perouse, Centennial Park, Paddington, Surry Hills, Darlinghurst, Moore Park, Kings Cross",
      },
      {
        id: 7,
        name: "Inner West",
        slug: "inner-west",
        img: "/images/maps/inner-west.jpg",
        suburb:
          "Abbotsford, Annandale, Ashbury, Ashfield, Balmain, Balmain East, Belfield, Birchgrove, Breakfast Point, Burwood, Burwood Heights, Cabarita, Camperdown, Canada Bay, Chiswick, Concord, Concord West, Croydon, Croydon Park, Drummoyne, Dulwich Hill, Enfield, Enmore, Erskineville, Five Dock, Forest Lodge, Glebe, Haberfield, Homebush, Homebush West, Leichhardt, Lewisham, Liberty Grove, Lilyfield, Marrickville, Mortlake, Newtown, North Strathfield, Petersham, Rhodes, Rodd Point, Rozelle, Russell Lea, St Peters, Stanmore",
      },
      {
        id: 8,
        name: "Ryde & Northern Suburbs",
        slug: "ryde-northern-suburbs",
        img: "/images/maps/ryde-and-northern-suburbs.jpg",
        suburb:
          "Beecroft, Cheltenham, Carlingford, Cherrybrook, Denistone, Denistone East, Denistone West, Dundas, Dundas Valley, East Ryde, Eastwood, Ermington, Epping, Gladesville, Henley, Huntleys Cove, Huntleys Point, Hunters Hill, Macquarie Park, Marsfield, Meadowbank, Melrose Park, North Epping, North Ryde, Pennant Hills, Putney, Ryde, Tennyson Point, Thornleigh, West Pennant Hills, West Ryde, Westleigh, Woolwich",
      },
      {
        id: 9,
        name: "Sutherland Shire",
        slug: "sutherland-shire",
        img: "/images/maps/sutherland-shire.jpg",
        suburb:
          "Alfords Point, Bangor, Barden Ridge, Bonnet Bay, Bundeena, Burraneer, Caringbah, Caringbah South, Como, Cronulla, Dolans Bay, Engadine, Grays Point, Greenhills Beach, Gymea, Gymea Bay, Heathcote, Holsworthy (part), Illawong, Jannali, Kangaroo Point, Kareela, Kirrawee, Kurnell, Lilli Pilli, Loftus, Lucas Heights, Maianbar, Menai, Miranda, Oyster Bay, Port Hacking, Royal National Park, Sandy Point, Sutherland, Sylvania, Sylvania Waters, Taren Point, Waterfall, Woolooware, Woronora, Woronora Dam (part), Woronora Heights, Yarrawarrah and Yowie Bay",
      },
      {
        id: 10,
        name: "Victoria",
        slug: "victoria",
        img: "images/maps/victoria.webp",
        suburb: "All suburbs in Metropolitan Melbourne",
      },
      {
        id: 11,
        name: "Australian Capital Territory",
        slug: "australian-capital-territory",
        img: "images/maps/act.webp",
        suburb:
          "All suburbs in Australian Capital Territory and surrounding suburbs",
      },
      {
        id: 12,
        name: "Adelaide",
        slug: "adelaide",
        img: "images/maps/adelaide.webp",
        suburb: "All suburbs in Metropolitan Adelaide and surrounding suburbs",
      },
      {
        id: 13,
        name: "Queensland",
        slug: "queensland",
        img: "/images/maps/queensland.jpg",
        suburb: "All suburbs in Metropolitan Brisbane",
      },
      {
        id: 14,
        name: "Western Australia",
        slug: "western-australia",
        img: "/images/maps/western-australia.jpg",
        suburb: "All suburbs in Metropolitan Perth",
      },
    ],
  },
  {
    mainAreaName: "Western Australia",
    slug: "western-australia",
    districtAreas: [
      {
        id: 1,
        name: "",
        slug: "",
        img: "",
        suburb: "All suburbs in Metropolitan Perth.",
      },
    ],
  },
  {
    mainAreaName: "Victoria",
    slug: "victoria",
    districtAreas: [
      {
        id: 1,
        name: "",
        slug: "",
        img: "",
        suburb: "All suburbs in Metropolitan Melbourne.",
      },
    ],
  },
  {
    mainAreaName: "Australian Capital Territory",
    slug: "australian-capital-territory",
    districtAreas: [
      {
        id: 1,
        name: "",
        slug: "",
        img: "",
        suburb: "All suburbs in Australian Capital Territory.",
      },
    ],
  },
  {
    mainAreaName: "South Australia",
    slug: "south-australia",
    districtAreas: [
      {
        id: 1,
        name: "",
        slug: "",
        img: "",
        suburb: "All suburbs in Metropolitan Adelaide.",
      },
    ],
  },
  {
    mainAreaName: "Queensland",
    slug: "queensland",
    districtAreas: [
      {
        id: 1,
        name: "",
        slug: "",
        img: "",
        suburb: "All suburbs in Metropolitan Brisbane.",
      },
    ],
  },
];
