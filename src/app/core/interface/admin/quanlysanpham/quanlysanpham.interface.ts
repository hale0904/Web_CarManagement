export interface ProductCardModel {
  linkItem: string;
  title: string;
  imageUrl: string;
  description: string;
  company: string;
  links: { linkBtn: string; linkText: string }[];
}
