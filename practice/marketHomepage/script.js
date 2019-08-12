// Header_Line
var header_line={
  links:[
    {url:"https://www.facebook.com/inateckofficial/"},
    {url:"https://www.instagram.com/inateck/"},
    {url:"http://www.twitter.com/inateckofficial"},
    {url:"https://www.youtube.com/user/inateckofficial"},
    {url:"https://www.inateck.com/mailto:support@inateck.com"}
    ],
  countrys:[
    {name:"United States",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/USA.png",url:"https://www.inateck.com/"},
    {name:"Deutschland",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Deutsch.png",url:"https://www.inateck.com/de/"},
    {name:"France",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Français.png",url:"https://www.inateck.com/fr/"},
    {name:"日本",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/japan.png",url:"https://www.inateck.com/jp/"},
    {name:"Italia",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Italiano.png",url:"https://www.inateck.com/it/"},
    {name:"United Kingdom",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/UK.png",url:"https://www.inateck.com/uk/"},
    ],
  texts:[
    {text:"SIGN IN",url:"https://www.inateck.com/customer/account/login/"},
    {text:"REGISTER",url:"https://www.inateck.com/customer/account/create/"},
    {text:"CONTACT US",url:"https://www.inateck.com/contacts"},
  ],
}
new Vue({
  el: '#Header_Line',
  data: header_line,
  computed: {
    select_countrys: function () {
      return this.countrys.filter(function (country) {
          return window.location.href.indexOf(country.url) ===-1
      })
    },
    now_country:function () {
      return this.countrys.filter(function (country) {
        return country.url ==="https://www.inateck.com/"
      })
    }
  },
})
// Navbar
var navbar={
  logo:'https://www.inateck.com/media/welldone/default/inateck-logo-black_1.png',
  prompt:"Search...",
  navbar:[
    {text:"PRODUCTS"},
    {text:"XMAS SALE",active:"true",src:"https://www.inateck.com/skin/frontend/welldone/default/images/chritmas_hat.png"},
    {text:"COMMUNITY"},
    {text:"SUPPORT"},
  ],
  product:[
    {title:"PROTECTION",url:"https://www.inateck.com/protection.html?SID=v69d8jgug2kcjvap6o1om1nma3",catalog:[{text:"Laptop Sleeve",url:"https://www.inateck.com/protection/laptop-sleeve.html?SID=v69d8jgug2kcjvap6o1om1nma3",detail:[{text:"11 Inch Laptop Sleeves",url:"https://www.inateck.com/protection/laptop-sleeve/11-inch-macbook-air.html?SID=v69d8jgug2kcjvap6o1om1nma3"},{text:"12 Inch Laptop Sleeves",url:"https://www.inateck.com/protection/laptop-sleeve/11-inch-m"},{text:"13 Inch Laptop Sleeves",url:"https://www.inateck.com/protection/laptop-sleeve/11-inch-m"},{text:"14 Inch Laptop Sleeves",url:"https://www.inateck.com/protection/laptop-sleeve/11-inch-m"}]},{text:"Kindle Protection"},{text:"Tablet Sleeve"},{text:"Backpack"},{text:"Storage bag/Wallet"},{text:"Camera Backpack"}]},
    {title:"HARD DRIVE ACCESSORIES",catalog:[{text:"HDD Enclosures"},{text:"HDD Docking Station"},{text:"Adapters & Mounting"},{text:"Hard Drive Cases"}]},
    {title:"LASER POINTERS & BT ADAPTERS",catalog:[{text:"Wireless Presenter"},{text:"Bluetooth Adapter"}]},
    {title:"PCI EXPRESS CARDS & HUBS",catalog:[{text:"PCI-E to USB 3.0 Express Cards"},{text:"USB 3.0 Hubs"}]},
    {title:"BARCODE SCANNERS",catalog:[{text:"2.4G Wireless Barcode Scanners"},{text:"Bluetooth Wireless Barcode Scanners"},{text:"Wired Barcode Scanners & Scanner Stand"},{text:"2D Barcode Scanners"}]},
    {title:"MOUSE PAD & KEYBOARD",catalog:[{text:"Mouse Pads"},{text:"Keyboards"}]},
    {title:"AUDIO",catalog:[{text:"Bluetooth Speakers"},{text:"Headphones"},{text:"Audio Cables"}]},
    {title:"PHONE ACCESSORIES",catalog:[{text:"Phone/Tablet Holder"}]},
    {title:"CHARGERS & CABLES & ADAPTERS",catalog:[{text:"Cables"},{text:"USB-C Chargers"},{text:"Adapters"}]},
    {title:"HOME IMPROVEMENT",catalog:[{text:"Tomons"},{text:"Digital Scale"}]},
  ],
  support:[
    {text:"Manuals",url:"https://www.inateck.com/support"},
    {text:"USB-C FAQ",url:"https://www.inateck.com/USB-C-explained-PD-chargers-hubs-enclosures.html"},
    {text:"Contact Us",url:"https://www.inateck.com/contacts"},
  ],
  others:{
    search:"Search...",
    money:"$0.00",
    number:"0",
  }
}
new Vue({
  el: '#Navbar',
  data: navbar,
})
//carousel
var carousel={
  Banner:[
    {src:'https://www.inateck.com/media/wysiwyg/banner_notxt/scanner-banner.jpg',title:'High-End Barcode Scanner Series',subtitle:'More Powerful Decodeing Ability Prolonged',button:'Learn More'},
    {src:'https://www.inateck.com/media/wysiwyg/banner_notxt/usb-c-banner.jpg',title:'Why USB-C?',subtitle:'Why Inateck USB-C Devices?',button:'Learn More'},
    {src:'https://www.inateck.com/media/wysiwyg/banner_notxt/christmas-p-banner.jpg'},
    {src:'https://www.inateck.com/media/wysiwyg/banner_notxt/backpack-banner.jpg'},
  ],
  showIndex:0,
}
new Vue({
  el: '#Carousel',
  data: carousel,
})
//body content
var body_content={
  Content:[
    {title:"XAMS SALE PRODUCTS",product:[
        {introduce:"Inateck 601W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 602W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 603W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 604W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 605W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 606W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 607W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 608W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 609W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 6010W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 6011W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 6012W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 6013W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
        {introduce:"Inateck 6014W PD USB C Wall Charger with Foldable Plug",price:"$36.99",img:"https://www.inateck.com/media/catalog/product/cache/1/small_image/263x330/9df78eab33525d08d6e5fb8d27136e95/7/1/71nu3a6u6ml__sl1500_.jpg"},
      ]},
  ],
  Carousel_Bottom:[
    {title:"PRODUCTS CATEGORIES",categories:[
        {text:"Barcode Scanners1",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners2",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners3",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners4",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners5",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners6",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
        {text:"Barcode Scanners7",img:"https://www.inateck.com/media/wysiwyg/Inateck/category/scanner.jpg"},
      ],block:[],showBlock:5,num:0}
  ],
}
new Vue({
  el:"#Body_Content",
  data:body_content,
})
var footer={
  column_links:{
    text:"Inateck is dedicated in the field of various high-quality niche electronic related products. With 6+ years history, we are particularly famous for our laptop sleeves & bags, barcode scanners, USB-C Chargers, HDD enclosures, docking station and more. We enjoy a great reputation around the world.",
    src:"https://www.inateck.com/media/welldone/default/inateck-logo-whit_5.png",
    title_center:"INFORMATION",
    INFORMATION:[{text:"Terms of Use"},{text:"Privacy Policy"},{text:"Return Policy"},{text:"Sitemap"},{text:"Blog"},],
    title_right:"COMPANY INFO",
    COMPANY_INFO:[
      {text:"Inateck Technology Inc. 6045 Harrison Drive Suite 6, Las Vegas, Nevada 89120 U.S.A"},
      {text:"F&M TECHNOLOGY GmbH Montgolfierstraße 6, 04509 Wiedemar Germany"},
      {text:"+1 702-445-7528/+49 152-22128681"}, ],
    COMPANY_INFO_bottom:[{text:"Technical Support:",link:"support@inateck.com",url:"mailto:support@inateck.com"},
      {text:"Business Inquiries:",link:"vendor@inateck.com",url:"mailto:vendor@inateck.com"},
      {text:"Connect with us on Facebook:",link:"https://www.facebook.com/inateckofficial",url:"https://www.facebook.com/inateckofficial"},],

  },
  subscribe:{text:"NEWSLETTER \nEt exclusive news, offers, etc.",prompt:"Your e-mail address",button_text:"Subscribe",},
  bottom:"© 2018 INATECK STORE. ALL RIGHTS RESERVED.",
  links:[
    {url:"https://www.facebook.com/inateckofficial/"},
    {url:"https://www.instagram.com/inateck/"},
    {url:"http://www.twitter.com/inateckofficial"},
    {url:"https://www.youtube.com/user/inateckofficial"},
    {url:"Business Inquiries: vendor@inateck.com"},
    {url:"Connect with us on Facebook: https://www.facebook.com/inateckofficial"},
  ],
  countrys:[
    {name:"United States",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/USA.png",url:"https://www.inateck.com/"},
    {name:"Deutschland",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Deutsch.png",url:"https://www.inateck.com/de/"},
    {name:"France",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Français.png",url:"https://www.inateck.com/fr/"},
    {name:"日本",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/japan.png",url:"https://www.inateck.com/jp/"},
    {name:"Italia",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/Italiano.png",url:"https://www.inateck.com/it/"},
    {name:"United Kingdom",flag:"https://www.inateck.com/media/wysiwyg/Inateck/page/UK.png",url:"https://www.inateck.com/uk/"},
  ],
}
new Vue({
  el:"#Footer",
  data:footer,
  computed: {
    select_countrys: function () {
      return this.countrys.filter(function (country) {
        return window.location.href.indexOf(country.url) ===-1
      })
    },
    now_country:function () {
      return this.countrys.filter(function (country) {
        return country.url ==="https://www.inateck.com/"
      })
    }
  },
})