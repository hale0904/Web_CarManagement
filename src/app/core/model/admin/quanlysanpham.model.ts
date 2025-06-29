export class Hang {
  company: string;

  constructor(company: string) {
    this.company = company;
  }
}

export class SanPham extends Hang {
  id: string;
  nameCar: string;
  imgCar: string;
  description: string;
  price: number;

  constructor(
    id: string,
    nameCar: string,
    imgCar: string,
    description: string,
    price: number,
    company: string
  ) {
    super(company);
    this.id = id;
    this.nameCar = nameCar;
    this.imgCar = imgCar;
    this.description = description;
    this.price = price;
  }
}