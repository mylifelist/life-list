/*
  DATA
  ====
  This is the file you edit to add species, photos, and tags.

  STRUCTURE
  - KINDS: the top-level categories on the homepage (Birds, and later Mammals, etc.)
  - FILTERS: the filter tags available for each kind, and what to call the
    second filter category for that kind (e.g. "Bird Type" vs "Mammal Type")
  - SPECIES: one entry per species. Each species has one or more PHOTOS.
    The homepage shows one "cover" card per species (its first photo).
    Clicking it goes to species.html, which shows every photo of that species.
    Clicking a photo there opens an enlarged view with its caption.

  ----------------------------------------------------------------------------
  ADDING A NEW PHOTO OF A SPECIES YOU ALREADY HAVE
  Find its entry in SPECIES below and add an object to its "photos" array:

  {
    src: "images/birds/mallard-3.jpg",
    alt: "Mallard pair swimming at dusk",
    date: "2025-03-14",                    // ISO format, sorts nicely
    location: "Lake Merritt, Oakland, CA",  // free text — shown in the caption
    locationTag: "united-states",           // must match a FILTERS location id
                                             // (used for homepage filtering)
    notes: "Spotted this pair just after sunrise.", // optional, shown in caption
  }

  ----------------------------------------------------------------------------
  ADDING A NEW SPECIES
  Copy a whole entry in SPECIES, give it a new unique "slug" (lowercase,
  dashes for spaces — this becomes the URL: species.html?slug=your-slug),
  and fill in its details and at least one photo.

  ----------------------------------------------------------------------------
  ADDING A NEW KIND (e.g. "Mammals")
  1. Add it to KINDS below.
  2. Add a matching entry to FILTERS with its own location/type tag lists.
  3. Add SPECIES entries with kind: "mammals".
  That's all — index.html builds a new section automatically.

  ----------------------------------------------------------------------------
  ADDING A NEW LOCATION OR TYPE TAG
  Add it to the relevant list inside FILTERS[kind]. Use that same id in any
  species' "types" field, or any photo's "locationTag" field.
*/

const KINDS = [
  { id: "birds", label: "Birds" },
  // { id: "mammals", label: "Mammals" },  // uncomment (and fill in FILTERS + SPECIES) when ready
];

// How many species cards show on the homepage per kind, before the rest are hidden.
const HOMEPAGE_LIMIT = 8;

const FILTERS = {
  birds: {
    typeLabel: "Bird Type",
    location: [
      { id: "united-states", label: "United States" },
      { id: "europe", label: "Europe" },
      { id: "asia", label: "Asia" },
      { id: "africa", label: "Africa" },
    ],
    type: [
      { id: "waterfowl", label: "Waterfowl" },
      { id: "gamebirds-ground-birds", label: "Gamebirds & ground birds" },
      { id: "doves-cuckoos-parrots", label: "Doves, cuckoos & parrots" },
      { id: "hummingbirds", label: "Hummingbirds" },
      { id: "nightjars-swifts-swallows", label: "Nightjars, swifts & swallows" },
      { id: "shorebirds", label: "Shorebirds & rails" },
      { id: "gulls-terns", label: "Gulls & terns" },
      { id: "loons-grebes-cormorants", label: "Loons, grebes & cormorants" },
      { id: "large-water-birds", label: "Large water birds" },
      { id: "birds-of-prey", label: "Birds of prey" },
      { id: "woodpeckers", label: "Woodpeckers" },
      { id: "kingfishers", label: "Kingfishers" },
      { id: "flycatchers-vireos-shrikes", label: "Flycatchers, vireos & shrikes" },
      { id: "jays-crows-magpies", label: "Jays, crows & magpies" },
      { id: "chickadees-nuthatches-wrens", label: "Chickadees, nuthatches & wrens" },
      { id: "thrushes-mockingbirds-starlings", label: "Thrushes, mockingbirds & starlings" },
      { id: "warblers", label: "Warblers & kin" },
      { id: "sparrows-finches-buntings", label: "Sparrows, finches & buntings" },
      { id: "blackbirds-orioles", label: "Blackbirds & orioles" },
    ],
  },
};

   // BEGIN GENERATED SPECIES
