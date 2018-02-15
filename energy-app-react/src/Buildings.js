const buildings = [
    {
        name: 'Burton',
        apiVal: 39,
        avatar: 'https://i.pinimg.com/originals/5f/08/83/5f08832ee298016cb9baa79e2a44d0c0.jpg',
        buildingID: 1,
        floors: 4,

        coordinates: [
          {latitude: 44.46088117, longitude: -93.15677762}, // NW top
          {latitude: 44.46088117, longitude: -93.15664217}, //NE top
          {latitude: 44.46059784, longitude: -93.15664217},
          {latitude: 44.46059784, longitude: -93.15661401},
          {latitude: 44.46055764, longitude: -93.15661401}, // E: hi lower outer mid
          {latitude: 44.46055764, longitude: -93.15664217}, // E: hi lower inner mid
          {latitude: 44.460499, longitude: -93.156638},
          {latitude: 44.460501, longitude: -93.156614},
          {latitude: 44.460474, longitude: -93.156609},
          {latitude: 44.460465, longitude: -93.156635},
          {latitude: 44.460168, longitude: -93.156633},
          {latitude: 44.460174, longitude: -93.156780},
          {latitude: 44.460463, longitude: -93.156780},
          {latitude: 44.460472, longitude: -93.156810},
          {latitude: 44.460492, longitude: -93.156812},
          {latitude: 44.460492, longitude: -93.156799},
          {latitude: 44.460553, longitude: -93.156802},
          {latitude: 44.460561, longitude: -93.156818},
          {latitude: 44.460587, longitude: -93.156818},
          {latitude: 44.460593, longitude: -93.156778}
        ],
        marker_coordinate: {latitude: 44.46053452, longitude: -93.15672227},
        open: false,
        color: "lightgreen",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Burton", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://i.pinimg.com/originals/5f/08/83/5f08832ee298016cb9baa79e2a44d0c0.jpg'}]
    },
    {
        name: 'Sayles',
        apiVal: 10,
        avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set110/488110/a39b9465187c3a6c5255046bc6381f74.jpg',
        buildingID: 2,
        floors: 2,

        coordinates: [
          {latitude: 44.461621, longitude: -93.156230}, //NW most point
          {latitude: 44.461623, longitude: -93.155986},
          {latitude: 44.461278, longitude: -93.155970},
          {latitude: 44.461271, longitude: -93.155917},
          {latitude: 44.461190, longitude: -93.155911},
          {latitude: 44.461188, longitude: -93.155973},
          {latitude: 44.461148, longitude: -93.155973},
          {latitude: 44.461142, longitude: -93.156225},
          {latitude: 44.461194, longitude: -93.156228},
          {latitude: 44.461202, longitude: -93.156276},
          {latitude: 44.461173, longitude: -93.156276},
          {latitude: 44.461165, longitude: -93.156507},
          {latitude: 44.461342, longitude: -93.156528},
          {latitude: 44.461345, longitude: -93.156276},
          {latitude: 44.461301, longitude: -93.156273},
          {latitude: 44.461299, longitude: -93.156228},
          {latitude: 44.461619, longitude: -93.156233}
          ],
        marker_coordinate: {latitude: 44.4613041, longitude: -93.1560839},
        open: false,
        color: "yellow",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Sayles", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set110/488110/a39b9465187c3a6c5255046bc6381f74.jpg'}]
    },
    {
       name: 'Severance',
       apiVal: 61,
       avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set138/496138/dda9ea601b8c4166b0ee1cd3d86e6fbb.jpg',
       buildingID: 3,
       floors: 3,

       coordinates: [
          {latitude: 44.461058, longitude: -93.156866}, //NW
          {latitude: 44.461060, longitude: -93.156499},
          {latitude: 44.461108, longitude: -93.156507},
          {latitude: 44.461091, longitude: -93.156287},
          {latitude: 44.461007, longitude: -93.156284},
          {latitude: 44.461001, longitude: -93.156236},
          {latitude: 44.460907, longitude: -93.156238},
          {latitude: 44.460855, longitude: -93.156281},
          {latitude: 44.460853, longitude: -93.156381},
          {latitude: 44.460917, longitude: -93.156520},
          {latitude: 44.460894, longitude: -93.156520},
          {latitude: 44.460903, longitude: -93.156818},
          {latitude: 44.460926, longitude: -93.156823},
          {latitude: 44.460926, longitude: -93.156874},
          {latitude: 44.461056, longitude: -93.156874}
        ],
         marker_coordinate: {latitude: 44.46097292, longitude: -93.15653451},
        open: false,
        color: "red",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Severance", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set138/496138/dda9ea601b8c4166b0ee1cd3d86e6fbb.jpg'}]
    },
    {
       name: 'Davis',
       apiVal: 44,
       avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images/645842.jpg',
       buildingID: 4,
       floors: 4,

       coordinates: [
        {latitude: 44.460136, longitude: -93.156831},
        {latitude: 44.460146, longitude: -93.156762},
        {latitude: 44.460154, longitude: -93.156758},
        {latitude: 44.460155, longitude: -93.156721},
        {latitude: 44.460147, longitude: -93.156720},
        {latitude: 44.460144, longitude: -93.156719},
        {latitude: 44.460146, longitude: -93.156628},
        {latitude: 44.460156, longitude: -93.156628},
        {latitude: 44.460158, longitude: -93.156583},
        {latitude: 44.460150, longitude: -93.156580},
        {latitude: 44.460149, longitude: -93.156506},
        {latitude: 44.460114, longitude: -93.156503},
        {latitude: 44.460109, longitude: -93.156281},
        {latitude: 44.460022, longitude: -93.156279},
        {latitude: 44.460019, longitude: -93.156495},
        {latitude: 44.460034, longitude: -93.156519},
        {latitude: 44.460033, longitude: -93.156574},
        {latitude: 44.460024, longitude: -93.156574},
        {latitude: 44.460023, longitude: -93.156629},
        {latitude: 44.460031, longitude: -93.156627},
        {latitude: 44.460032, longitude: -93.156707},
        {latitude: 44.460021, longitude: -93.156706},
        {latitude: 44.460019, longitude: -93.156774},
        {latitude: 44.460033, longitude: -93.156776},
        {latitude: 44.460029, longitude: -93.156835},
        {latitude: 44.460136, longitude: -93.156832}
        ],
        marker_coordinate: {latitude: 44.46009804, longitude: -93.15659352},
        open: false,
        color: "yellow",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Davis", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images/645842.jpg'}]
    },
    {
       name: 'Musser',
       apiVal: 57,
       avatar: 'http://www.peoplesco.com/assets/images/construction-specialties/inshied_carleton-musser.jpg',
       buildingID: 5,
       floors: 4,

       coordinates: [
        {latitude: 44.46012211, longitude: -93.15711826}, //NE
        {latitude: 44.46012211, longitude: -93.15734357}, //NW
        {latitude: 44.45973158, longitude: -93.15734357}, //SW
        {latitude: 44.45973158, longitude: -93.15711826} //SE
          ],
          marker_coordinate: {latitude: 44.45989813, longitude: -93.15723896}, // center for callout
          open: false,
          color: "yellow",
          normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
          data:[{name: "Musser", electricity: "44W", water: "500G", heat: "1200U", avatar: 'http://www.peoplesco.com/assets/images/construction-specialties/inshied_carleton-musser.jpg'}]
    },
    {
      name: 'Myers',
      apiVal: 58,
      avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set088/496088/a1e01d7aac13ef62e2d4c92b2e12ac41.jpg',
      buildingID: 6,
      floors: 4,

      coordinates: [
        {latitude: 44.460989, longitude: -93.150818}, //NW
        {latitude: 44.460993, longitude: -93.150592},
        {latitude: 44.460472, longitude: -93.150592},
        {latitude: 44.460478, longitude: -93.150804},
        {latitude: 44.460991, longitude: -93.150826}
      ],
      marker_coordinate: {latitude: 44.4606781, longitude: -93.15070339},
      open: false,
      color: "yellow",
      normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
      data:[{name: "Myers", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set088/496088/a1e01d7aac13ef62e2d4c92b2e12ac41.jpg'}]
    },
    {
       name: 'Cassat',
       apiVal1: 40,
       apiVal2: 41, 
       avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set344/586344/19248e063227e0265fb66cd1379a2352.jpg',
       buildingID: 7,
       floors: 4,

       coordinates: [
        {latitude: 44.460134, longitude: -93.151295}, // mid NW most
        {latitude: 44.460130, longitude: -93.151172},
        {latitude: 44.460097, longitude: -93.151169},
        {latitude: 44.460097, longitude: -93.150906},
        {latitude: 44.460120, longitude: -93.150909},
        {latitude: 44.460126, longitude: -93.150922},
        {latitude: 44.460181, longitude: -93.150920},
        {latitude: 44.460178, longitude: -93.150879},
        {latitude: 44.460210, longitude: -93.150871},
        {latitude: 44.460212, longitude: -93.150748},
        {latitude: 44.460183, longitude: -93.150745},
        {latitude: 44.460178, longitude: -93.150724},
        {latitude: 44.460122, longitude: -93.150719},
        {latitude: 44.460124, longitude: -93.150751},
        {latitude: 44.459994, longitude: -93.150753},
        {latitude: 44.459994, longitude: -93.150713},
        {latitude: 44.459950, longitude: -93.150719},
        {latitude: 44.459950, longitude: -93.150753},
        {latitude: 44.459912, longitude: -93.150753},
        {latitude: 44.459915, longitude: -93.150871},
        {latitude: 44.459946, longitude: -93.150877},
        {latitude: 44.459954, longitude: -93.150920},
        {latitude: 44.459973, longitude: -93.150922},
        {latitude: 44.459969, longitude: -93.151148},
        {latitude: 44.459948, longitude: -93.151148},
        {latitude: 44.459948, longitude: -93.151188},
        {latitude: 44.459912, longitude: -93.151185},
        {latitude: 44.459906, longitude: -93.151303},
        {latitude: 44.459942, longitude: -93.151303},
        {latitude: 44.459942, longitude: -93.151343},
        {latitude: 44.459988, longitude: -93.151343},
        {latitude: 44.460002, longitude: -93.151303},
        {latitude: 44.460047, longitude: -93.151303},
        {latitude: 44.460051, longitude: -93.151341},
        {latitude: 44.460090, longitude: -93.151343},
        {latitude: 44.460090, longitude: -93.151303},
        {latitude: 44.460128, longitude: -93.151298}
          ],
        marker_coordinate: {latitude: 44.4600387, longitude: -93.15096893},
        open: false,
        color: "lightgreen",
        normalization: {electricity: {max: 40469, min: 3137}, water: {max: 47243177, min: 18784}},
        data:[{name: "Cassat", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set344/586344/19248e063227e0265fb66cd1379a2352.jpg'}]
    },
    {
        name: 'Memo',
        apiVal: 50,
        avatar: 'http://www.lhbcorp.com/wp-content/uploads/2013/08/CarletonCollege_CassatMemorial_070353_H11_G1.jpg',
        buildingID: 8,
        floors: 4,

        coordinates: [
          {latitude: 44.460207, longitude: -93.151968},
          {latitude: 44.460209, longitude: -93.151789},
          {latitude: 44.460125, longitude: -93.151789},
          {latitude: 44.460124, longitude: -93.151805},
          {latitude: 44.460084, longitude: -93.151799},
          {latitude: 44.460078, longitude: -93.151675},
          {latitude: 44.460091, longitude: -93.151669},
          {latitude: 44.460091, longitude: -93.151557},
          {latitude: 44.460051, longitude: -93.151555},
          {latitude: 44.460051, longitude: -93.151530},
          {latitude: 44.460004, longitude: -93.151529},
          {latitude: 44.460002, longitude: -93.151558},
          {latitude: 44.459910, longitude: -93.151559},
          {latitude: 44.459910, longitude: -93.151683},
          {latitude: 44.459978, longitude: -93.151684},
          {latitude: 44.459974, longitude: -93.151840},
          {latitude: 44.459907, longitude: -93.151842},
          {latitude: 44.459910, longitude: -93.151958},
          {latitude: 44.459942, longitude: -93.151963},
          {latitude: 44.459942, longitude: -93.151974},
          {latitude: 44.459994, longitude: -93.151974},
          {latitude: 44.459996, longitude: -93.151958},
          {latitude: 44.460122, longitude: -93.151955},
          {latitude: 44.460122, longitude: -93.151968},
          {latitude: 44.460208, longitude: -93.151972}
        ],
        marker_coordinate: {latitude: 44.46003104, longitude: -93.15181651},
        open: false,
        color: "lightgreen",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Memo", electricity: "44W", water: "500G", heat: "1200U", avatar: 'http://www.lhbcorp.com/wp-content/uploads/2013/08/CarletonCollege_CassatMemorial_070353_H11_G1.jpg'}]
    },
    {
        name: 'Nourse',
        apiVal: 59,
        avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images_local/1057376.jpg',
        buildingID: 9,
        floors: 3,

        coordinates: [
          {latitude: 44.46060358, longitude: -93.15181822}, //NE - lower theater
          {latitude: 44.4606055, longitude: -93.15172836}, //SE - lower theater
          {latitude: 44.46075865, longitude: -93.15172836}, //NE - upper theater
          {latitude: 44.46075865, longitude: -93.1519644}, //NW - upper theater
          {latitude: 44.46072993, longitude: -93.1519644}, //SW - lower theater
          {latitude: 44.46072993, longitude: -93.15201804}, //NW - upper outer
          {latitude: 44.46066484, longitude: -93.15201938}, //SW - upper outer
          {latitude: 44.46066389, longitude: -93.1519644}, //NW - upper inner
          {latitude: 44.4603997, longitude: -93.1519644}, //SW - lower inner
          {latitude: 44.4603997, longitude: -93.15200865}, //NW - lower inner
          {latitude: 44.46032408, longitude: -93.15200865}, //SW - lowest
          {latitude: 44.46032408, longitude: -93.15181822} //SE - lowest
        ],
        marker_coordinate: {latitude: 44.46054218, longitude: -93.15189161},
        open: false,
        color: "red",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Nourse", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images_local/1057376.jpg'}]
    },
    {
        name: 'Evans',
        apiVal: 27,
        avatar: 'http://finance-commerce.com/files/2013/07/EvansHall5x.jpg',
        buildingID: 10,
        floors: 5,

        coordinates: [
          {latitude: 44.460765, longitude: -93.149796}, //NW top
          {latitude: 44.460773, longitude: -93.149485},
          {latitude: 44.460727, longitude: -93.149482},
          {latitude: 44.460735, longitude: -93.149426},
          {latitude: 44.460679, longitude: -93.149426},
          {latitude: 44.460673, longitude: -93.149557},
          {latitude: 44.460629, longitude: -93.149560},
          {latitude: 44.460629, longitude: -93.149613},
          {latitude: 44.460398, longitude: -93.149613},
          {latitude: 44.460400, longitude: -93.149587},
          {latitude: 44.460337, longitude: -93.149584},
          {latitude: 44.460333, longitude: -93.149766},
          {latitude: 44.460398, longitude: -93.149774},
          {latitude: 44.460398, longitude: -93.149742},
          {latitude: 44.460649, longitude: -93.149753},
          {latitude: 44.460649, longitude: -93.149793},
          {latitude: 44.460762, longitude: -93.149796}
        ],
        marker_coordinate: {latitude: 44.46054792, longitude: -93.14967878},
        open: false,
        color: "lightgreen",
        normalization: {electricity: {max: 47703, min: 3228}, water: {max: 316880, min: 4232}},
        data:[{name: "Evans", electricity: "44W", water: "500G", heat: "1200U", avatar: 'http://finance-commerce.com/files/2013/07/EvansHall5x.jpg'}]
    },
    {
        name: 'Goodhue',
        apiVal1: 47, 
        apiVal2: 48, 
        avatar: 'https://emeraldcitybookreview.com/wp-content/uploads/sites/163/2015/10/8-GoodhueExt.jpg',
        buildingID: 11,
        floors: 4,

        coordinates: [
          {latitude: 44.462710, longitude: -93.150169}, // NW top
          {latitude: 44.462844, longitude: -93.149890},
          {latitude: 44.462270, longitude: -93.149415},
          {latitude: 44.462253, longitude: -93.149482},
          {latitude: 44.462236, longitude: -93.149477},
          {latitude: 44.462247, longitude: -93.149436},
          {latitude: 44.462021, longitude: -93.149241},
          {latitude: 44.461954, longitude: -93.149383},
          {latitude: 44.462178, longitude: -93.149589},
          {latitude: 44.462203, longitude: -93.149533},
          {latitude: 44.462222, longitude: -93.149546},
          {latitude: 44.462211, longitude: -93.149573},
          {latitude: 44.462548, longitude: -93.149858},
          {latitude: 44.462565, longitude: -93.149833},
          {latitude: 44.462584, longitude: -93.149860},
          {latitude: 44.462525, longitude: -93.150000},
          {latitude: 44.462706, longitude: -93.150166}
          ],
        marker_coordinate: {latitude: 44.46243466, longitude: -93.14965099},
        open: false,
        color: "red",
        normalization: {electricity: {max: 38955, min: 2427}, water: {max: 285100, min: 3200}},
        data:[{name: "Goodhue", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://emeraldcitybookreview.com/wp-content/uploads/sites/163/2015/10/8-GoodhueExt.jpg'}]
    },
    {
        name: 'Watson',
        apiVal: 64,
        avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set183/490183/8bc51bab3276c56a4ecc7398aeee40de.jpg',
        buildingID: 12,
        floors: 7,

        coordinates: [
          {latitude: 44.45949419, longitude: -93.15014988}, //NE
          {latitude: 44.45949419, longitude: -93.15048516}, //NW
          {latitude: 44.45923, longitude: -93.15048516}, //SW
          {latitude: 44.45923, longitude: -93.15014988} //SE
        ],
        marker_coordinate: {latitude: 44.45935334, longitude: -93.1503252},
        open: false,
        color: "yellow",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Watson", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/sized_images_local/set183/490183/8bc51bab3276c56a4ecc7398aeee40de.jpg'}]
    },
    {
        name: 'Scoville',
        apiVal: 60,
        avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images_local/1579342.jpg',
        buildingID: 11,
        floors: 2,

        coordinates: [
          {latitude: 44.460178, longitude: -93.156228}, // NW
          {latitude: 44.460174, longitude: -93.156083},
          {latitude: 44.460218, longitude: -93.156080},
          {latitude: 44.460210, longitude: -93.155954},
          {latitude: 44.460172, longitude: -93.155946},
          {latitude: 44.460172, longitude: -93.155911},
          {latitude: 44.460030, longitude: -93.155906},
          {latitude: 44.460026, longitude: -93.156222},
          {latitude: 44.460168, longitude: -93.156228}
        ],
        marker_coordinate: {latitude: 44.46011336, longitude: -93.15605708},
        open: false,
        color: "lightgreen",
        normalization: {electricity: {max: 21664, min: 1334}, water: {max: 47243177, min: 18784}},
        data:[{name: "Scoville", electricity: "44W", water: "500G", heat: "1200U", avatar: 'https://apps.carleton.edu/reason_package/reason_4.0/www/images_local/1579342.jpg'}]
    },
]


export default buildings
