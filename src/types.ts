export interface NewsCategory {id: number, title: string}
export interface NewsPost {link: string, pic: string, title: string, category: string}
export interface NewsData {categories: Array<NewsCategory>, news: Array<NewsPost>}
