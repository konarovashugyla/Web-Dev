export interface Product{
 
  id: number;
  name: string;
  price: number;
  description: string;
  link? : string ;
  image:string;
  rating:number;
  category:string;
  likes:number;
}

export const products : Product[]=[
  {
    id: 1,
    name: 'ISEHAN эссенция Sunkiller Perfect Water SPF50 50 мл',
    price: 6898,
    description: 'A large phone with one of the best screens',
    link:'https://kaspi.kz/shop/p/isehan-essentsija-sunkiller-perfect-water-spf50-50-ml-100386249/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h75/49838050082846/isehan-sunkiller-perfect-water-essence-spf50-essentsiya-50-ml-100386249-1.jpg',
    rating:'2',
    category:"For woman",
    likes:0
  },
  {
    id: 2,
    name: 'PMars Bounty шоколадный батончик молочный, кокос 55 г',
    price: 263,
    description: 'A great phone with one of the best cameras',
    link:'https://kaspi.kz/shop/p/mars-bounty-shokoladnyi-batonchik-molochnyi-kokos-55-g-100222674/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h29/46752209240094/bounty-shokoladnyi-batonchik-molochnyi-kokos-55-g-100222674-1.jpg',
    rating:'5',
    category:"Home",
    likes:0
  },
  {
    id: 3,
    name: 'Наборы игрушек Beibe Good Home kitchen 889-211',
    price: 28924,
    description: 'комплектация: раковина с краном с водой, 65 аксессуаров в комплекте',
    link:'https://kaspi.kz/shop/p/beibe-good-home-kitchen-889-211-100802645/?c=750000000#!/item',
    Image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/hdd/49877558657054/beibe-good-home-kitchen-889-211-100802645-1.jpg',
    rating:'4,5',
    category:"For baby",
    likes:0
  },
  {
  id: 4,
    name: 'Комплект для ванной Исток СК22, черный',
    price: 23969,
    description: 'комплектация: стеллаж',
    link:'https://kaspi.kz/shop/p/istok-sk22-chernyi-106721782/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/he7/62955170136094/istok-sk22-cernyj-106721782-1.jpg',
    rating:'3',
  category:"For woman",
  likes:0
},
{
  id: 5,
    name: 'Dr. Jart Ceramidin крем для рук 50 мл',
    price: 3374,
    description: 'область нанесения: для рук',
    link:'https://kaspi.kz/shop/p/dr-jart-ceramidin-krem-dlja-ruk-50-ml-17601131/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hba/31883658133534/dr-jart-ceramidin-hand-cream-50-ml-17601131-1-Container.jpg',
    rating:'10',
  category:"For woman",
  likes:0
},

  {
    id: 6,
    name: 'Наушники Apple AirPods 3 белый',
    price: 92264,
    description: 'подключение: беспроводное тип акустического оформления: открытые',
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg',
    rating:'6',
    category:"Technique",
    likes:0
  },
  {
    id: 7,
    name: 'PФотокамера моментальной печати Instax MINI 11 фиолетовый + пленка 20 шт',
    price: 60700,
    description: 'тип элемента питания: батарейки AA',
    link:'https://kaspi.kz/shop/p/instax-mini-11-fioletovyi-plenka-20-sht-103580120/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h9d/65599303712798/instax-mini-11-fioletovyi-plenka-20-sht-103580120-1.jpg',
    rating:'5',
    category:"Technique",
    likes:0
  },
  {
    id: 8,
    name: 'бигуди 579538964 фиолетовый 6 шт',
    price: 995,
    description: 'материал: пластик',
    link:'https://kaspi.kz/shop/p/579538964-bigudi-579538964-fioletovyi-6-sht-106769606/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/ha1/63041275461662/579538964-bigudi-579538964-fioletovyi-6-sht-106769606-1.jpg',
    rating:'7',
    category:"For woman",
    likes:0
  },
  {
    id: 9,
    name: 'Dyson HS05 Airwrap Complete фен-щетка 1300 W',
    price: 499990,
    description: 'мощность, Вт: 1300',
    link:'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-fen-schetka-1300-w-106790035/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h8c/63083544707102/dyson-hs05-airwrap-complete-fen-setka-1300-w-106790035-1.jpg',
    rating:'10',
    category:"Technique",
    likes:0
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    price: 993035,
    description: 'диагональ экрана: 14.2 дюйм',
    link:'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h93/47153374134302/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rating:'10',
    category:"Technique",
    likes:0
  },
];




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
