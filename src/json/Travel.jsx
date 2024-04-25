
const travelData =[
    {
        key: "0",
        Imagesource:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Altit_Fort%2C_Hunza.jpg/1280px-Altit_Fort%2C_Hunza.jpg",
        Country:"Pakistan",
        Location:"https://www.google.com/maps/place/Hunza+Valley/@36.3163044,74.6490085,16.5z/data=!4m14!1m7!3m6!1s0x38e8a0927450692b:0x866b1b1181ca7cea!2sHunza+Valley!8m2!3d36.316666!4d74.6499863!16zL20vMGNtOWdm!3m5!1s0x38e8a0927450692b:0x866b1b1181ca7cea!8m2!3d36.316666!4d74.6499863!16zL20vMGNtOWdm!5m1!1e4?entry=ttu",
        Placename:"Hunza Valley",
        Visitdate:"05 May,2024 - 10 May,2024",
        About:"The Hunza Valley is a mountainous valley in the northern part of the Gilgit_Baltistan region of Pakistan.The valley lies along the Hunza River, and borders Ishkoman to the northwest, Shigar to the southeast, Afghanistan's Wakhan Corridor to the north, and the Xinjiang region of China to the northeast.",
    },

    {
        key: "1",
        Imagesource:"https://cdn.audleytravel.com/1050/750/79/1314620-banff-national-park-alberta.webp",
        Country:"Canada",
        Location:"https://www.google.com/maps/place/Lake+Minnewanka/@51.2710218,-115.4238155,13.25z/data=!4m15!1m8!3m7!1s0x5370ca45910c4afd:0xcaafaebedaac9463!2sBanff,+AB,+Canada!3b1!8m2!3d51.1784304!4d-115.5707903!16zL20vMDFfNjB3!3m5!1s0x5370d2948efafecd:0x648548874b447ec6!8m2!3d51.2640686!4d-115.3745674!16zL20vMDNtaDV4!5m1!1e4?entry=ttu",
        Placename:"Banff, Alberta",
        Visitdate:"05 June,2024 - 10 June,2024",
        About:"Banff is a town in Banff National Park, Alberta, Canada, in Alberta's Rockies .Banff is a resort town and one of Canada's most popular tourist destinations. Known for its mountainous surroundings and hot springs, it is a destination for outdoor sports and hiking, biking,scrambling scrambling and skiing.",
    },

    {
        key: "2",
        Imagesource:"https://visitgilgitbaltistan.gov.pk/images/articles/places/Image2023-06-211687345032.jpg",
        Country:"Pakistan",
        Location:"https://www.google.com/maps/place/Fairy+Meadows/@35.3843508,74.5348967,13z/data=!3m1!4b1!4m6!3m5!1s0x38e6ecc4acc8c687:0x6e151bcebb07d81d!8m2!3d35.3873191!4d74.5785485!16s%2Fm%2F0119rz2d!5m1!1e4?entry=ttu",
        Placename:"Fairy Meadows National Park",
        Visitdate:"05 July,2024 - 10 July,2024",
        About:"Fairy Meadows named by German climbers (German Märchenwiese,fairy tale meadows and locally known as Joot, is an area of grassland near one of the base camp sites of Nanga Parbat, located in Diamer District in Gilgit-Baltistan region in Pakistan lakes  in Pakistan lakes in Western .",
    },

    {
        key: "3",
        Imagesource:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_563,q_75,w_1000/v1/clients/lakegenevawi/2021_VG_Abbey_Springs_2021_NEW_094f86d7-c0e3-4045-940c-93ce5d254868.png",
        Country:"Switzerland",
        Location:"https://www.google.com/maps/place/Lake+Geneva,+WI+53147,+USA/@42.5817294,-88.4537225,14z/data=!4m15!1m8!3m7!1s0x880584e9f85c4509:0x9eb9a6efc12afe43!2sLake+Geneva,+WI+53147,+USA!3b1!8m2!3d42.5916836!4d-88.4334301!16zL20vMDExY2c5!3m5!1s0x880584e9f85c4509:0x9eb9a6efc12afe43!8m2!3d42.5916836!4d-88.4334301!16zL20vMDExY2c5!5m1!1e4?entry=ttu",
        Placename:"Lake Geneva",
        Visitdate:"05 August,2024 - 10 August,2024",
        About:"Lake Geneva is a deep lake on the north side of the Alps, shared between Switzerland and France. It is one of the largest lakes Western Europe and the  in Western Europe and the largest on the course of the Rhône.lakes in Western Europe and the largest on the course of the Rhône.",
    },

    {
        key: "4",
        Imagesource:"https://www.thewholeworldisaplayground.com/wp-content/uploads/2022/12/How-to-Buy-Louvre-Tickets.jpg",
        Country:"Paris",
        Location:"https://www.google.com/maps/place/Louvre+Pyramid/@48.8606146,2.3350691,17z/data=!4m14!1m7!3m6!1s0x47e671d877937b0f:0xb975fcfa192f84d4!2sLouvre+Museum!8m2!3d48.8606111!4d2.337644!16zL20vMDRnZHI!3m5!1s0x47e66e267a32d441:0xb0088e1f7c07f451!8m2!3d48.8610135!4d2.3358583!16zL20vMDk0bGxn!5m1!1e4?entry=ttu",
        Placename:"Louvre Museum's",
        Visitdate:"05 December,2024 - 10 December,2024",
        About:" The Louvre is a national art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.",
    },

    {
        key: "5",
        Imagesource:"https://a.cdn-hotels.com/gdcs/production102/d1521/ee324a21-ee8f-477b-8f83-466783e99edd.jpg",
        Country:"South Africa",
        Location:"https://www.google.com/maps/place/Cape+Town,+South+Africa/@-33.9126408,17.9966226,9z/data=!4m15!1m8!3m7!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!2sCape+Town,+South+Africa!3b1!8m2!3d-33.922087!4d18.4231418!16zL20vMDF5ajI!3m5!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!8m2!3d-33.922087!4d18.4231418!16zL20vMDF5ajI!5m1!1e4?entry=ttu",
        Placename:"Cape Town",
        Visitdate:"05 April,2024 - 10 April,2024",
        About:"Cape Town[a] is the legislative capital of South Africa. It is the country's oldest city and the seat of the Parliament of South Africa.[12] It is the country's second-largest city, after Johannesburg, and the largest in the Western lakes in Western Europe and the largest Cape.",
    },
]

export default travelData;