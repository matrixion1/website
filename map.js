const stateInfo = {
  'MY01': {
    name: 'Johor', 
    capital: 'Johor Bahru', 
    flag:'Flag/Johor.png' ,
    foods:[
      { name: 'Johor Laksa',
        image: 'Food/Johor/JohorLaksa.png',
        description: 'It uses a rich fish broth as the soup base, usually made by simmering Indian mackerel (Ikan Kembung). The soup is milky white in color, flavorful, and has a slightly tangy and spicy taste. Typical ingredients include rice noodles, shredded cucumber, bean sprouts, boiled egg, fresh prawns, chopped scallions, along with lime juice and chili sauce. The overall taste is tangy, spicy, and appetizing with a rich texture.',
      },
      { name: 'Mee Bandung Muar Asli',
        image: 'Food/Johor/MeeBandungMuarAsli.png',
        description: 'Famous for its rich bak kut teh (herbal pork bone broth) soup base, the soup incorporates various spices and seasonings, resulting in a flavorful and slightly sweet taste. The noodles are usually yellow egg noodles, with abundant toppings including slices of beef, prawns, boiled egg, tofu skin, peanuts, and vegetables.',
      },
      { name: 'Otak-Otak Muar',
        image: 'Food/Johor/OtakOtakMuar.png',
        description: 'Made from fish paste mixed with coconut milk and spices, then wrapped in banana leaves and steamed or grilled. It is known for its unique spice blend and delicate texture, with a delicious flavor featuring rich coconut aroma and complex layers of spices. The texture is soft and smooth, with a strong fragrant aroma.',
      }
    ]
  },
    
  'MY02': { 
    name: 'Kedah',
    capital: 'Alor Setar',
    flag:'Flag/Kedah.png',
    foods:[
      {
        name: 'Gulai Nangka',
        image: 'Food/Kedah/GulaiNangka.png',
        description: 'Unripe jackfruit is cut into pieces and simmered together with coconut milk and spices, forming a rich and spicy curry sauce. The jackfruit absorbs the strong curry flavors, resulting in a soft and tender texture, sometimes with a slight hint of sweetness. It is commonly served with steamed white rice.',
      },
      {
        name: 'Nasi Ulam',
        image: 'Food/Kedah/NasiUlam.png',
        description: 'Steamed white rice is mixed with various fresh herbs, spices, and vegetables. Sometimes toasted grated coconut, crushed peanuts, or dried anchovies are added. Nasi Ulam has a fresh taste with a rich herbal aroma and a refreshing texture, making it a great accompaniment to spicy dishes.',
      },
      {
        name: 'Pulut Durian',
        image: 'Food/Kedah/PulutDurian.png',
        description: 'Glutinous rice cooked with coconut milk is paired with fresh or ripe durian flesh. The sticky rice is soft and sweet, infused with rich coconut aroma and the distinctive strong fragrance of durian. It is usually eaten cold and sometimes served with syrup or palm sugar, offering a sweet yet not overly heavy dessert.',
      }
    ]
  },

  'MY03': {
    name: 'Kelantan',
    capital: 'Kota Bharu',
    flag:'Flag/Kelantan.png',
    foods:[
      {
        name: 'Laksam',
        image: 'Food/Kelantan/Laksam.png',
        description: 'Laksam consists of thick and soft rice rolls made from rice batter. The rice rolls are cut into pieces and soaked in a rich coconut milk fish gravy, which is flavorful with a slight sweetness and spiciness. It is usually served with cucumber slices and some fried shallots as garnishes. Laksam has a soft texture, and the coconut gravy provides a smooth and rich taste.',
      },
      {
        name: 'Nasi Kerabu',
        image: 'Food/Kelantan/NasiKerabu.png',
        description: 'The blue color of the rice comes from natural coloring using butterfly pea flowers. It is served with abundant accompaniments, including grilled fish, fried chicken skin, fried tofu, boiled eggs, various fresh herbs and vegetables, grated coconut, and chili sauce. The overall flavor is layered with fragrant, spicy, salty, and slightly sweet notes.',
      },
      {
        name: 'Nasi Tumpang',
        image: 'Food/Kelantan/NasiTumpang.png',
        description: 'Rice and various toppings are layered and wrapped in triangular banana leaves. Common fillings include curried chicken, boiled eggs, cucumber slices, and fried fish. The taste is rich, combining the aromatic curry and the soft texture of the rice.',
      },
    ]
   },

  'MY04': {
    name: 'Malacca',
    capital: 'Malacca City',
    flag:'Flag/Melaka.png',
    foods:[
      {
        name: 'Asam Pedas',
        image: 'Food/Melaka/AsamPedas.png',
        description: 'The sour and spicy soup base is made from tamarind juice (asam), chili, ginger, garlic, lemongrass, and various spices, with additions of catfish, sea bass, prawns, or squid. The soup is tangy and appetizing, with a rich and flavorful broth.',
      },
      {
        name: 'Chicken Rice Ball',
        image: 'Food/Melaka/ChickenRiceBall.png',
        description: 'The rice is shaped into compact balls, paired with poached chicken, and served with special chili sauce, ginger sauce, and soy sauce. The chicken rice balls are aromatic, the chicken tender, and the overall flavor delicious.',
      },
      {
        name: 'Nyonya Laksa',
        image: 'Food/Melaka/NyonyaLaksa.png',
        description: 'Using coconut milk as the soup base, the broth is thick and slightly sweet, with abundant ingredients including rice noodles, prawns, fish cakes, fried tofu puffs, and eggs. Nyonya Laksa has layered flavors, a balanced sour and spicy taste, and a smooth texture.',
      },
    ]
  },

  'MY05': {
    name: 'Negeri Sembilan',
    capital: 'Seremban',
    flag:'Flag/NegeriSembilan.png',
    foods:[
      {
        name: 'Daging Salai Masak Lemak',
        image: 'Food/NegeriSembilan/DagingSalaiMasakLemak.png',
        description: 'The beef is smoked for a long time, imparting a unique smoky aroma, then simmered together with spices and coconut milk to create a rich and creamy gravy. The dish has a complex texture, with tender and juicy beef, usually served with steamed white rice or traditional cakes.',
      },
      {
        name: 'Lemang',
        image: 'Food/NegeriSembilan/Lemang.png',
        description: 'The glutinous rice absorbs the rich fragrance of coconut milk and the fresh aroma of bamboo. The finished product has a slightly charred outer layer and a soft, sticky, and sweet interior. Lemang is typically eaten during festivals or traditional events, often accompanied by spicy coconut chili sauce (sambal) or grilled meats.',
      },
      {
        name: 'Masak Lemak Cili Api',
        image: 'Food/NegeriSembilan/MasakLemakCiliApi.png',
        description: 'Seasoned mainly with coconut milk and chili peppers (especially the small cili api), this dish is simmered with various ingredients such as fish, chicken, or vegetables. The dish features vibrant colors, a rich and spicy broth with coconut aroma, a smooth texture, combining spiciness and creamy sweetness.',
      },
    ]
  },

  'MY06': {
    name: 'Pahang',
    capital: 'Kuantan',
    flag:'Flag/Pahang.png',
    foods:[
      {
        name: 'Ikan Patin Masak Tempoyak',
        image: 'Food/Pahang/IkanPatinMasakTempoyak.png',
        description: 'Cooked by simmering catfish (Patin fish) together with fermented durian (Tempoyak). The fermented durian imparts a unique sour aroma that perfectly blends with the freshness of the fish, creating a rich and slightly sour gravy with a complex taste. It is usually served with steamed white rice.',
      },
      {
        name: 'Kuih Bakar',
        image: 'Food/Pahang/KuihBakar.png',
        description: 'Soft and slightly elastic in texture. The main ingredients include coconut milk, eggs, sugar, and flour, baked to perfection. Kuih Bakar has a rich, sweet flavor and is commonly enjoyed as a tea-time snack or festive dessert.',
      },
      {
        name: 'Opor Daging',
        image: 'Food/Pahang/OporDaging.png',
        description: 'The main ingredient is beef, slow-cooked with coconut milk and various spices. The gravy is rich and fragrant with coconut aroma, with a tender and flavorful texture. The fragrance of the spices and the creaminess of the coconut milk blend perfectly. It is usually served with steamed white rice or Ketupat.',
      },
    ]
  },

  'MY07': {
    name: 'Penang',
    capital: 'George Town',
    flag:'Flag/Penang.png',
    foods:[
      {
        name: 'Char Kway Teow',
        image: 'Food/Penang/CharKwayTeow.png',
        description: 'Stir-fried using flat rice noodles (kway teow) and eggs over high heat, with additions of prawns, blood cockles, bean sprouts, and scallions. The dish is seasoned mainly with soy sauce and chili sauce. It is fragrant, richly textured, and has a slight smoky char.',
      },
      {
        name: 'Penang Hokkien Mee',
        image: 'Food/Penang/PenangHokkienMee.png',
        description: 'The broth is made by simmering pork bones and prawn shells, resulting in a rich and flavorful soup. The noodles are usually a mix of yellow noodles and rice vermicelli, topped with large prawns, slices of pork, boiled egg, and bean sprouts. The soup is tangy and spicy, and tastes even better when paired with chili sauce.',
      },
      {
        name: 'Penang Rojak',
        image: 'Food/Penang/PenangRojak.png',
        description: 'Consists of various fruits along with fried tofu and fried dough fritters (youtiao), served with a sweet and spicy peanut sauce. Common ingredients include pineapple, green mango, cucumber, bean sprouts, fried dough fritters, and tofu. The sauce is thick and flavorful, offering a sweet, sour, and mildly spicy taste with a variety of textures.',
      },
    ]
  },

  'MY08': {
    name: 'Perak',
    capital: 'Ipoh',
    flag:'Flag/Perak.png',
    foods:[
      {
        name: 'Bean Sprout Chicken',
        image: 'Food/Perak/BeanSproutChicken.png',
        description: 'The main ingredients are tender poached chicken and crunchy bean sprouts. The chicken is usually boiled in plain water to keep it tender and juicy, paired with bean sprouts cooked in chicken broth, and served with special soy sauce and garlic chili sauce. The overall flavor is light and fresh.',
      },
      {
        name: 'Curry Mee',
        image: 'Food/Perak/CurryMee.png',
        description: 'The soup base is made by simmering coconut milk, curry powder, and various spices, resulting in a rich and spicy flavor. The noodles are usually thin rice vermicelli, with abundant toppings including fried tofu puffs, pig’s blood cake, prawns, eggs, and vegetables. It is often served with chili sauce or a tangy and spicy sauce, offering a layered taste experience.',
      },
      {
        name: 'Salt Baked Chicken',
        image: 'Food/Perak/SaltBakedChicken.png',
        description: 'The chicken is baked wrapped in salt, which keeps the meat tender and juicy with a subtle savory flavor. It is usually cut into pieces and served with a simple sauce.',
      },
    ]
  },

  'MY09': {
    name: 'Perlis',
    capital: 'Kangar',
    flag:'Flag/Perlis.png',
    foods:[
      {
        name: 'Kuih Dangai',
        image: 'Food/Perlis/KuihDangai.png',
        description: 'Made from glutinous rice flour, coconut milk, and sugar, deep-fried until golden brown. The exterior is crispy while the interior is soft and sweet. It is often flat or oval-shaped and is a traditional snack commonly found in rural areas of Malaysia.',
      },
      {
        name: 'Laksa Perlis',
        image: 'Food/Perlis/LaksaPerlis.png',
        description: 'The broth is primarily fish-based, fresh and refreshing, with simple yet flavorful ingredients. Common toppings include rice noodles, fish slices, shredded cucumber, bean sprouts, and chili sauce. The soup has a slightly sour and spicy taste.',
      },
      {
        name: 'Pulut Mangga',
        image: 'Food/Perlis/PulutMangga.png',
        description: 'Glutinous rice is cooked with coconut milk and served with fresh sliced mango. The rice is soft and sweet, rich with coconut flavor, while the mango is fresh and sweet, combining to create a rich and delicious dessert. It is usually enjoyed as an afternoon tea snack or festive dessert.',
      },
    ]
  },

  'MY10': {
    name: 'Selangor',
    capital: 'Shah Alam',
    flag:'Flag/Selangor.png',
    foods:[
      {
        name: 'Lontong',
        image: 'Food/Selangor/Lontong.png',
        description: 'Made from compressed blocks of glutinous rice, usually wrapped in banana leaves and steamed. Lontong is typically served with rich coconut curry, beans, vegetables, and boiled eggs. It has a fragrant taste and a soft, sticky texture. It is a classic dish commonly enjoyed during festivals and breakfast.',
      },
      {
        name: 'Mee Rebus',
        image: 'Food/Selangor/MeeRebus.png',
        description: 'Primarily made with yellow noodles, served with a thick and slightly sweet curry potato broth. The toppings are abundant, usually including bean sprouts, fried tofu puffs, boiled eggs, dried shrimp, and scallions. Mee Rebus has a delicious flavor with a mildly sweet curry aroma.',
      },
      {
        name: 'Satay Kajang',
        image: 'Food/Selangor/SatayKajang.png',
        description: 'Meat skewers (usually chicken, beef, or mutton) marinated with special seasonings, grilled over charcoal until fragrant, tender, and juicy. Satay Kajang is famous for its rich peanut sauce and secret chili sauce, offering a complex taste.',
      },
    ]
  },

  'MY11': {
    name: 'Terengganu',
    capital: 'Kuala Terengganu',
    flag:'Flag/Terengganu.png',
    foods:[
      {
        name: 'Keropok Lekor',
        image: 'Food/Terengganu/KeropokLekor.png',
        description: 'Made from a mixture of fish paste and tapioca flour, then either steamed or deep-fried. It has a chewy and elastic texture and is usually served with chili sauce.',
      },
      {
        name: 'Nasi Dagang',
        image: 'Food/Terengganu/NasiDagang.png',
        description: 'Primarily uses a mixture of glutinous rice and fragrant rice cooked in coconut milk and spices. It is typically served with curried fish and pickled cucumbers, offering a rich flavor and aromatic fragrance.',
      },
      {
        name: 'Pulut Lepa',
        image: 'Food/Terengganu/PulutLepa.png',
        description: 'Glutinous rice cooked with coconut milk is wrapped in banana leaves and then grilled or steamed. The outer banana leaf imparts a subtle aroma, while the rice is soft, sticky, and richly infused with coconut fragrance.',
      },
    ]
  },

  'MY12': {
    name: 'Sabah',
    capital: 'Kota Kinabalu',
    flag:'Flag/Sabah.png',
    foods:[
      {
        name: 'Bosou',
        image: 'Food/Sabah/Bosou.png',
        description: 'Made by naturally fermenting pork or fish mixed with salt, rice flour, and spices. It has a unique taste with sourness and a strong fermented aroma, often served as a side dish or accompaniment to rice.',
      },
      {
        name: 'Hinava',
        image: 'Food/Sabah/Hinava.png',
        description: 'Mainly uses fresh sea fish (usually tuna or snapper) sliced and mixed with lime juice, chili, onion, and ginger. It has a fresh, sour, and spicy flavor with a crunchy texture.',
      },
      {
        name: 'Tuaran Mee',
        image: 'Food/Sabah/TuaranMee.png',
        description: 'Primarily made with egg noodles that are thicker and have a chewy texture. The noodles are usually pan-fried until slightly charred, then stir-fried with chicken, seafood, bean sprouts, and scallions, resulting in a delicious and flavorful dish.',
      },
    ]
  },

  'MY13': {
    name: 'Sarawak',
    capital: 'Kuching',
    flag:'Flag/Sarawak.png',
    foods:[
      {
        name: 'Kek Lepis',
        image: 'Food/Sarawak/KekLepis.png',
        description: 'Made from coconut milk, glutinous rice, and palm sugar. The glutinous rice is soaked and steamed, then mixed with coconut milk and sugar, layered and wrapped in banana leaves before being steamed again. Kek Lepis has a golden color with a sweet, soft, and sticky texture, making it an indispensable dessert during traditional festivals and celebrations in Sarawak.',
      },
      {
        name: 'Manok Pansoh',
        image: 'Food/Sarawak/ManokPansoh.png',
        description: 'Chicken is combined with spices and coconut milk, placed inside a bamboo tube, sealed, and slowly roasted over charcoal. During cooking, the chicken absorbs the flavors of the spices and coconut milk inside the bamboo, resulting in tender, juicy meat with a distinctive bamboo aroma.',
      },
      {
        name: 'Sarawak Laksa',
        image: 'Food/Sarawak/SarawakLaksa.png',
        description: 'The broth is made by simmering prawn shells and spices, with coconut milk added, resulting in a rich and complex flavor. The toppings include rice vermicelli, shredded chicken, bean sprouts, eggs, coriander, and fried shallots. Sarawak Laksa has a balanced sour and spicy taste, a rich broth, and a complex texture.',
      }
    ]
  },

  'MY14': {
    name: 'Kuala Lumpur',
    capital: 'Kuala Lumpur',
    flag:'Flag/KualaLumpur.png',
    foods:[
      {
        name: 'Banana Leaf Rice',
        image: 'Food/KualaLumpur/BananaLeafRice.png',
        description: 'Meals are served on a large banana leaf, with rice typically fragrant rice (such as spiced rice or coconut rice) accompanied by a variety of curries, vegetables, tangy sauces, and fried items. Serving food on banana leaves adds a unique aroma, with a rich overall flavor and vibrant colors.',
      },
      {
        name: 'Claypot Loh Shu Fun',
        image: 'Food/KualaLumpur/ClaypotLohShuFun.png',
        description: 'Uses thin and smooth “silk stocking” rice vermicelli cooked together with chicken, prawns, shiitake mushrooms, and vegetables. The rice vermicelli in the claypot absorbs the rich broth, resulting in a silky texture and full flavor. Common condiments include soy sauce and chili sauce, giving off an enticing aroma.',
      },
      {
        name: 'Hokkien Mee',
        image: 'Food/KualaLumpur/HokkienMee.png',
        description: 'Mainly uses thick yellow noodles stir-fried quickly in pork lard over high heat, with a rich pork bone soy sauce added. Typical ingredients include slices of pork, fresh prawns, cuttlefish slices, and cabbage. The noodles are fried until slightly charred with a thick sauce, offering a rich taste and distinctive smoky aroma.',
      },
    ]
   },

  'MY15': {
    name: 'Labuan',
    capital: 'Victoria',
    flag:'Flag/Labuan.png',
    foods:[
      {
        name: 'Ambuyat',
        image: 'Food/Labuan/Ambuyat.png',
        description: 'Made from sago starch, it has a sticky and slightly elastic texture. It is usually eaten by rolling with bamboo chopsticks and served with various rich sauces such as chili sauce and sweet-and-sour sauce. The flavor is relatively mild',
      },
      {
        name: 'Ikan Bakar',
        image: 'Food/Labuan/IkanBakar.png',
        description: 'Fresh fish is marinated and then grilled over charcoal, resulting in tender and juicy meat with a smoky aroma. It is served with chili sauce, lime juice, or other condiments, offering a distinctive flavor. It is a popular dish at seaside stalls and night markets.',
      },
      {
        name: 'Nasi Minyak',
        image: 'Food/Labuan/NasiMinyak.png',
        description: 'The rice is cooked with spices, butter, and coconut milk, giving it a rich flavor with separate, fluffy grains. It is typically served with roasted chicken, curry, and various side dishes.',
      },
    ]
  },

  'MY16': {
    name: 'Putrajaya',
    capital: 'Putrajaya',
    flag:'Flag/Putrajaya.png',
    foods:[
      {
        name: 'Kuih Muih',
        image: 'Food/Putrajaya/KuihMuih.png',
        description: 'A type of traditional pastry with many varieties, including steaming, boiling, and frying methods. Common ingredients include glutinous rice, coconut milk, palm sugar, and various natural colorings. The textures and flavors are diverse, ranging from sweet to savory, and they are often served as tea snacks or festive treats.',
      },
      {
        name: 'Nasi Ambeng',
        image: 'Food/Putrajaya/NasiAmbeng.png',
        description: 'Served on a large platter for communal sharing. The main staple is white rice, accompanied by yellow curried chicken, beans, vegetables, fried tofu, eggs, and chili sauce. The overall flavor is rich and well-balanced.',
      },
      {
        name: 'Serunding Daging',
        image: 'Food/Putrajaya/SerundingDaging.png',
        description: 'A snack made from dried shredded beef fried with spices and coconut flakes, aromatic with a spicy-sweet taste. It is usually served as a side dish with white rice or used as a filling in bread',
      },
    ]
  }
};

