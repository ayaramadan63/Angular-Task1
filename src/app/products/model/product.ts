export interface Product{
    id:number,
    title: string,
    description:string,    
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images ?:[]
}

export interface addProduct{
    title: string,
    price: string,
    category: string,

}

export interface deleteProductRes{
    id:number,
    title:string
}

