// class model implements RootObject {
//     articles: Article[] =[]
//     constructor(
//         articles: Article[] ,
//     ){}
// }
interface RootObject {
    articles: Article[];
  }
  
  interface Article {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }
 class news implements Article{
    source: Source = {id:'', name:''};
    author?: string = '';
    title: string = '';
    description: string = '';
    url: string = '';
    urlToImage: string ='';
    publishedAt: string = '';
    content: string =''
   static title: any;
    constructor(    
        source: Source,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string,
        author?: string,
        ){}
  }
  interface Source {
    id?: string;
    name: string;
  }
  export default news;