const infoBox = document.getElementById("infoBox");
const paths = document.querySelectorAll("svg path");
const mapContainer = document.getElementById("map-container");
const mapWrapper = document.getElementById("map-wrapper");
const svg = document.querySelector("svg");
const foodPages = document.getElementById("food-pages"); 

// Scaling and translating variables
let currentScale = 1;
let currentX = 0;
let currentY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

// Show food page function
function showFoodPage(stateId) {
  mapContainer.style.display = 'none';
  document.querySelector('.zoom-controls').style.display = 'none';
  document.querySelector('.nav-indicator').style.display = 'none';
  foodPages.style.display = 'block';
  
  // Hide all food pages
  document.querySelectorAll('.food-pages').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected state's food page
  const selectedPage = document.getElementById(`page-${stateId}`);
  if (selectedPage) {
    selectedPage.classList.add('active');
  } else {
    // Create a default page for states without food data
    createDefaultFoodPage(stateId);
  }
}

// Show map function
function showMap() {
  const mapContainer = document.getElementById('map-container');
  const foodPages = document.getElementById('food-pages');
  
  mapContainer.style.display = 'block';
  document.querySelector('.zoom-controls').style.display = 'flex';
  document.querySelector('.nav-indicator').style.display = 'block';
  foodPages.style.display = 'none';
  
  // Remove active class from all food pages
  document.querySelectorAll('.food-page').forEach(page => {
    page.classList.remove('active');
  });
}

