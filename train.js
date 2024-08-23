// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require('moment');
const time = moment().format('HH:mm');

class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non: non,
      lagmon: lagmon,
      cola: cola,
    };
  }

  qoldiq() {
    return `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
  }

  sotish(product, amount) {
    if (this.products[product] >= amount) {
      this.products[product] -= amount;
      return `Hozir ${time}da ${amount}ta ${product} sotildi!`;
    } else {
      return `Hozir ${time}da ${product} yetarli miqdorda emas!`;
    }
  }

  qabul(product, amount) {
    this.products[product] += amount;
    return `Hozir ${time}da ${amount}ta ${product} qabul qilindi!`;
  }
}

const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq());
console.log(shop.sotish('non', 3));
console.log(shop.qabul('cola', 4));
console.log(shop.qoldiq());