// Generated from life-list-for-website.csv by scripts/build_data.py.
// Edit the CSV, not this block - changes made here are overwritten.
const SPECIES = [
  {
    slug: "brown-pelican",
    kind: "birds",
    number: "001",
    name: "Brown Pelican",
    scientific: "Pelecanus occidentalis",
    types: ["large-water-birds"],
    photos: [
      {
        src: "images/birds/brown-pelican-1.jpg",
        alt: "Brown Pelican photographed in Aransas County, Texas",
        date: "2024-02-23",
        location: "Aransas County, Texas",
        locationTag: "united-states",
        notes: "Floating at the Port Aransas jetties.",
      },
      {
        src: "images/birds/brown-pelican-2.jpg",
        alt: "Brown Pelican photographed in Manatee County, Florida",
        date: "2022-11-12",
        location: "Manatee County, Florida",
        locationTag: "united-states",
        notes: "Hanging out at the Skyway Fishing Pier State Park, with the Sunshine Skyway bridge in the background.",
      },
      {
        src: "images/birds/brown-pelican-3.jpg",
        alt: "Brown Pelican photographed in Brevard County, Florida",
        date: "2022-11-08",
        location: "Brevard County, Florida",
        locationTag: "united-states",
        notes: "Going in for a dive at Sebastian Inlet State Park in Florida.",
      },
      {
        src: "images/birds/brown-pelican-4.jpg",
        alt: "Brown Pelican photographed in Brevard County, Florida",
        date: "2022-11-08",
        location: "Brevard County, Florida",
        locationTag: "united-states",
        notes: "Sebastian Inlet State Park in Florida.",
      },
      {
        src: "images/birds/brown-pelican-5.jpg",
        alt: "Brown Pelican photographed in Brevard County, Florida",
        date: "2022-11-08",
        location: "Brevard County, Florida",
        locationTag: "united-states",
        notes: "The fish did eventually make it down! Sebastian Inlet State Park in Florida.",
      },
      {
        src: "images/birds/brown-pelican-6.jpg",
        alt: "Brown Pelican photographed in Brevard County, Florida",
        date: "2022-11-08",
        location: "Brevard County, Florida",
        locationTag: "united-states",
        notes: "Water landing, at Sebastian Inlet State Park in Florida.",
      },
      {
        src: "images/birds/brown-pelican-7.jpg",
        alt: "Brown Pelican photographed in Aransas County, Texas",
        date: "2024-02-21",
        location: "Aransas County, Texas",
        locationTag: "united-states",
        notes: "Showing off full breeding plumage in the golden hour, Port Aransas jetties.",
      },
    ],
  },
  {
    slug: "common-ostrich",
    kind: "birds",
    number: "002",
    name: "Common Ostrich",
    scientific: "Struthio camelus",
    types: ["gamebirds-ground-birds"],
    photos: [
      {
        src: "images/birds/common-ostrich-1.jpg",
        alt: "Common Ostrich photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Sighting from pretty far away while on safari.",
      },
    ],
  },
  {
    slug: "egyptian-goose",
    kind: "birds",
    number: "003",
    name: "Egyptian Goose",
    scientific: "Alopochen aegyptiaca",
    types: ["waterfowl"],
    photos: [
      {
        src: "images/birds/egyptian-goose-1.jpg",
        alt: "Egyptian Goose photographed in Miami-Date County, Florida",
        date: "2022-04-05",
        location: "Miami-Date County, Florida",
        locationTag: "united-states",
        notes: "Considered exotic/naturalized in the U.S. Seen here at a park in Miami, Florida.",
      },
      {
        src: "images/birds/egyptian-goose-2.jpg",
        alt: "Egyptian Goose photographed in Miami-Date County, Florida",
        date: "2022-04-05",
        location: "Miami-Date County, Florida",
        locationTag: "united-states",
        notes: "Considered exotic/naturalized in the U.S. Seen here at a park in Miami, Florida.",
      },
      {
        src: "images/birds/egyptian-goose-3.jpg",
        alt: "Egyptian Goose photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Terrible photo, but the only one I have  of a wild one in its native range.",
      },
    ],
  },
  {
    slug: "helmeted-guineafowl",
    kind: "birds",
    number: "004",
    name: "Helmeted Guineafowl",
    scientific: "Numida meleagris",
    types: ["gamebirds-ground-birds"],
    photos: [
      {
        src: "images/birds/helmeted-guineafowl-1.jpg",
        alt: "Helmeted Guineafowl photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Sighting while on safari before they scurried into the brush.",
      },
    ],
  },
  {
    slug: "swainsons-spurfowl",
    kind: "birds",
    number: "005",
    name: "Swainson's Spurfowl",
    scientific: "Pternistis swainsonii",
    types: ["gamebirds-ground-birds"],
    photos: [
      {
        src: "images/birds/swainsons-spurfowl-1.jpg",
        alt: "Swainson's Spurfowl photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Sighting from pretty far away while on safari.",
      },
    ],
  },
  {
    slug: "kori-bustard",
    kind: "birds",
    number: "006",
    name: "Kori Bustard",
    scientific: "Ardeotis kori",
    types: ["gamebirds-ground-birds"],
    photos: [
      {
        src: "images/birds/kori-bustard-1.jpg",
        alt: "Kori Bustard photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "The largest flying bird in Africa, hanging out in the open. Near-threatened species.",
      },
    ],
  },
  {
    slug: "blacksmith-lapwing",
    kind: "birds",
    number: "007",
    name: "Blacksmith Lapwing",
    scientific: "Vanellus armatus",
    types: ["shorebirds"],
    photos: [
      {
        src: "images/birds/blacksmith-lapwing-1.jpg",
        alt: "Blacksmith Lapwing photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Sighting from pretty far away while on safari.",
      },
    ],
  },
  {
    slug: "saddle-billed-stork",
    kind: "birds",
    number: "008",
    name: "Saddle-billed Stork",
    scientific: "Ephippiorhynchus senegalensis",
    types: ["large-water-birds"],
    photos: [
      {
        src: "images/birds/saddle-billed-stork-1.jpg",
        alt: "Saddle-billed Stork photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Tallest stork species in the world (5 feet). Near-threatened species.",
      },
    ],
  },
  {
    slug: "african-fish-eagle",
    kind: "birds",
    number: "009",
    name: "African Fish-Eagle",
    scientific: "Icthyophaga vocifer",
    types: ["birds-of-prey"],
    photos: [
      {
        src: "images/birds/african-fish-eagle-1.jpg",
        alt: "African Fish-Eagle photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "These were a fairly common sighting on safari.",
      },
      {
        src: "images/birds/african-fish-eagle-1.jpg",
        alt: "African Fish-Eagle photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "These were a fairly common sighting on safari.",
      },
      {
        src: "images/birds/african-fish-eagle-1.jpg",
        alt: "African Fish-Eagle photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "These were a fairly common sighting on safari.",
      },
    ],
  },
  {
    slug: "giant-kingfisher",
    kind: "birds",
    number: "010",
    name: "Giant Kingfisher",
    scientific: "Megaceryle maxima",
    types: ["kingfishers"],
    photos: [
      {
        src: "images/birds/giant-kingfisher-1.jpg",
        alt: "Giant Kingfisher photographed in Kruger National Park, South Africa",
        date: "2017-11-19",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "The most friendly kingfisher I've ever seen! Fished in the pond while we ate breakfast on the patio at our safari huts.",
      },
      {
        src: "images/birds/giant-kingfisher-2.jpg",
        alt: "Giant Kingfisher photographed in Kruger National Park, South Africa",
        date: "2017-11-20",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "You can see how close this bird was to us (note the man's head in the lower left corner).",
      },
      {
        src: "images/birds/giant-kingfisher-3.jpg",
        alt: "Giant Kingfisher photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Drying off after a dip in the pond.",
      },
    ],
  },
  {
    slug: "burchells-starling",
    kind: "birds",
    number: "011",
    name: "Burchell's Starling",
    scientific: "Lamprotornis australis",
    types: ["thrushes-mockingbirds-starlings"],
    photos: [
      {
        src: "images/birds/burchells-starling-1.jpg",
        alt: "Burchell's Starling photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Sighting from pretty far away while on safari.",
      },
    ],
  },
  {
    slug: "fiery-necked-nightjar",
    kind: "birds",
    number: "012",
    name: "Fiery-necked Nightjar",
    scientific: "Caprimulgus pectoralis",
    types: ["nightjars-swifts-swallows"],
    photos: [
      {
        src: "images/birds/fiery-necked-nightjar-1.jpg",
        alt: "Fiery-necked Nightjar photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "I would never have seen this bird if our safari guide didn't point it out!",
      },
    ],
  },
  {
    slug: "western-cattle-egret",
    kind: "birds",
    number: "013",
    name: "Western Cattle-Egret",
    scientific: "Ardea ibis",
    types: ["large-water-birds"],
    photos: [
      {
        src: "images/birds/western-cattle-egret-1.jpg",
        alt: "Western Cattle-Egret photographed in Galveston County, Texas",
        date: "2023-05-03",
        location: "Galveston County, Texas",
        locationTag: "united-states",
        notes: "In full breeding plumage and showing off at High Island Sanctuaries.",
      },
      {
        src: "images/birds/western-cattle-egret-2.jpg",
        alt: "Western Cattle-Egret photographed in Galveston County, Texas",
        date: "2023-05-03",
        location: "Galveston County, Texas",
        locationTag: "united-states",
        notes: "In breeding plumage, High Island Sanctuaries.",
      },
      {
        src: "images/birds/western-cattle-egret-3.jpg",
        alt: "Western Cattle-Egret photographed in Aransas County, Texas",
        date: "2024-02-24",
        location: "Aransas County, Texas",
        locationTag: "united-states",
        notes: "In its happy place, eating flies in a herd of cattle, at Goose Island State Park.",
      },
      {
        src: "images/birds/western-cattle-egret-4.jpg",
        alt: "Western Cattle-Egret photographed in Kruger National Park, South Africa",
        date: "2017-11-21",
        location: "Kruger National Park, South Africa",
        locationTag: "africa",
        notes: "Hanging around an ox in Africa.",
      },
    ],
  },
  {
    slug: "common-loon",
    kind: "birds",
    number: "014",
    name: "Common Loon",
    scientific: "Gavia immer",
    types: ["loons-grebes-cormorants"],
    photos: [
      {
        src: "images/birds/no-photo-yet.jpg",
        alt: "Common Loon photographed in Vilas County, Wisconsin",
        date: "2018-07-25",
        location: "Vilas County, Wisconsin",
        locationTag: "united-states",
        notes: "",
      },
    ],
  },
  {
    slug: "bald-eagle",
    kind: "birds",
    number: "015",
    name: "Bald Eagle",
    scientific: "Haliaeetus leucocephalus",
    types: ["birds-of-prey"],
    photos: [
      {
        src: "images/birds/bald-eagle-1.jpg",
        alt: "Bald Eagle photographed in Holt County, Missouri",
        date: "2026-01-04",
        location: "Holt County, Missouri",
        locationTag: "united-states",
        notes: "One of dozens of eagles gathered to eat snowgeese as they overwinter at Loess Bluffs National Wildlife Refuge.",
      },
      {
        src: "images/birds/bald-eagle-2.jpg",
        alt: "Bald Eagle photographed in Holt County, Missouri",
        date: "2026-01-04",
        location: "Holt County, Missouri",
        locationTag: "united-states",
        notes: "Competition can be fierce as dozens of eagles gather to feast on snowgeese during the winter at Loess Bluffs National Wildlife Refuge.",
      },
      {
        src: "images/birds/bald-eagle-3.jpg",
        alt: "Bald Eagle photographed in Johnson County, Kansas",
        date: "2023-02-10",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "This one took down a squirrel right in my backyard!",
      },
      {
        src: "images/birds/bald-eagle-4.jpg",
        alt: "Bald Eagle photographed in Vernon County, Missouri",
        date: "2021-08-16",
        location: "Vernon County, Missouri",
        locationTag: "united-states",
        notes: "Perched to oversee the marsh at Schell-Osage Conservation Area.",
      },
      {
        src: "images/birds/bald-eagle-5.jpg",
        alt: "Bald Eagle photographed in Holt County, Missouri",
        date: "2021-11-17",
        location: "Holt County, Missouri",
        locationTag: "united-states",
        notes: "Checking out a noise from a perch at Loess Bluffs National Wildlife Refuge.",
      },
      {
        src: "images/birds/bald-eagle-6.jpg",
        alt: "Bald Eagle photographed in Holt County, Missouri",
        date: "2021-11-17",
        location: "Holt County, Missouri",
        locationTag: "united-states",
        notes: "Perched in a dormant tree at Loess Bluffs National Wildlife Refuge.",
      },
      {
        src: "images/birds/bald-eagle-7.jpg",
        alt: "Bald Eagle photographed in Coffee County, Kansas",
        date: "2023-01-15",
        location: "Coffee County, Kansas",
        locationTag: "united-states",
        notes: "Check out these amazing pants! Sliding around on the ice at John Redmond Reservoir.",
      },
    ],
  },
  {
    slug: "red-headed-woodpecker",
    kind: "birds",
    number: "016",
    name: "Red-headed Woodpecker",
    scientific: "Melanerpes erythrocephalus",
    types: ["woodpeckers"],
    photos: [
      {
        src: "images/birds/red-headed-woodpecker-1.jpg",
        alt: "Red-headed Woodpecker photographed in Johnson County, Kansas",
        date: "2026-05-02",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "Always special to see a red-headed in my own yard! I loved the framing of this one through the maple leaves.",
      },
      {
        src: "images/birds/red-headed-woodpecker-2.jpg",
        alt: "Red-headed Woodpecker photographed in Lucas County, Ohio",
        date: "2022-05-11",
        location: "Lucas County, Ohio",
        locationTag: "united-states",
        notes: "Spotted off the boardwalk at Maumee Bay State Park during spring migration.",
      },
      {
        src: "images/birds/red-headed-woodpecker-3.jpg",
        alt: "Red-headed Woodpecker photographed in Johnson County, Kansas",
        date: "2022-09-30",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "Stopping by my backyard feeder during fall migration.",
      },
      {
        src: "images/birds/red-headed-woodpecker-4.jpg",
        alt: "Red-headed Woodpecker photographed in Erie County, Ohio",
        date: "2022-05-10",
        location: "Erie County, Ohio",
        locationTag: "united-states",
        notes: "At the Pipe Creek Wildlife Area in Sandusky, Ohio, during spring migration.",
      },
    ],
  },
  {
    slug: "downy-woodpecker",
    kind: "birds",
    number: "017",
    name: "Downy Woodpecker",
    scientific: "Dryobates pubescens",
    types: ["woodpeckers"],
    photos: [
      {
        src: "images/birds/downy-woodpecker-1.jpg",
        alt: "Downy Woodpecker photographed in Johnson County, Kansas",
        date: "2022-10-26",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "Several downies stay year-round in my backyard.",
      },
      {
        src: "images/birds/downy-woodpecker-2.jpg",
        alt: "Downy Woodpecker photographed in Orange County, California",
        date: "2024-06-20",
        location: "Orange County, California",
        locationTag: "united-states",
        notes: "This female took a short rest in a tree in Huntington Central Park.",
      },
      {
        src: "images/birds/downy-woodpecker-3.jpg",
        alt: "Downy Woodpecker photographed in Benton County, Missouri",
        date: "2022-12-02",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "Hiding a seed in the bark of an oak tree at Lake of the Ozarks.",
      },
    ],
  },
  {
    slug: "red-bellied-woodpecker",
    kind: "birds",
    number: "018",
    name: "Red-bellied Woodpecker",
    scientific: "Melanerpes carolinus",
    types: ["woodpeckers"],
    photos: [
      {
        src: "images/birds/red-bellied-woodpecker-1.jpg",
        alt: "Red-bellied Woodpecker photographed in Johnson County, Kansas",
        date: "2023-03-19",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "This male spent a lot of time carving out a nest hole in my backyard. Sadly, the woodpeckers never nested there.",
      },
      {
        src: "images/birds/red-bellied-woodpecker-2.jpg",
        alt: "Red-bellied Woodpecker photographed in Johnson County, Kansas",
        date: "2022-10-26",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "Close-up view of the resident male in my backyard.",
      },
      {
        src: "images/birds/red-bellied-woodpecker-3.jpg",
        alt: "Red-bellied Woodpecker photographed in Johnson County, Kansas",
        date: "2022-08-09",
        location: "Johnson County, Kansas",
        locationTag: "united-states",
        notes: "Male on his favorite tree in my backyard, the giant cottonwood.",
      },
    ],
  },
  {
    slug: "ruby-throated-hummingbird",
    kind: "birds",
    number: "019",
    name: "Ruby-throated Hummingbird",
    scientific: "Archilochus colubris",
    types: ["hummingbirds"],
    photos: [
      {
        src: "images/birds/ruby-throated-hummingbird-1.jpg",
        alt: "Ruby-throated Hummingbird photographed in Hidalgo County, Texas",
        date: "2023-04-16",
        location: "Hidalgo County, Texas",
        locationTag: "united-states",
        notes: "A male looking for some nectar during spring migration at Estero Llano Grande State Park.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-2.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-05-01",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A male perched in an oak at Lake of the Ozarks.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-3.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-05-06",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A female (no red throat) in an oak at Lake of the Ozarks.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-4.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-04-30",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A female casting a shadow as she hovers over a tree branch at Lake of the Ozarks.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-5.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-05-07",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A male sticking out his tongue at Lake of the Ozarks.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-6.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-05-07",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A male scratching at Lake of the Ozarks.",
      },
      {
        src: "images/birds/ruby-throated-hummingbird-7.jpg",
        alt: "Ruby-throated Hummingbird photographed in Benton County, Missouri",
        date: "2024-05-07",
        location: "Benton County, Missouri",
        locationTag: "united-states",
        notes: "A male perched in an oak at Lake of the Ozarks.",
      },
    ],
  },
];
   // END GENERATED SPECIES

/* ---- helpers used by home.js and species.js — no need to edit below ---- */

function getSpeciesByKind(kindId) {
  return SPECIES.filter((s) => s.kind === kindId);
}

function getSpeciesLocations(species) {
  const set = new Set(species.photos.map((p) => p.locationTag));
  return Array.from(set);
}

function getSpeciesBySlug(slug) {
  return SPECIES.find((s) => s.slug === slug);
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
