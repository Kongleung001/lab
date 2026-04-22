// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/web/";
    },
  },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/web/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/web/publications/";
          },
        },{id: "nav-facilities",
          title: "Facilities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/web/facilities/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/web/books/the_godfather/";
            },},{id: "facilities-led-cube-light-sources-i14-r27-thousliye",
          title: 'LED Cube light sources (I14-R27, THOUSLIYE).',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/0_facilities/";
            },},{id: "facilities-functional-near-infrared-spectroscopy-fnirs",
          title: 'Functional Near-infrared Spectroscopy (FNIRS)',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/1_facilities/";
            },},{id: "facilities-tobii-pro-nano-eye-tracker",
          title: 'Tobii Pro Nano Eye Tracker',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/2_facilities/";
            },},{id: "facilities-shimmer3-gsr-kit",
          title: 'Shimmer3 GSR+ Kit',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/3_facilities/";
            },},{id: "facilities-jeti-specbos-1211uv-2",
          title: 'Jeti specbos 1211UV-2',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/4_facilities/";
            },},{id: "facilities-konica-minolta-cm-17d",
          title: 'Konica Minolta CM-17d',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/5_facilities/";
            },},{id: "facilities-color-clibration-tool-datacolor-spyder",
          title: 'Color Clibration Tool Datacolor Spyder',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/6_facilities/";
            },},{id: "facilities-oculus-quest-2",
          title: 'Oculus Quest 2',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/7_facilities/";
            },},{id: "facilities-vive-focus-3",
          title: 'VIVE Focus 3',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/web/facilities/8_facilities/";
            },},{id: "people-bojing-hou",
          title: 'Bojing HOU',
          description: "Multimodal Emotion Recognition",
          section: "People",handler: () => {
              window.location.href = "/web/people/Bojing_HOU/";
            },},{id: "people-chengliang-ping",
          title: 'Chengliang Ping',
          description: "Colour Perception in Product-Service System (PSS) Evaluation",
          section: "People",handler: () => {
              window.location.href = "/web/people/Chengliang_Ping/";
            },},{id: "people-dehan-jia",
          title: 'Dehan JIA',
          description: "Built Environment and Human Health",
          section: "People",handler: () => {
              window.location.href = "/web/people/Dehan_JIA/";
            },},{id: "people-lina-xu",
          title: 'Lina XU',
          description: "Colour Cognition / Neuroergonomics / Physiological Computing",
          section: "People",handler: () => {
              window.location.href = "/web/people/Lina_XU/";
            },},{id: "people-luwen-yu",
          title: 'Luwen_Yu',
          description: "Assistent Professor in HKUST(GZ), Research Interests in Colour Science and Design / Colour Perception / Colour Behaviour / Colour Cognition / Colour Psychology",
          section: "People",handler: () => {
              window.location.href = "/web/people/Luwen_Yu/";
            },},{id: "people-qi-xiang",
          title: 'Qi XIANG',
          description: "Color Science and Material Perception in Fashion Textiless",
          section: "People",handler: () => {
              window.location.href = "/web/people/Qi_XIANG/";
            },},{id: "people-shaobo-yan",
          title: 'Shaobo YAN',
          description: "Color Psychology, Emotion",
          section: "People",handler: () => {
              window.location.href = "/web/people/Shaobo_YAN/";
            },},{id: "people-wenan-li",
          title: 'Wenan LI',
          description: "Lighting environment and creativity",
          section: "People",handler: () => {
              window.location.href = "/web/people/Wenan_LI/";
            },},{id: "people-xingkai-wang",
          title: 'Xingkai WANG',
          description: "Colour Design, Collaborative Design / Human Factors Engineering",
          section: "People",handler: () => {
              window.location.href = "/web/people/Xingkai_WANG/";
            },},{id: "people-yufan-li",
          title: 'Yufan Li',
          description: "Computational Aesthetics",
          section: "People",handler: () => {
              window.location.href = "/web/people/Yufan_Li/";
            },},{id: "people-yuqi-liang",
          title: 'Yuqi LIANG',
          description: "Cognitive Science",
          section: "People",handler: () => {
              window.location.href = "/web/people/Yuqi_LIANG/";
            },},{id: "people-yuyang-jiang",
          title: 'Yuyang JIANG',
          description: "Expressive art and cognitive therapy",
          section: "People",handler: () => {
              window.location.href = "/web/people/Yuyang_JIANG/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