// Create default food page for states without specific data
function createDefaultFoodPage(stateId) {
  const stateName = stateInfo[stateId]?.name || 'Unknown State';
  const stateFlag = stateInfo[stateId]?.flag || '';
  
  const existingPage = document.getElementById(`page-${stateId}`);
  if (existingPage) {
    existingPage.classList.add('active');
    return;
  }
  
  // 确保food-pages-container存在
  let foodPagesContainer = document.querySelector('.food-pages-container');
  if (!foodPagesContainer) {
    const foodPages = document.getElementById('food-pages');
    foodPagesContainer = document.createElement('div');
    foodPagesContainer.className = 'food-pages-container';
    foodPages.appendChild(foodPagesContainer);
  }
  
  const defaultPage = document.createElement('div');
  defaultPage.className = 'food-page active';
  defaultPage.id = `page-${stateId}`;
  
  defaultPage.innerHTML = `
    <div class="page-header">
      <img src="${stateFlag}" alt="${stateName} Flag" class="state-flag" onerror="this.style.display='none'">
      <div class="page-title">Featured Food in ${stateName}</div>
    </div>
    <div class="food-list">
      ${stateInfo[stateId]?.foods?.map(food => `
        <div class="food-item">
          <div class="food-content">
            <img src="${food.image}" alt="${food.name}" class="food-image" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
            <div class="food-text">
              <div class="food-name">${food.name}</div>
              <div class="food-description">${food.description}</div>
            </div>
          </div>
        </div>
      `).join('') || `
        <div class="food-item">
          <div class="food-content">
            <div class="food-text">
              <div class="food-name">Coming Soon</div>
              <div class="food-description">Featured food information for ${stateName} will be available soon. Stay tuned for delicious local specialties!</div>
            </div>
          </div>
        </div>
      `}
    </div>
  `;
  
  foodPagesContainer.appendChild(defaultPage);
}

