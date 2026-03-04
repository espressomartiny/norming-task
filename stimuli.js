const stimuli = [
  { cue: "dopis", en: "letter", ep_verb: "psát", ep_verb_freq: "h", cue_freq: "high", category: "text" },
  { cue: "esej", en: "essay", ep_verb: "psát", ep_verb_freq: "h", cue_freq: "mid", category: "text" },
  { cue: "pohlednice", en: "postcard", ep_verb: "psát", ep_verb_freq: "h", cue_freq: "low", category: "text" },

  { cue: "fotbal", en: "soccer", ep_verb: "hrát", ep_verb_freq: "h", cue_freq: "high", category: "entertaiment" },
  { cue: "kostka", en: "dice", ep_verb: "hrát", ep_verb_freq: "h", cue_freq: "mid", category: "entertaiment" },
  { cue: "piano", en: "piano", ep_verb: "hrát", ep_verb_freq: "h", cue_freq: "low", category: "entertaiment" },

  { cue: "chléb", en: "bread", ep_verb: "jíst", ep_verb_freq: "m", cue_freq: "high", category: "food" },
  { cue: "večeře", en: "dinner", ep_verb: "jíst", ep_verb_freq: "m", cue_freq: "mid", category: "food" },
  { cue: "kapr", en: "carp", ep_verb: "jíst", ep_verb_freq: "m", cue_freq: "low", category: "food" },

  { cue: "mýdlo", en: "soap", ep_verb: "vyrábět", ep_verb_freq: "h", cue_freq: "mid", category: "everyday" },
  { cue: "parfém", en: "perfume", ep_verb: "vyrábět", ep_verb_freq: "h", cue_freq: "low", category: "everyday" },
  { cue: "auto", en: "car", ep_verb: "vyrábět", ep_verb_freq: "h", cue_freq: "high", category: "everyday" },

  { cue: "stěna", en: "wall", ep_verb: "zdobit", ep_verb_freq: "l", cue_freq: "high", category: "housing" },
  { cue: "stůl", en: "table", ep_verb: "zdobit", ep_verb_freq: "l", cue_freq: "mid", category: "housing" },
  { cue: "hrob", en: "grave", ep_verb: "zdobit", ep_verb_freq: "l", cue_freq: "low", category: "housing" },

  { cue: "šaty", en: "dress", ep_verb: "šít", ep_verb_freq: "m", cue_freq: "high", category: "clothing" },
  { cue: "kostým", en: "costume", ep_verb: "šít", ep_verb_freq: "m", cue_freq: "mid", category: "clothing" },
  { cue: "džíny", en: "jeans", ep_verb: "šít", ep_verb_freq: "m", cue_freq: "low", category: "clothing" },

  { cue: "kniha", en: "book", ep_verb: "číst", ep_verb_freq: "h", cue_freq: "high", category: "text" },
  { cue: "komiks", en: "comic", ep_verb: "číst", ep_verb_freq: "h", cue_freq: "mid", category: "text" },
  { cue: "encyklopedie", en: "encyclopedia", ep_verb: "číst", ep_verb_freq: "h", cue_freq: "low", category: "text" },

  { cue: "dům", en: "house", ep_verb: "navrhovat", ep_verb_freq: "l", cue_freq: "high", category: "housing" },
  { cue: "nábytek", en: "furniture", ep_verb: "navrhovat", ep_verb_freq: "l", cue_freq: "mid", category: "housing" },
  { cue: "zařízení", en: "equipment", ep_verb: "navrhovat", ep_verb_freq: "l", cue_freq: "low", category: "housing" },

  { cue: "nádobí", en: "dishes", ep_verb: "mýt", ep_verb_freq: "l", cue_freq: "high", category: "everyday" },
  { cue: "sklenice", en: "glass", ep_verb: "mýt", ep_verb_freq: "l", cue_freq: "mid", category: "everyday" },
  { cue: "schody", en: "stairs", ep_verb: "mýt", ep_verb_freq: "l", cue_freq: "low", category: "everyday" },

  { cue: "boty", en: "shoes", ep_verb: "nosit", ep_verb_freq: "m", cue_freq: "high", category: "clothing" },
  { cue: "paruka", en: "wig", ep_verb: "nosit", ep_verb_freq: "m", cue_freq: "mid", category: "clothing" },
  { cue: "náušnice", en: "earring", ep_verb: "nosit", ep_verb_freq: "m", cue_freq: "low", category: "clothing" },

  { cue: "fotka", en: "photo", ep_verb: "chtít", ep_verb_freq: "m", cue_freq: "high", category: "entertaiment" },
  { cue: "tetování", en: "tattoo", ep_verb: "chtít", ep_verb_freq: "m", cue_freq: "low", category: "entertaiment" },
  { cue: "film", en: "film", ep_verb: "chtít", ep_verb_freq: "m", cue_freq: "mid", category: "entertaiment" },

  { cue: "tělo", en: "body", ep_verb: "pitvat", ep_verb_freq: "l", cue_freq: "high", category: "nature" },
  { cue: "žába", en: "frog", ep_verb: "pitvat", ep_verb_freq: "l", cue_freq: "mid", category: "nature" },
  { cue: "pampeliška", en: "dandelion", ep_verb: "pitvat", ep_verb_freq: "l", cue_freq: "low", category: "nature" },

  { cue: "voda", en: "water", ep_verb: "ohřívat", ep_verb_freq: "l", cue_freq: "high", category: "food" },
  { cue: "mléko", en: "milk", ep_verb: "ohřívat", ep_verb_freq: "l", cue_freq: "mid", category: "food" },
  { cue: "káva", en: "coffee", ep_verb: "ohřívat", ep_verb_freq: "l", cue_freq: "low", category: "food" },

  { cue: "škola", en: "school", ep_verb: "navštěvovat", ep_verb_freq: "m", cue_freq: "high", category: "place" },
  { cue: "knihovna", en: "library", ep_verb: "navštěvovat", ep_verb_freq: "m", cue_freq: "mid", category: "place" },
  { cue: "sauna", en: "sauna", ep_verb: "navštěvovat", ep_verb_freq: "m", cue_freq: "low", category: "place" },

  { cue: "most", en: "bridge", ep_verb: "stavět", ep_verb_freq: "h", cue_freq: "high", category: "housing" },
  { cue: "sněhulák", en: "snowman", ep_verb: "stavět", ep_verb_freq: "h", cue_freq: "mid", category: "entertaiment" },
  { cue: "socha", en: "statue", ep_verb: "stavět", ep_verb_freq: "h", cue_freq: "low", category: "entertaiment" },
  { cue: "garáž", en: "garage", ep_verb: "stavět", ep_verb_freq: "h", cue_freq: "low", category: "housing" },

  { cue: "kámen", en: "stone", ep_verb: "používat", ep_verb_freq: "h", cue_freq: "low", category: "nature" },
  { cue: "dřevo", en: "wood", ep_verb: "používat", ep_verb_freq: "h", cue_freq: "mid", category: "nature" },
  { cue: "hranol", en: "prism", ep_verb: "používat", ep_verb_freq: "h", cue_freq: "low", category: "nature" },
  { cue: "krém", en: "cream", ep_verb: "používat", ep_verb_freq: "h", cue_freq: "high", category: "everyday" },
];