// Show food page function
function showFoodPage(stateId) {
  const mapContainer = document.getElementById('map-container');
  const foodPages = document.getElementById('food-pages');
  
  // Hide map and controls
  mapContainer.style.display = 'none';
  document.querySelector('.zoom-controls').style.display = 'none';
  document.querySelector('.nav-indicator').style.display = 'none';
  
  // Show food pages
  foodPages.style.display = 'block';
  
  // Remove active class from all food pages
  document.querySelectorAll('.food-page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Check if page exists, if not create it
  const existingPage = document.getElementById(`page-${stateId}`);
  if (existingPage) {
    existingPage.classList.add('active');
  } else {
    createDefaultFoodPage(stateId);
  }
  
  // Scroll to top of the food page
  foodPages.scrollTop = 0;
}

// Initialize food pages container on page load
document.addEventListener('DOMContentLoaded', function() {
  const foodPages = document.getElementById('food-pages');
  if (foodPages && !document.querySelector('.food-pages-container')) {
    const container = document.createElement('div');
    container.className = 'food-pages-container';
    
    // Move any existing food pages into the container
    const existingPages = foodPages.querySelectorAll('.food-page');
    existingPages.forEach(page => {
      container.appendChild(page);
    });
    
    // Add back button to food pages
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '← Back to Map';
    backBtn.onclick = showMap;
    
    foodPages.appendChild(backBtn);
    foodPages.appendChild(container);
  }
});

// State-Region Interaction Events
paths.forEach(function(path) {
  path.addEventListener("mouseover", function(e) {
    path.classList.add("highlight");
    const id = path.getAttribute("id");
    const info = stateInfo[id] || { name: "未知", capital: "未知", flag: "" };
    
    // Create infobox content that includes the state flag
    let flagHtml = "";
    if (info.flag) {
      flagHtml = `<img src="${info.flag}" class="flag-img" alt="${info.name} Flag" onerror="this.style.display='none'">`;
    }
    
    infoBox.innerHTML = `
      <div class="state-name">${info.name}</div>
      <div class="state-capital">Capital: ${info.capital}</div>
      ${flagHtml}
    `;
    infoBox.style.display = "block";
  });

  path.addEventListener("mouseout", function() {
    path.classList.remove("highlight");
    infoBox.style.display = "none";
  });

  path.addEventListener("mousemove", function(e) {
    infoBox.style.left = (e.pageX + 10) + "px";
    infoBox.style.top = (e.pageY + 10) + "px";
  });

  path.addEventListener("click", function() {
    const id = path.getAttribute("id");
    showFoodPage(id);
  });
});

// Drag and drop function
mapContainer.addEventListener("mousedown", function(e) {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  mapContainer.style.cursor = "grabbing";
});

mapContainer.addEventListener("mousemove", function(e) {
  if (isDragging) {
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    
    mapContainer.scrollLeft -= deltaX;
    mapContainer.scrollTop -= deltaY;
    
    lastX = e.clientX;
    lastY = e.clientY;
  }
});

mapContainer.addEventListener("mouseup", function() {
  isDragging = false;
  mapContainer.style.cursor = "grab";
});

mapContainer.addEventListener("mouseleave", function() {
  isDragging = false;
  mapContainer.style.cursor = "grab";
});

// Mouse wheel zoom
mapContainer.addEventListener("wheel", function(e) {
  e.preventDefault();
  
  const rect = mapContainer.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const delta = e.deltaY < 0 ? 1.1 : 0.9;
  currentScale *= delta;
  currentScale = Math.max(0.5, Math.min(3, currentScale));
  
  updateMapTransform();
});

// zoom button
document.getElementById("zoom-in").addEventListener("click", function() {
  currentScale = Math.min(3, currentScale * 1.2);
  updateMapTransform();
});

document.getElementById("zoom-out").addEventListener("click", function() {
  currentScale = Math.max(0.5, currentScale / 1.2);
  updateMapTransform();
});

document.getElementById("reset-view").addEventListener("click", function() {
  currentScale = 1;
  currentX = 0;
  currentY = 0;
  mapContainer.scrollLeft = (mapWrapper.scrollWidth - mapContainer.clientWidth) / 2;
  mapContainer.scrollTop = (mapWrapper.scrollHeight - mapContainer.clientHeight) / 2 + 550;
  updateMapTransform();
});

// Update map transform
function updateMapTransform() {
  svg.style.transform = `scale(${currentScale}) translate(${currentX}px, ${currentY}px)`;
}

// Initial center display
window.addEventListener("load", function() {
  setTimeout(() => {
    mapContainer.scrollLeft = (mapWrapper.scrollWidth - mapContainer.clientWidth) / 2;
    mapContainer.scrollTop = (mapWrapper.scrollHeight - mapContainer.clientHeight) / 2;
  }, 100);
});

// Keyboard navigation
document.addEventListener("keydown", function(e) {
  const step = 50;
  switch(e.key) {
    case "ArrowLeft":
      mapContainer.scrollLeft -= step;
      break;
    case "ArrowRight":
      mapContainer.scrollLeft += step;
      break;
    case "ArrowUp":
      mapContainer.scrollTop -= step;
      break;
    case "ArrowDown":
      mapContainer.scrollTop += step;
      break;
    case "=":
    case "+":
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        document.getElementById("zoom-in").click();
      }
      break;
    case "-":
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        document.getElementById("zoom-out").click();
      }
      break;
    case " ":
      e.preventDefault();
      document.getElementById("reset-view").click();
      break;
  }
});